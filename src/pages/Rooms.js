import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer'

const Rooms = () =>{
    return (
        <>
    <Hero hero="roomsHero">
        <Banner title="nuestros cuartos">
        <Link to='/' className='btn-primary'>
            volver
        </Link>
    </Banner>
    </Hero>
    <RoomContainer/>
    </>
    )
}

export default Rooms;
