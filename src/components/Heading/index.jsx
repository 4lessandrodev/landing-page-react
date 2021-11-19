import 	P from 'prop-types';
import { Title } from './style';

export const Heading = ({
	children,
	isUppserCase = false,
	size = 'medium',
	color = 'primary'
}) => {
	return (<Title
		isUppserCase={isUppserCase}
		size={size}
		color={color}
	>{children}</Title>);
};

Heading.prototype = {
	children: P.element.isRequired,
	isUppserCase: P.bool.isRequired,
	size: P.oneOf(['small', 'medium', 'xlarge', 'large']).isRequired,
	color: P.oneOf(['primary', 'secondary']).isRequired
};

export default Heading;
