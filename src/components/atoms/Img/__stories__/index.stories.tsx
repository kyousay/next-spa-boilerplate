import React from 'react';
import { Img } from '..';
import { storiesOf } from '@storybook/react';

import HeaderLogo from '../../../../../public/HeaderLogo.png';

storiesOf('atoms/Logo', module).add('HeaderLogo', () => {
	return (
		<div style={{ backgroundColor: '#000' }}>
			<Img
				src={HeaderLogo}
				alt={'R-CloudSearch'}
				width={'180'}
				height={'29'}
			/>
		</div>
	);
});
