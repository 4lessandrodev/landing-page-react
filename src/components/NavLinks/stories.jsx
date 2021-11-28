import Component from './index';
import mock from './mock';

export default {
	title: 'NavLinks',
	component: Component,
	args: {
		links: mock
	}
};

export const Template = (args) => (<Component { ...args}/>);
