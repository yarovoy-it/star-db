import React, {Component} from 'react';
import Header from "../header/header";

import './app.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {

    state = {
        hasError: false
    }


    componentDidCatch() {
        console.log(' componentDidCatch()')
        this.setState({hasError: true})
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className='stardb-app'>
                <Header/>
                <RandomPlanet/>
                <div>
                    <ErrorButton/>
                </div>
                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>
            </div>
        )
    }
}

