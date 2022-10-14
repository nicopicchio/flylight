import React from 'react';
import '../Header/Header.css'
import backIcon from '../../assets/Back-icon.svg'
import Switch from '@mui/material/Switch';

export default function Header() {
  return (
    <div className='header-container'>
      <img src={backIcon} alt="back button" />
      <div className='switch-container'>
        <Switch/>
        <p className='eco-mode'>ECO</p>
      </div>

    </div>
  )
}
