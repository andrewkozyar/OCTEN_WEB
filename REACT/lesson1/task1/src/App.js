import React, {Component} from 'react';
import Car from "./component/car/Car";


class App extends Component {

    cars = [
        {
            model: 'c250',
            year: 2014,
            power: 200,
            collor: 'white'
        },
        {
            model: '328',
            year: 2012,
            power: 180,
            collor: 'black'
        },
        {
            model: 'lanos',
            year: 2006,
            power: 100,
            collor: 'green'
        },
        {
            model: 'camry',
            year: 2015,
            power: 270,
            collor: 'gold'
        },
        {
            model: 'huracan',
            year: 2020,
            power: 850,
            collor: 'carbon'
        },
        {
            model: 'golf',
            year: 2009,
            power: 70,
            collor: 'red'
        },
        {
            model: '5',
            year: 1998,
            power: 80,
            collor: 'blue'
        },
        {
            model: 'panamera',
            year: 2013,
            power: 460,
            collor: 'white'
        },
        {
            model: 'pagero',
            year: 2005,
            power: 130,
            collor: 'silver'
        },
        {
            model: 'megane',
            year: 2010,
            power: 110,
            collor: 'green'
        },
    ]

    render() {
        return (
            <div>
                {
                    this.cars.map((value, index) => <Car car={value} key={index}/>   )

                }
            </div>
        );
    }
}

export default App;