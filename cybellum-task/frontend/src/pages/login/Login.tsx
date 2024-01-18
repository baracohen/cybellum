import { CardMedia, Stack, Grid } from '@mui/material';
import monitor from 'assets/images/login/imac-dig-twins.png';
import LoginForm from 'components/loginForm/loginForm';
import LoginHeader from 'components/loginHeader/loginHeader';
import { StyledLeftGridHeaderContainer, StyledGridLinkWrapper, StyledLinkBtn } from './login.styled';
import { StyledGridFormContainer } from 'components/loginForm/loginForm.styled';

export default function Login() {
  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
      <Stack sx={{ p:20, flexDirection: { xs: 'column', md: 'column' } }}>
        <Grid container spacing={2} display={'flex'}>
          <StyledLeftGridHeaderContainer  item xs={12} md={6} sm={12} sx={{}}>
            <LoginHeader/>
            <StyledGridFormContainer container direction="column" xs={12} md={6} sm={12}>
                <LoginForm />
            </StyledGridFormContainer>
          </StyledLeftGridHeaderContainer>
          <Grid item xs={12} md={6} sm={12}>
            <CardMedia component="img" alt="Digital Twins" image={monitor}  />
          </Grid>
          <StyledGridLinkWrapper xs={3} md={3} sm={3} lg={3}>
                  {Object.keys(bottomLinks).map((link) => (
                    <StyledLinkBtn key={link}>
                      {link}
                    </StyledLinkBtn>
                  ))}
          </StyledGridLinkWrapper>
        </Grid>
      </Stack>
  );
}
