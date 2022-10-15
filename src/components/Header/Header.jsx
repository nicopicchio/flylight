import React from 'react';
import '../Header/Header.css'
import backIcon from '../../assets/Back-icon.svg'
import Switch from '@mui/material/Switch';
import { useNavigate  } from 'react-router-dom'
import { styled } from '@mui/material/styles';

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className='header-container'>
      <button className='back-btn' onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back button" />
      </button>

      <div className='switch-container'>
        <p className='eco-mode'>ECO</p>
        <CustomSwitch />
      </div>

    </div>
  )
}

const CustomSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#00BBB0',
      '& + .MuiSwitch-track': {
        backgroundColor: "#00BBB0",
        opacity: 0.3,
      },
    }
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));