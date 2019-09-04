import React, { Component } from 'react'
import defaultImg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
            defaultImg
        }
    }
    static contextType = RoomContext
    //componentDidMount(){} también se puede hacer con este metodo
    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return <div className="error">
                <h3>No pude encontrar esa habitación</h3>
                <Link to='/rooms' className="btn-primary">
                    volver a cuartos
                </Link>
            </div>
        }
        const {name, 
            description, 
            capacity, 
            size, 
            price, 
            extras,
            breakfast,
            pets,
            images} = room

        const [mainImg,...defaultImg] = images
        return (
        <>
        <StyledHero img={mainImg || this.state.defaultImg}>
        <Banner title={`cuarto ${name}`}>
            <Link to='/rooms' className="btn-primary">
                Volver a cuartos
            </Link>
        </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                        {defaultImg.map((item, index) =>{
                    return <img key={index} src={item} alt={name}/>
                }
                    )}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>detalles</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>precio: ${price}</h6>
                    <h6>tamaño: ${size} M2</h6>
                    <h6>
                        capacidad máxima: {
                        capacity > 1 ? `${capacity} personas`: `${capacity} persona` }
                    </h6>
                    <h6>
                        {pets ? "mascotas permitidas": "no se permiten mascotas"}
                    </h6>
                    <h6>
                        {breakfast && "desayuno incluido"}
                    </h6>
                
                </article>

            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((item, index)=>{
                    return <li key={index}>-{item}</li>
                })}
            </ul>
        </section>
        </>
        );
    }
}
