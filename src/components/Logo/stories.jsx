import Component from './index';

export default {
	title: 'Logo',
	component: Component,
	argTypes: {
		children: { type: 'string' }
	},
	args: {
		text: 'wattpad',
		srcImg: 'https://www.wattpad.com/premium/static/wp-logo-bottom-10d78443356f5bf534397d862506dc5b.png',
		link: 'https://wattpad.com/'
	}
};

export const Template = (args) => (<Component { ...args}/>);
