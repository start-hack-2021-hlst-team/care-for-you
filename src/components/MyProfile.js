import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Profile from './image-acets/Profile.png'

export default class MyProfile extends Component {
  render() {
    return (
      <div className='profile'>
          <Link>
              <img className='profile-pic' src={Profile} alt='profile'></img>
          </Link>
      </div>
    )
  }
}
