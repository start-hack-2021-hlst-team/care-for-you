import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare66 from './image-acets/GetCare66.png';

export default class GetCare6 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='get-care7'>
                <img src={GetCare66} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}