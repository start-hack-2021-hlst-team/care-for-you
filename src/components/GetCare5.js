import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare55 from './image-acets/GetCare55.png';

export default class GetCare5 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='get-care6'>
                <img src={GetCare55} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}