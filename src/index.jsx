import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Home from './templates/Home';
import GlobalStyles from './styles';
import Theme from './styles/theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
