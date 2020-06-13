import React, { useState } from 'react';
import { TodoItem } from '../';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('molecules/Todo', module).add('todoItem', () => {
	const [checked, changeChecked] = useState(false);
	return (
		<TodoItem
			text="Test"
			{...{
				id: 'todo01',
				index: 0,
				checked: checked,
				onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
					changeChecked(e.target.checked);
					action('onChange')(e);
				},
			}}
		/>
	);
});
