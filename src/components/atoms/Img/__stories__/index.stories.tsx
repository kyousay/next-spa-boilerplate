import React from 'react';
import { ImgFactory } from '../';
import headerLogo from '../../../../../public/HeaderLogo.png';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Img', module).add('HeaderLogo', () => {
	const HeaderLogo = ImgFactory({
		src: headerLogo,
		alt: 'R-CloudSearch',
		width: '180',
		height: '29',
	});
	return (
		<div
			style={{
				padding: '20px',
				backgroundColor: '#000',
				display: 'inline-block',
			}}>
			<HeaderLogo />
		</div>
	);
});
