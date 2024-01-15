import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {children}
      <Outlet />
    </Box>
  );
}
