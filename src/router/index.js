import Vue from 'vue'
import Router from 'vue-router'
import Navigation from "../components/Navigation"
import FirstCourse from '../components/FirstCourse'
import WeatherCourse from '../components/WeatherCourse'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Navigation',
            component: Navigation
        },
        {
            path: '/firstCourse',
            name: 'FirstCourse',
            component: FirstCourse
        },
        {
            path: '/weatherCourse',
            name: 'WeatherCourse',
            component: WeatherCourse
        }
    ]
})
