import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  IconButton,
  TextField,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff, Security } from '@mui/icons-material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E2F',
    },
    primary: {
      main: '#0f9d58', // Shield-green for trust/security
    },
    secondary: {
      main: '#bb86fc',
    },
    error: {
      main: '#cf6679',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace",
    h4: {
      fontWeight: '700',
      letterSpacing: '2px',
      color: '#0f9d58',
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 430,
  margin: 'auto',
  padding: theme.spacing(5, 6),
  marginTop: theme.spacing(10),
  borderRadius: 16,
  boxShadow: '0 0 20px 1px rgba(15,157,88,0.6)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function CyberGuardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /\S+@\S+\.\S+/.test(email);

  const validatePassword = (password) =>
    password.length >= 6;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError('');
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/zrcp/admin/');
    } catch (e) {
      setError('Authentication failed. Please check your credentials.');
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <StyledPaper elevation={8}>
        <Security sx={{ fontSize: 72, mb: 2, color: '#0f9d58' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Secure Login
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 320, textAlign: 'center' }}>
          Enter your credentials to access the admin portal.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }} noValidate>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <TextField
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              required
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error && !validateEmail(email)}
              helperText={!!error && !validateEmail(email) ? 'Please enter a valid email.' : ''}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Password"
              type={showPass ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              required
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error && !validatePassword(password)}
              helperText={!!error && !validatePassword(password) ? 'Password must be at least 6 characters.' : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPass ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPass(!showPass)}
                      edge="end"
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={() => setRemember(!remember)}
                color="primary"
              />
            }
            label="Remember me"
            sx={{ mb: 2 }}
          />
          {!!error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ fontWeight: '700', py: 1.5 }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Box>
      </StyledPaper>
    </ThemeProvider>
  );
}
