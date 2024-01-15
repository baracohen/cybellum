import { styled } from '@mui/system';
import { Grid, Stack, Button } from '@mui/material';
import theme from 'themes/default';

export const StyledStackLinkWrapper = styled(Stack)(({ theme }) => ({
  flexDirection:'row',
  justifyContent:'space-between',
  width:'100%',
  height:'100%',
  alignItems:'flex-end',
}));

export const StyledLeftGridHeaderContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%'
}));

export const StyledLinkBtn = styled(Button)(() => ({
  background:'inherit',
  color:'black',
  fontSize: '14px',
  '&:hover': {
    background: theme.palette.action.hover,
  },
}));

