import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from 'react';

type types = TypographyProps;

export const Text = (props: PropsWithChildren<types>) => {
  return <Typography {...props}>{props.children}</Typography>;
};
