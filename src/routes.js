import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/header'
import Artist from './components/Artist'
function Routes() {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path = "/artist/:id" exact component = {Artist}/>
            <Route path= "/" exact component= {Home}/>>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes