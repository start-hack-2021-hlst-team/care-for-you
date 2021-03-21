import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GetCare22 from './image-acets/GetCare-2.png';


export default class GetCare2 extends Component {
    render() {
        return (
            <div>
                <div className='my-profile-icon'>
                <Link to='get-care3'>
                <img src={GetCare22} alt='getcare'/>
                </Link>
                </div>
                
            </div>
        )
    }
}