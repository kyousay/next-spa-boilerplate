import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SelectBox } from '../';

const dummydatas = [
	'Account',
	'Host',
	'Evironment',
	'Schedule',
	'InstanceId',
	'hogehogehogehogehogehogehoge',
];

storiesOf('molecules/SelectBox', module).add('初期値なし', () => {
	const [value, setValue] = useState('');
	return (
		<SelectBox
			columnNames={dummydatas}
			name={'dummy'}
			value={value}
			className={'select_box_head'}
			onChange={(e) => {
				setValue(e.target.value);
				action('onChange')(e, e.target.value);
			}}
		/>
	);
});
