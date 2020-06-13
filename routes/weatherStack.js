import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';     
import {createAppContainer} from 'react-navigation';
import Home from '../components/home';
import Weather from '../components/weather'

const screens = {
    Home : {
        screen: Home,
    },

    Weather : {
        screen: Weather,
    }
}

const weatherStack = createStackNavigator(screens);
export default createAppContainer(weatherStack);
