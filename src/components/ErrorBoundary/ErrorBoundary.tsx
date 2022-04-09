import React, { ErrorInfo } from 'react';
import { Typography } from '@mui/material';
import { CenteredCard } from 'components';

interface Props {
  message?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const msg = this.props.message || 'Sorry, something went wrong. Please try refreshing the page.';
    if (this.state.hasError) {
      return (
        <CenteredCard width={720}>
          <Typography variant="h5" component="h1">
            {msg}
          </Typography>
        </CenteredCard>
      );
    }

    return this.props.children;
  }
}
