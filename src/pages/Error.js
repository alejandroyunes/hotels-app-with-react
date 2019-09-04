import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';



export default  function Error(){
    return <Hero>
        <Banner title='404' subtitle="página no encontrada">
        <Link to="/" className="btn-primary">
            volver
        </Link>
    </Banner>
    </Hero>
};