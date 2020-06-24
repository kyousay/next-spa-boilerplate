import React, { useState } from 'react';
import { TextField } from '../';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/TextField', module) //
	.add('PlaceHolder付きテキスト', () => {
		const [val, setVal] = useState('');
		return (
			<TextField
				name="test"
				placeholder="a"
				value={val}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setVal(e.target.value);
					action('onChange')(e);
				}}
			/>
		);
	})
	.add('PlaceHolderなしテキスト', () => {
		const [val, setVal] = useState('');
		return (
			<TextField
				name="test"
				value={val}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setVal(e.target.value);
					action('onChange')(e);
				}}
			/>
		);
	});
