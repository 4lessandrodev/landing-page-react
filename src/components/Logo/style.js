import styled, { css } from 'styled-components';

export const Component = styled.a`
	${({ theme }) => css`
		display: flex;
		text-decoration: none;
		cursor: pointer;
		color: ${theme.colors.secondary};
	`}
`;

export default Component;
