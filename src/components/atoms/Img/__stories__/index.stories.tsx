import React from 'react';
import { Img } from '../';
import HeaderLogo from '../../../../../public/HeaderLogo.png';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Img', module).add('HeaderLogo', () => {
	return (
		<div
			style={{
				padding: '20px',
				backgroundColor: '#000',
				display: 'inline-block',
			}}>
			<Img
				src={HeaderLogo}
				alt={'R-CloudSearch'}
				width={'180'}
				height={'29'}
			/>
		</div>
	);
});
