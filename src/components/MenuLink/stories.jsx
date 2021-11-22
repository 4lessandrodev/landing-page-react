import Component from './index';

export default {
	title: 'MenuLink',
	component: Component,
	argTypes: {
		children: { type: 'string' },
		href: { type: 'string' },
		target: { options: ['_self', '_blank'], control: { type: 'select' } }
	},
	args: {
		children: 'Link example',
		href: 'https://github.com/4lessandrodev'
	}
};

export const Template = (args) => {
	return <div style={{ display: 'flex' }}><Component {...args} /></div>;
};
Template.bind({});
Template.args = {
	target: '_blank'
};
