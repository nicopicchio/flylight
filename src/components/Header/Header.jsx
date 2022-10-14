import React from 'react';
import '../Header/Header.css'
import backIcon from '../../assets/Back-icon.svg'
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
      <Link className='back-btn' to='/'>
        <img src={backIcon} alt="back button" />
      </Link>
      <div className='switch-container'>
        <Switch/>
        <p className='eco-mode'>ECO</p>
      </div>

    </div>
  )
}
