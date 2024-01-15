import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import theme from 'themes/default';

export const StyledGridHeaderContainer = styled(Grid)(() => ({
    marginTop: theme.spacing(10),
  }));

export const StyledHeaderIconWrapper = styled(Grid)(() => ({
  width: 200,
  marginBottom: theme.spacing(2),
}));
