import 	P from 'prop-types';
import { Title } from './style';

export const Heading = ({
	children,
	isUpperCase = false,
	size = 'medium',
	color = 'primary'
}) => {
	return (<Title
		isUpperCase={isUpperCase}
		size={size}
		color={color}
	>{children}</Title>);
};

Heading.prototype = {
	children: P.element.isRequired,
	isUpperCase: P.bool.isRequired,
	size: P.oneOf(['small', 'medium', 'xlarge', 'large']).isRequired,
	color: P.oneOf(['primary', 'secondary']).isRequired
};

export default Heading;
