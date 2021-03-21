import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './image-acets/Heading.png';
import Group9 from './image-acets/Group9.png';
import Group2 from './image-acets/Group2.png';
import Group4 from './image-acets/Group4.png';
import Group8 from './image-acets/Group8.png';
import Group5 from './image-acets/Group5.png';
import Group21 from './image-acets/Group21.png';
import Group875 from './image-acets/Group875.png';
import Group867 from './image-acets/Group867.png';
import Component4 from './image-acets/Component4.png';
import Component5 from './image-acets/Component5.png';


export default class MyRecords extends Component {
  render() {
    return (
      <div>
          <div className='header'>
            <img src={Header} alt='header'/>
          </div>
          <div className='item'>
          <img src={Group9} alt='item'/>
          </div>
          <div className='item'>
          <img src={Group2} alt='item'/>
          </div>
          <div className='item'>
          <img src={Group4} alt='item'/>
          </div>
          <div className='item'>
          <img src={Group9} alt='item'/>
          </div>
          <div className='item'>
          <img src={Group8} alt='item'/>
          </div>
          <div className='item'>
          <img src={Group5} alt='item'/>
          </div>
          <div className='item'>
          <img src={Group875} alt='item'/>
          </div>

        <div className='add-record'>
          <Link to='add-record'>
            <img src={Component5} alt='add-item'/>
          </Link>
        </div>

        <div className='bottom-links'>
          
          <div className='records-icon'>
          <Link to='my-records'>
          <img src={Component4} alt='add-item'/>
          </Link>
          </div>

          <div className='get-care-icon'>
            <Link to='get-care1'>
              <img src={Group21} alt='get-care'/>
            </Link>
          </div>

          <div className='my-profile-icon'>

          <Link to='my-profile'>
            <img src={Group867} alt='my-profile'/>
          </Link>
          </div>

        </div>

        

      </div>
    )
  }
}
