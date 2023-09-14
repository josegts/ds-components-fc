import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodySmall: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    bodySmall?: React.CSSProperties;
  }

  interface PaletteColor {
    background?: string;
    neutral?: string;
  }

  interface SimplePaletteColorOptions {
    background?: string;
    neutral?: string;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    stroke?: Palette['primary'];
    fill?: Palette['primary'];
  }
  interface PaletteOptions {
    stroke?: PaletteOptions['primary'];
    fill?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    bodySmall: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true;
    elevated: true;
  }
  interface ButtonPropsSizeOverrides {
    base: true;
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0058CB',
    },
    stroke: {
      main: '#006FFD',
    },
    fill: {
      main: '#0058CB',
      background: '#0058CB',
      neutral: '#FFFFFF',
    },
    secondary: {
      main: '#00BCD8',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.18), 0px 4px 8px 0px rgba(0, 0, 0, 0.04);',
    '0px 2px 1px -1px rgba(152,167,204,0.12),0px 1px 1px 0px rgba(152,167,204,0.14),0px 1px 3px 0px rgba(152,167,204,0.20)',
    '0px 3px 1px -2px rgba(152,167,204,0.12),0px 2px 2px 0px rgba(152,167,204,0.14),0px 1px 5px 0px rgba(152,167,204,0.20)',
    '0px 3px 3px -2px rgba(152,167,204,0.12),0px 3px 4px 0px rgba(152,167,204,0.14),0px 1px 8px 0px rgba(152,167,204,0.20)',
    '0px 2px 4px -1px rgba(152,167,204,0.12),0px 4px 5px 0px rgba(152,167,204,0.14),0px 1px 10px 0px rgba(152,167,204,0.20)',
    '0px 3px 5px -1px rgba(152,167,204,0.12),0px 5px 8px 0px rgba(152,167,204,0.14),0px 1px 14px 0px rgba(152,167,204,0.20)',
    '0px 3px 5px -1px rgba(152,167,204,0.12),0px 6px 10px 0px rgba(152,167,204,0.14),0px 1px 18px 0px rgba(152,167,204,0.20)',
    '0px 4px 5px -2px rgba(152,167,204,0.12),0px 7px 10px 1px rgba(152,167,204,0.14),0px 2px 16px 1px rgba(152,167,204,0.20)',
    '0px 5px 5px -3px rgba(152,167,204,0.12),0px 8px 10px 1px rgba(152,167,204,0.14),0px 3px 14px 2px rgba(152,167,204,0.20)',
    '0px 5px 6px -3px rgba(152,167,204,0.12),0px 9px 12px 1px rgba(152,167,204,0.14),0px 3px 16px 2px rgba(152,167,204,0.20)',
    '0px 6px 6px -3px rgba(152,167,204,0.12),0px 10px 14px 1px rgba(152,167,204,0.14),0px 4px 18px 3px rgba(152,167,204,0.20)',
    '0px 6px 7px -4px rgba(152,167,204,0.12),0px 11px 15px 1px rgba(152,167,204,0.14),0px 4px 20px 3px rgba(152,167,204,0.20)',
    '0px 7px 8px -4px rgba(152,167,204,0.12),0px 12px 17px 2px rgba(152,167,204,0.14),0px 5px 22px 4px rgba(152,167,204,0.20)',
    '0px 7px 8px -4px rgba(152,167,204,0.12),0px 13px 19px 2px rgba(152,167,204,0.14),0px 5px 24px 4px rgba(152,167,204,0.20)',
    '0px 7px 9px -4px rgba(152,167,204,0.12),0px 14px 21px 2px rgba(152,167,204,0.14),0px 5px 26px 4px rgba(152,167,204,0.20)',
    '0px 8px 9px -5px rgba(152,167,204,0.12),0px 15px 22px 2px rgba(152,167,204,0.14),0px 6px 28px 5px rgba(152,167,204,0.20)',
    '0px 8px 10px -5px rgba(152,167,204,0.12),0px 16px 24px 2px rgba(152,167,204,0.14),0px 6px 30px 5px rgba(152,167,204,0.20)',
    '0px 8px 11px -5px rgba(152,167,204,0.12),0px 17px 26px 2px rgba(152,167,204,0.14),0px 6px 32px 5px rgba(152,167,204,0.20)',
    '0px 9px 11px -5px rgba(152,167,204,0.12),0px 18px 28px 2px rgba(152,167,204,0.14),0px 7px 34px 6px rgba(152,167,204,0.20)',
    '0px 9px 12px -6px rgba(152,167,204,0.12),0px 19px 29px 2px rgba(152,167,204,0.14),0px 7px 36px 6px rgba(152,167,204,0.20)',
    '0px 10px 13px -6px rgba(152,167,204,0.12),0px 20px 31px 3px rgba(152,167,204,0.14),0px 8px 38px 7px rgba(152,167,204,0.20)',
    '0px 10px 13px -6px rgba(152,167,204,0.12),0px 21px 33px 3px rgba(152,167,204,0.14),0px 8px 40px 7px rgba(152,167,204,0.20)',
    '0px 10px 14px -6px rgba(152,167,204,0.12),0px 22px 35px 3px rgba(152,167,204,0.14),0px 8px 42px 7px rgba(152,167,204,0.20)',
    '0px 11px 14px -7px rgba(152,167,204,0.12),0px 23px 36px 3px rgba(152,167,204,0.14),0px 9px 44px 8px rgba(152,167,204,0.20)',
  ],
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          bodySmall: 'span',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'base',
      },
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            color: 'inherit',
          },
        },
        {
          props: { variant: 'elevated' },
          style: {
            color: 'inherit',
          },
        },
        {
          props: { size: 'base' },
          style: {
            fontSize: '16px',
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
