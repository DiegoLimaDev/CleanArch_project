import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

type types = {
  bgcolor: string;
};

export const BackgroundColor = (props: PropsWithChildren<types>) => {
  return <Box bgcolor={props.bgcolor}>{props.children}</Box>;
};
