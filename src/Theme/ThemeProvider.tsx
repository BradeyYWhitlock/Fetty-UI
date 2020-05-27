import React from 'react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './Theme';

export const FettyTheme = (props: any) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {props.children}
    </ThemeProvider>
  );
}

export default FettyTheme;