import React from 'react';
import '../Header/Header.css'
import backIcon from '../../assets/Back-icon.svg'
import Switch from '@mui/material/Switch';
import { useNavigate  } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className='header-container'>
      <button className='back-btn' onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back button" />
      </button>

      <div className='switch-container'>
        <Switch/>
        <p className='eco-mode'>ECO</p>
      </div>

    </div>
  )
}
