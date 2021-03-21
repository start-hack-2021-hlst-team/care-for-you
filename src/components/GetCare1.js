import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare from './image-acets/GetCare.png';

export default class GetCare1 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='get-care2'>
                <img src={GetCare} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}
