import {  CardMedia, Grid, Typography } from '@mui/material';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import { StyledHeaderIconWrapper } from './loginHeader.styled';

export default function LoginHeader() {

  return (
        <Grid>
            <StyledHeaderIconWrapper>
                <CardMedia component="img" alt="Cybellum" image={cybellumSign} />
            </StyledHeaderIconWrapper>
            <Typography sx={{ fontSize:56, fontWeight:300, lineHeight:1.15 }}>
              Welcome to the<br/>Product Security Platform
            </Typography>
        </Grid>
  );
}
