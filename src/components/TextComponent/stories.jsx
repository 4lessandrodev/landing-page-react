import Component from './index';

export default {
	title: 'TextComponent',
	component: Component,
	argTypes: {
		children: { type: 'string' }
	},
	args: {
		children: 'Text example'
	}
};

export const Template = (args) => (<Component { ...args}/>);
