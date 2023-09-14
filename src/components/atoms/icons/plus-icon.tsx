import { SvgIcon, type SvgIconProps } from '@mui/material';
import { type FC } from 'react';

export interface PlusIconProps extends SvgIconProps {}

export const PlusIcon: FC<PlusIconProps> = props => {
  return (
    <SvgIcon
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      {...props}
    >
      <path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
    </SvgIcon>
  );
};

export default PlusIcon;
