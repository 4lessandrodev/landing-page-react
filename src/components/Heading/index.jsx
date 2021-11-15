import 	P from 'prop-types';
import { Title } from './style';

export const Heading = ({ children }) => {
	return (<Title>{ children }</Title>);
};

Heading.prototype = {
	children: P.element
};
