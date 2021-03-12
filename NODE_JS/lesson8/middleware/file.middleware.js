const {
    constants: {
        DOCS_MIMETYPES, FILE_MAX_SIZE, PHOTO_MAX_SIZE, PHOTOS_MIMETYPES
    }
} = require('../constant');

module.exports = {
    checkFileMiddleware: (req, res, next) => {
        try {
            const { files } = req;

            const docs = [];
            const photos = [];

            const allFiles = Object.values(files);

            for (let i = 0; i < allFiles.length; i++) {
                const { name, size, mimetype } = allFiles[i];

                if (PHOTOS_MIMETYPES.includes(mimetype)) {
                    if (size > PHOTO_MAX_SIZE) {
                        throw new Error(`File ${name} is too big`);
                    }

                    photos.push(allFiles[i]);
                } else if (DOCS_MIMETYPES.includes(mimetype)) {
                    if (size > FILE_MAX_SIZE) {
                        throw new Error(`File ${name} is too big`);
                    }

                    docs.push(allFiles[i]);
                } else {
                    throw new Error('Not valid file');
                }
            }

            req.docs = docs;
            req.photos = photos;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAvatar: (req, res, next) => {
        try {
            if (req.photos.length > 1) {
                throw new Error('You can upload only one photo');
            }

            [req.avatar] = req.photos;

            next();
        } catch (e) {
            next(e);
        }
    }
};
