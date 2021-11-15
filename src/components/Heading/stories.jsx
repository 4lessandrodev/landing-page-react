import { Heading } from './index';

export default {
	title: 'Heading',
	component: Heading,
	argTypes: {
		children: { type: 'string' }
	},
	args: {
		children: 'Some Text'
	},
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	}
};

export const Template = (args) => (<Heading {...args}/>);
