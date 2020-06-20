import React from 'react';
import { Text } from '../';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Text', module)
	.add('テキスト - span - サイズS', () => {
		return <Text size={'S'}>テキスト</Text>;
	})
	.add('テキスト - span - サイズM', () => {
		return <Text>テキスト</Text>;
	})
	.add('テキスト - span - サイズL', () => {
		return <Text size={'L'}>テキスト</Text>;
	})
	.add('テキスト - p - サイズS', () => {
		return (
			<Text Tag={'p'} size={'S'}>
				テキスト
			</Text>
		);
	})
	.add('テキスト - p - サイズM', () => {
		return <Text Tag={'p'}>テキスト</Text>;
	})
	.add('テキスト - p - サイズL', () => {
		return (
			<Text Tag={'p'} size={'L'}>
				テキスト
			</Text>
		);
	});
