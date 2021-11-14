import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';

export const RenderTheme = (children) => {
	return render(<ThemeProvider theme={Theme}>{ children }</ThemeProvider>);
};
