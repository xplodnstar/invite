import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSanctuary } from '../actions/actions'
import { GiReturnArrow } from "react-icons/gi"

class Sanctuary extends Component {
    componentDidMount() {
        getSanctuary()
    }

    render() {
        return (
            <div className="sanctuary">
                <div className="sancTitle">Headed to Sanctuary</div>
                <Link to="/" className="return"><GiReturnArrow></GiReturnArrow> Back to Home Page</Link>
                <ul className="sancCards">
                    {this.props.sanctuary.map(person => (
                        <li className="sancPeople" key={person.email}>
                            <div className="sancPerson">
                                <div className="sancPic"><img src={person.thumbnail} alt="" id="sancPicture" /></div>
                                <div className="sancInfo">
                                    <div className="sancName"><p>{person.first} {person.last}</p></div>
                                    <div className="sancPhone"><p>{person.phone}</p></div>
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
        sanctuary: appState.sanctuary
    }
}

export default connect(mapStateToProps)(Sanctuary)