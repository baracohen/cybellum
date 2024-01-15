import { styled } from '@mui/system';
import { Grid, Typography, TextField, Button } from '@mui/material';
import theme from 'themes/default';

export const StyledGridFormContainer = styled(Grid)(() => ({
      maxWidth: theme.spacing(60),
      height:'70%',
  }));

  
  export const StyledErrorMsg = styled(Typography)(() => ({
    color: theme.palette.error.dark,
    width:'100%',
    fontSize:'12px'

}));

export const StyledTextField = styled(TextField)(() => ({
  marginBottom:theme.spacing(2),
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.error.dark,
  },
}));

export const StyledLoginBtn = styled(Button)(() => ({
  background: '#BAA182',
  color: 'black',
  '&:hover': {
    background: '#846E54',
  },
}));


export const StyledForgotPassBtn = styled(Button)(() => ({
  marginBottom: theme.spacing(5),
  color: 'black',
  '&:hover': {
    background: theme.palette.action.hover,
  },
}));
