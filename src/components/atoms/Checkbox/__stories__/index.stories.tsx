import React, { useState } from 'react';
import { Checkbox } from '../';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Todo', module).add('checkbox', () => {
	const [checked, changeChecked] = useState(false);
	return (
		<Checkbox
			id="todo01"
			checked={checked}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				changeChecked(e.target.checked);
				action('onChange')(e);
			}}
		/>
	);
});
