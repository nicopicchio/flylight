import { Switch } from "@mui/material";
import { styled } from '@mui/material/styles';

const CustomSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    position: 'absolute',
    top: '8%',
    left: '7%',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(14px)',
      color: '#00BBB0',
      '& + .MuiSwitch-track': {
        backgroundColor: "#00BBB0",
        opacity: 0.3,
      },
    }
  },
  '& .MuiSwitch-thumb': {
    color: '#00BBB0',
    width: 16,
    height: 16,
    borderRadius: 25,
  },
  '& .MuiSwitch-track': {
    height: '16px',
    width: '32px',
    borderRadius: 25,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 400,
    }),
  },
}));

export default CustomSwitch