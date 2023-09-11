import { Button as MuiButton } from '@mui/material';

export interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <MuiButton
      variant='contained'
      sx={{
        backgroundColor: '#434cff',
      }}
    >
      {text}
    </MuiButton>
  );
};

Button.displayName = 'Button';

export default Button;
