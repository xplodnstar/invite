import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GiCircleSparks } from "react-icons/gi"
import { GiSecretBook } from "react-icons/gi"

import { getPerson } from '../actions/actions'
// import router from '.../server/routes/index'
// { addCarousel, addSanctuary }


class Person extends Component {
    componentDidMount() {
        getPerson()
    }

    render() {
        return (
            <div className="card">
                <div className="person">
                    <div className="pic"><img src={this.props.picture} alt="" id="picture" /></div>
                    <div className="info">
                        <div className="name"><div className="label">Name:</div><p>{this.props.first} {this.props.last}</p></div>
                        <div className="email"><div className="label">Email:</div><p>{this.props.email}</p></div>
                        <div className="phone"><div className="label">Phone:</div><p>{this.props.phone}</p></div>
                    </div>
                </div>
                <div className="age">{this.props.age}</div>
                <form className="buttons">
                    <div className="button"><button id="carousel"
                    // action="/carousel" method="POST"
                    // onClick={addCarousel()}
                    ><GiCircleSparks></GiCircleSparks></button></div>
                    <div className="button"><button id="sanctuary"
                    // method="POST" action="/sanctuary"
                    // onClick={addSanctuary()}
                    ><GiSecretBook></GiSecretBook></button></div>
                </form>
                <div className="listLinks">
                    {/* need to reference the number of items in the array */}
                    <div><Link className="link" to="/carousel">Carousel {this.props.carousel.length}</Link></div>
                    <div><Link className="link" to="/sanctuary">Sanctuary {this.props.sanctuary.length}</Link></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    console.log(appState)
    return {
        first: appState.first,
        last: appState.last,
        email: appState.email,
        phone: appState.phone,
        age: appState.age,
        picture: appState.picture,
        thumbnail: appState.thumbnail,
        carousel: appState.carousel,
        sanctuary: appState.sanctuary
    }
}

export default connect(mapStateToProps)(Person)