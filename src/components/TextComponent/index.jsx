import P from 'prop-types';
import Component from './style';

export const TextComponent = ({ children }) => {
	return (<Component>{ children }</Component>);
};

TextComponent.prototype = {
	children: P.node.isRequired
};

export default TextComponent;
