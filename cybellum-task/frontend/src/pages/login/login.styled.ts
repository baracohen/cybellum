import { styled } from '@mui/system';
import { Grid, Button } from '@mui/material';
import theme from 'themes/default';

export const StyledGridLinkWrapper = styled(Grid)(({ theme }) => ({
  display:'flex',
  justifyContent: 'space-between', 
  width: '100%',

}));

export const StyledLeftGridHeaderContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center'
}));

export const StyledLinkBtn = styled(Button)(() => ({
  background:'inherit',
  color:'#4D4D4D',
  fontSize: '16px',
  paddind:'4px 8px 4px 8px',
  fontWeight: 500,
  borderRadius:4,
  '&:hover': {
    background: theme.palette.action.hover,
  },
}));

