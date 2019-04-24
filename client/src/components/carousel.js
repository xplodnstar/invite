import React, { Component } from 'react';
import { connect } from 'react-redux'

class Carousel extends Component {

    render() {
        return (
            <div className="carousel">
                <div className="caroTitle">Going to the Carousel</div>
                <ul className="caroCards">
                    {this.props.carousel.map(person => (
                        <li className="caroPeople" key={person.email}>
                            <div className="caroPerson">
                                <div className="caroPic"><img src={person.thumbnail} alt="" id="caroPicture" /></div>
                                <div className="caroInfo">
                                    <div className="caroName"><p>{person.first} {person.last}</p></div>
                                    <div className="caroPhone"><p>{person.phone}</p></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        carousel: appState.carousel
    }
}

export default connect(mapStateToProps)(Carousel)