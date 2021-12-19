import Component from './index';

export default {
	title: 'GridTwoColumn',
	component: Component,
	argTypes: {
		title: { type: 'string' },
		text: { type: 'string' },
		imageLink: { type: 'string' }
	},
	args: {
		title: 'Title example',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eveniet enim voluptate voluptatibus optio vero, exercitationem nostrum explicabo adipisci beatae sunt necessitatibus non praesentium. Aperiam, neque. Sapiente, vero odio. Tempore!',
		imageLink: 'img.png'
	}
};

export const Template = (args) => (<Component {...args} />);
