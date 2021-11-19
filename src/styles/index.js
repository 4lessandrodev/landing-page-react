import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body{
		background-color: #ededed;
		font-size: 1.6rem;
		font-family: 'Roboto Mono', monospace;
	}
`;

export default GlobalStyles;
