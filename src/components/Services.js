import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'cócteles gratis',
                info:'lorem ipsum dolor sit amet consectecur adipisicing elit. Magni, corporis'
            },
            {
                icon: <FaHiking/>,
                title:'Senderismo sin fin',
                info:'lorem ipsum dolor sit amet consectecur adipisicing elit. Magni, corporis'
            },
            {
                icon: <FaShuttleVan />,
                title: 'transporte gratuito',
                info: 'lorem ipsum dolor sit amet consectecur adipisicing elit. Magni, corporis'
            },
            {
                icon: <FaBeer />,
                title: 'cerveza más fuerte',
                info: 'lorem ipsum dolor sit amet consectecur adipisicing elit. Magni, corporis'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title ="servicios"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
