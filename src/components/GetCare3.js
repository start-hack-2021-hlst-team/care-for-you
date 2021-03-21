import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare33 from './image-acets/GetCare33.png';


export default class GetCare3 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='get-care4'>
                <img src={GetCare33} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}