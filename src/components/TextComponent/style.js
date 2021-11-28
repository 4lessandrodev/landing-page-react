import styled, { css } from 'styled-components';

export const TextComponent = styled.p`
	${({ theme }) => css`
		font-size: ${theme.sizes.xmedium};
	`}
`;

export default TextComponent;
