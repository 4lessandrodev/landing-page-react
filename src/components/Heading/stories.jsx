import { Heading } from './index';

export default {
	title: 'Heading',
	component: Heading,
	argTypes: {
		// children: 'string'
	}
};

export const Template = (args) => (<Heading {...args}/>);
Template.bind({});
Template.args = {
	children: 'Some Text'
};
