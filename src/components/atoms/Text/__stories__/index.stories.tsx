import React from 'react';
import {
	Text,
	HeaderLinkText,
	HeaderActiveLinkText,
	FooterLogoText,
} from '../';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Text', module)
	.add('defaultテキスト', () => {
		return <Text>テキスト</Text>;
	})
	.add('HeaderLinkテキスト', () => {
		return (
			<div
				style={{
					backgroundColor: '#000',
					padding: '20px',
					display: 'inline-block',
				}}>
				<HeaderLinkText>テキスト</HeaderLinkText>
			</div>
		);
	})
	.add('HeaderLinkテキスト - 選択中', () => {
		return (
			<div
				style={{
					backgroundColor: '#000',
					padding: '20px',
					display: 'inline-block',
				}}>
				<HeaderActiveLinkText>テキスト</HeaderActiveLinkText>
			</div>
		);
	})
	.add('Footer copyright', () => {
		return <FooterLogoText>テキスト</FooterLogoText>;
	});
