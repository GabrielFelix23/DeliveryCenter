import React from 'react'
import api from '../API'
import { BsPerson, BsHouse, BsGeo, BsPhone, BsBuilding, BsSearch } from 'react-icons/bs';

import './style.css'
import user from '../Images/user.png'

class Home extends React.Component{
    state = {
        userList: [],
        search: ''
    }

    async componentDidMount(){
        const response = await api.get("")
        this.setState({userList: response.data})
    }

    render(){
        const {userList, search} = this.state
        
        return(
            <div id="contianerUserList">
                <div className="imageUser">
                    <img src={user} className="user" alt="User"/>
                    <div className="containerSearch">
                        <h1 className="titulo">Lista de usuários</h1>

                        <input type="text" className="search" placeholder="Pesquisa por nome..."
                        onChange={e => this.setState({search: e.target.value})}/>
                        <BsSearch/>
                    </div>
                </div>
                
                
               
                {userList.filter((data) => {
                    if(search === '') {
                        return data
                    }else if(data.name.toLowerCase().includes(search.toLowerCase())){
                        return data
                    }
                }).map((data) => {
                    return(
                        <section key={data.id}>
                            <div className="containerListDataUsers">
                                <BsPerson/>
                                <small><span>Usuário:</span> {data.name}</small>
                                <small><span>Apelido:</span> {data.username}</small>
                                <small><span>E-mail:</span> {data.email}</small>
                                <BsHouse/>
                                <small><span>Endereço:</span> {data.address.street}</small>
                                <small><span>Suíte:</span> {data.address.suite}</small>
                                <small><span>Cidade:</span> {data.address.city}</small>
                                <small><span>Código postal:</span> {data.address.zipcode}</small>
                                <BsGeo/>
                                <small><span>Latitude:</span> {data.address.geo.lat}</small>
                                <small><span>Longitude:</span> {data.address.geo.lng}</small>
                                <BsPhone/>
                                <small><span>Telefone:</span> {data.phone}</small>
                                <small><span>WebSite:</span> {data.website}</small>
                                <BsBuilding/>
                                <small><span>Companhia:</span> {data.company.name}</small>
                                <small><span>Frase de efeito:</span> {data.company.catchPhrase}</small>
                                <small><span>Solução de negócio:</span> {data.company.bs}</small>
                            </div>
                        </section>
                    )
                })}

            </div>
        )
    }
}

export default Home