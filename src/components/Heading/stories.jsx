import { Heading } from './index';

export default {
	title: 'Heading',
	component: Heading,
	argTypes: {
		children: { type: 'string' },
		size: { options: ['small', 'medium', 'xlarge', 'large'], control: { type: 'select' } },
		color: { options: ['primary', 'secondary'], control: { type: 'select' } },
		isUpperCase: { type: 'boolean' }
	},
	args: {
		children: 'Title Example',
		isUpperCase: false
	},
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	}
};

export const Template = (args) => (<Heading {...args}/>);
Template.bind({});
Template.args = {
	color: 'primary',
	size: 'medium'
};
