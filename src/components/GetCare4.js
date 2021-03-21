import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare44 from './image-acets/GetCare44.png';


export default class GetCare3 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='get-care5'>
                <img src={GetCare44} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}