import React from 'react';
import { Text } from '../index';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Text', module)
	.add('Text - S', () => {
		return <Text size="s">テキストを表示</Text>;
	})
	.add('Text - M', () => {
		return <Text size="m">テキストを表示</Text>;
	})
	.add('Text - L', () => {
		return <Text size="l">テキストを表示</Text>;
	})
	.add('ErrorText - S', () => {
		return (
			<Text role="error" size="s">
				テキストを表示
			</Text>
		);
	})
	.add('ErrorText - M', () => {
		return (
			<Text role="error" size="m">
				テキストを表示
			</Text>
		);
	})
	.add('ErrorText - L', () => {
		return (
			<Text role="error" size="l">
				テキストを表示
			</Text>
		);
	});
