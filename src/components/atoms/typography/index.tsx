import {
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
} from '@mui/material';
import { type FC } from 'react';

export interface TypographyProps extends MuiTypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export const Typography: FC<TypographyProps> = props => {
  return (
    <MuiTypography
      {...props}
      variant='bodySmall'
      sx={{
        color: '#f66060',
      }}
    >
      {props.children}
    </MuiTypography>
  );
};
