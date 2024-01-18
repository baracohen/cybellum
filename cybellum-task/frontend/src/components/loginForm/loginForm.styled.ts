import { styled } from '@mui/system';
import { Grid, Typography, TextField, Button } from '@mui/material';
import theme from 'themes/default';

export const StyledGridFormContainer = styled(Grid)(() => ({
      marginTop:'32px',
      display:'block'
  }));

  
  export const StyledErrorMsg = styled(Typography)(() => ({
    color: '#BA1A1A',
    width:'100%',
    fontSize:'12px'

}));

export const StyledTextField = styled(TextField)(() => ({
  fontSize:'16px',
  borderRadius:4,
  border:1,
  "& label.Mui-focused": {
      color: '#4D4D4D'
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: '1px solid #4D4D4D'
    }
  },
  '& .MuiInputLabel-root': {
    color: '#4D4D4D',
    fontSize:'14px',
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.error.dark,
    border: '1px #BA1A1A',
  },
  
  '& .MuiInputBase-root': {
    padding:'4px 16px 4px 16px',
    height: 48,
  },
  
  '& .Mui-error .MuiOutlinedInput-notchedOutline':{
    borderColor:'#BA1A1A'
  }
}));

export const StyledLoginBtn = styled(Button)(() => ({
  background:'rgba(186, 161, 130, 1)',
  marginTop:theme.spacing(6),
  color: '#2A2118',
  height:40,
  fontWeight:500,
  fontSize:'16px',
  boxShadow: 'inherit',

  '&:hover': {
    boxShadow: '0px 1px 2px 1px #1C1B1F4D',
    background: '#BAA182',
  },
}));


export const StyledForgotPassBtn = styled(Button)(() => ({
  color: '#4D4D4D',
  fontSize:'14px',
  padding: "2px 4px 2px 4px",
  borderRadius:'4px',
  height:24,
  '&:hover': {
    background: theme.palette.action.hover,
  },
}));
