import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './componets/Header'
import Home from './componets/Home'
import RouteNotFound from './componets/RouteNotFound'

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="*" component={RouteNotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes