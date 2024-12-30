'use client';
import { SnackbarProvider } from 'notistack';

const snackbarStyle = {
  borderRadius: '14px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
};

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      style={snackbarStyle}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
}
