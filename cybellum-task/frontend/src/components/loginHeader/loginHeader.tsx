import {  CardMedia, Typography, useTheme } from '@mui/material';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import { StyledGridHeaderContainer, StyledHeaderIconWrapper } from './loginHeader.styled';

export default function LoginHeader() {


  const theme = useTheme();

  return (
        <StyledGridHeaderContainer>
            <StyledHeaderIconWrapper>
                <CardMedia component="img" alt="Cybellum" image={cybellumSign} />
            </StyledHeaderIconWrapper>
            <Typography variant='h2' sx={{ marginBottom: theme.spacing(2) }}>
            Welcome to the Product Security Platform
            </Typography>
        </StyledGridHeaderContainer>
  );
}
