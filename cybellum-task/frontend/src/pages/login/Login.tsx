import { CardMedia, Stack, Grid } from '@mui/material';
import monitor from 'assets/images/login/imac-dig-twins.png';
import LoginForm from 'components/loginForm/loginForm';
import LoginHeader from 'components/loginHeader/loginHeader';
import { StyledLeftGridHeaderContainer, StyledStackLinkWrapper, StyledLinkBtn } from './login.styled';
import { StyledGridFormContainer } from 'components/loginForm/loginForm.styled';

export default function Login() {
  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
      <Stack sx={{ p: 20, flexDirection: { xs: 'column', md: 'row' } }}>
        <Grid container spacing={2}>
          <StyledLeftGridHeaderContainer item xs={12} md={6} >
            <LoginHeader/>
            <StyledGridFormContainer container direction="column">
              <Grid>
                <LoginForm />
                <StyledStackLinkWrapper >
                  {Object.keys(bottomLinks).map((link) => (
                    <StyledLinkBtn key={link}>
                      {link}
                    </StyledLinkBtn>
                  ))}
                </StyledStackLinkWrapper>
              </Grid>
            </StyledGridFormContainer>
          </StyledLeftGridHeaderContainer>
          <Grid item xs={12} md={6}>
            <CardMedia component="img" alt="Digital Twins" image={monitor}  />
          </Grid>
        </Grid>
      </Stack>
  );
}
