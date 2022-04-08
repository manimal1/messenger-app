import { FC, useState, useCallback } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GithubIcon from '@mui/icons-material/GitHub';
import { auth } from 'services';
import { CenteredCard } from 'components';

const Login: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signIn = (provider: string) =>
    useCallback(() => {
      setErrorMessage(null);
      if (provider === 'google') {
        return signInWithRedirect(auth, googleProvider);
      }
      return signInWithRedirect(auth, githubProvider);
    }, []);

  getRedirectResult(auth)
    .then((result) => {
      if (!result) {
        return null;
      }

      let token = null;
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential =
        GoogleAuthProvider.credentialFromResult(result) || GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a Google or GitHub Access Token. You can use it to access their API.
        token = credential.accessToken;
      }

      // The signed-in user info.
      const user = result.user;
      console.log({ token }, { user });
    })
    .catch((error) => {
      if (error) {
        const message = `Error: ${error.message}`;
        setErrorMessage(message);
      }
    });

  return (
    <CenteredCard>
      <Button sx={{ marginBottom: '16px' }} startIcon={<GoogleIcon />} onClick={signIn('google')}>
        Google login
      </Button>
      <Button startIcon={<GithubIcon />} onClick={signIn('github')}>
        Github login
      </Button>
      {errorMessage && (
        <Typography variant="body2" component="h6" color="error" mt={2}>
          {errorMessage}
        </Typography>
      )}
    </CenteredCard>
  );
};

export default Login;
