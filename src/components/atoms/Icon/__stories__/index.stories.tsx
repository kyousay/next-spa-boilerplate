import React from 'react';
import { IconFactory } from '../';
import { storiesOf } from '@storybook/react';
import filterIcon from '../../../../../public/filter.png';
import deleteIcon from '../../../../../public/delete.png';
import addIcon from '../../../../../public/add.png';

storiesOf('Atoms/Icon', module)
	.add('Filterアイコン', () => {
		const FilterIcon = IconFactory('filter', filterIcon);
		return <FilterIcon />;
	})
	.add('Deleteアイコン', () => {
		const DeleteIcon = IconFactory('delete', deleteIcon);
		return <DeleteIcon />;
	})
	.add('Addアイコン', () => {
		const AddIcon = IconFactory('add', addIcon);
		return <AddIcon />;
	});
