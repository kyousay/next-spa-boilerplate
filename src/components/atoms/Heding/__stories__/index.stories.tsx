import React from 'react';
import { Heading, HeaderLogo } from '../';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Heading', module)
	.add('タイトル_h1', () => {
		return <Heading Tag={'h1'}>タイトル</Heading>;
	})
	.add('タイトル_h2', () => {
		return <Heading Tag={'h2'}>タイトル</Heading>;
	})
	.add('タイトル_h3', () => {
		return <Heading Tag={'h3'}>タイトル</Heading>;
	})
	.add('HeaderLogo', () => {
		return (
			<div style={{ backgroundColor: '#000' }}>
				<HeaderLogo Tag={'h1'}>タイトル</HeaderLogo>
			</div>
		);
	});
