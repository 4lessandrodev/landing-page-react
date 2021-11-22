import styled, { css } from 'styled-components';

export const MenuLink = styled.a`
	${({ theme }) => css`
		text-decoration: none;
		color: ${theme.colors.secondary};
		display: block;
		position: relative;
		font-size: ${theme.sizes.small};
		padding: ${theme.spacings.xsmall};
		font-weight: bold;

		&::after{
			content: '';
			position: absolute;
			bottom: 0;
			left: 0%;
			width: 0;
			height: 0.3rem;
			background: ${theme.colors.blue};
			transition: all 300ms ease-in-out;
		}

		&:hover::after{
			left: 25%;
			width: 50%;
		}
	`}
`;

export default MenuLink;
