import styled from '@emotion/styled';
import {
  type ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from '@mui/material';
import { theme } from '../../../styles/theme';

const StyledButton = styled(MuiButton)<ButtonProps>(() => ({
  // outlend variant overrides
  '&.MuiButton-outlined': {
    border: `2px solid ${theme.palette.stroke?.main}`,
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  // elevated variant overrides
  '&.MuiButton-elevated': {
    backgroundColor: theme.palette.fill?.neutral,
    color: theme.palette.primary.main,
    boxShadow: theme.shadows[1],
  },
  // size based overrides
  '&.MuiButton-sizeLarge': {
    height: '62px',
    padding: '16px 24px',
    fontSize: '20px',
    lineHeight: '30px',
  },
  '&.MuiButton-sizeSmall': {
    height: '37px',
    padding: '8px 24px',
    fontSize: '14px',
    lineHeight: '21px',
    minWidth: 'auto',
  },
  // hover contained (filled) overrides
  '&.MuiButton-contained:hover': {
    backgroundColor: theme.palette.stroke?.main,
  },

  // pressed contained (filled) overrides
  '&.MuiButton-contained.MuiButton-containedPrimary:active': {
    backgroundColor: '#002D6F',
  },

  // disabled contained (filled) overrides
  '&.MuiButton-contained.Mui-disabled': {
    backgroundColor: '#DFE4EA',
    color: '#9299A3',
  },
  // hover outlined overrides
  '&.MuiButton-outlined:hover': {
    backgroundColor: '#EEF5FF',
  },

  // pressed outlined overrides
  '&.MuiButton-outlined:active': {
    backgroundColor: '#B0D2FF',
  },

  // disabled outlined overrides
  '&.MuiButton-outlined.Mui-disabled': {
    color: '#9299A3',
    border: `2px solid #CED2D9`,
  },
}));

export interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { children, iconLeft, iconRight } = props;
  const buttonMuiProps = { ...props };
  delete buttonMuiProps.iconLeft;
  delete buttonMuiProps.iconRight;
  return (
    <StyledButton
      {...buttonMuiProps}
      variant={props.variant === 'filled' ? 'contained' : props.variant}
      startIcon={iconLeft}
      endIcon={iconRight}
      sx={{
        borderRadius: '8px',
        backgroundColor: 'theme.palette.primary.main',
        fontSize: '16px',
        fontWeight: 700,
        height: '48px',
        padding: '12px 24px',
        minWidth: '156px',
      }}
    >
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';
