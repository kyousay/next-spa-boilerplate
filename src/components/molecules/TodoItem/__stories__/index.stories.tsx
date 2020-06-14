import React, { useState } from 'react';
import { TodoItem } from '../';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('molecules/Todo', module).add('todoItem', () => {
	const [checked, changeChecked] = useState(false);
	const [Delete, changeDelete] = useState(true);
	return (
		<>
			{Delete && (
				<TodoItem
					text="Test"
					{...{
						id: 'todo01',
						index: 0,
						checked: checked,
						onChange: (e?: React.ChangeEvent<HTMLInputElement>) => {
							changeChecked(!checked);
							action('onChange')(e);
						},
						deleteHandler: (index: number) => {
							changeDelete(false);
							action('deleteHanlder');
						},
					}}
				/>
			)}
		</>
	);
});
