import styled, { css } from 'styled-components';

const ApplyBackground = {
	light: (theme) => css`
		background-color: ${theme.colors.white};
		color: ${theme.colors.black};
	`,
	dark: (theme) => css`
		background-color: ${theme.colors.black};
		color: ${theme.colors.white};
	`
};

export const Component = styled.section`
	${({ theme, background }) => css`
		max-width: 120rem;
		margin: 0 auto;
		padding: ${theme.spacings.medium};
		background-color: ${theme.colors.white};
		${background && ApplyBackground[background](theme)}
	`}
`;

export default Component;
