import React, {Component} from 'react';

class Car extends Component {



    render() {

        let {car} = this.props

        return (
            <div>
                <h3>
                    {car.model} - {car.year} - {car.power} - {car.collor}
                </h3>
            </div>
        );
    }
}

export default Car;