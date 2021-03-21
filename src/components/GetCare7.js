import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare77 from './image-acets/GetCare77.png';

export default class GetCare7 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='my-records'>
                <img src={GetCare77} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}