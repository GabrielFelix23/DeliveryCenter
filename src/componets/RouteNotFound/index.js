import React from 'react'
import {Link} from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";

import './style.css'

class RouteNotFound extends React.Component{
    render(){
        return(
            <div id="containerRouteNotFound">
                <div className="RouteNotFound">
                    <h1>Esse endereço não existe!</h1>
                    <small>Por favor voltar para lista de usuários.</small>
                    <Link to="/"><FiArrowLeft className="arrow"/>Voltar</Link>
                </div>
            </div>
        )
    }
}

export default RouteNotFound