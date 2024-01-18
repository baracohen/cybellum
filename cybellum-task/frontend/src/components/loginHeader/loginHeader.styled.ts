import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import theme from 'themes/default';

export const StyledHeaderIconWrapper = styled(Grid)(() => ({
  width: 150,
  marginBottom: theme.spacing(2),
}));

export const StyledTypographyTitle = styled(Typography)(() => ({
  fontSize:56,
  fontWeight:300,
  lineHeight:1.15
}));