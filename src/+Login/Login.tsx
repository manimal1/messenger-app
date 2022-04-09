import { FC, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  UserCredential,
} from 'firebase/auth';
import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GithubIcon from '@mui/icons-material/GitHub';

import { URLS } from 'routes';
import { auth } from 'services';
import { CenteredCard } from 'components';
import { useAppDispatch } from 'store/hooks';
import { addUser } from 'store/_slices/loggedInUserSlice';

const Login: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signIn = (provider: string) =>
    useCallback(() => {
      setErrorMessage(null);
      if (provider === 'google') {
        return signInWithRedirect(auth, googleProvider);
      }
      return signInWithRedirect(auth, githubProvider);
    }, []);

  getRedirectResult(auth)
    .then((result: UserCredential | null) => {
      if (!result) {
        return null;
      }

      let token;
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential =
        GoogleAuthProvider.credentialFromResult(result) || GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a Google or GitHub Access Token. You can use it to access their API.
        token = credential.accessToken;
      }

      const user = { ...result.user, token };
      dispatch(addUser(user));
      navigate(URLS.CHAT);
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
