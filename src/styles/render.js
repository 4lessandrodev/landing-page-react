import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';

export const RenderWithTheme = (children) => {
	return render(<ThemeProvider theme={Theme}>{ children }</ThemeProvider>);
};

export default RenderWithTheme;
