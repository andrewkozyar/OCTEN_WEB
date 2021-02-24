const errorCodes = require('../constant/errorCodes.enum');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
           const{name, email, password} = req.body;

           if(!name || !email || !password){
               throw new Error ('some filed is empty');
           }

           if (password.length < 5){
               throw new Error ('to weak password');
           }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }


}
