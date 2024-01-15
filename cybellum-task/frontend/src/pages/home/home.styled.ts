import { styled } from '@mui/material/styles';
import CardMediaMui from '@mui/material/CardMedia';
import BoxMui from '@mui/material/Box';



export const StyledBox = styled(BoxMui)(() => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CardMedia = styled(CardMediaMui)(({ theme }) => {
  console.log(theme);
  return {
    objectFit: 'unset',
    width: 160,
    marginTop: theme.spacing(2),
    display: 'inline-block',
  };
}) as typeof CardMediaMui;
