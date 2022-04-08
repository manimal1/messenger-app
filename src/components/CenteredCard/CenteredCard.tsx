import { FC, ReactNode } from 'react';
import { purple } from '@mui/material/colors';
import { Box, Card } from '@mui/material';

interface Props {
  children: ReactNode;
  width?: number;
  height?: number;
}

export const CenteredCard: FC<Props> = ({ children, width = 320, height = 320 }) => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: purple[50],
    }}
  >
    <Card
      sx={{
        height: `${height}px`,
        width: `${width}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      {children}
    </Card>
  </Box>
);
