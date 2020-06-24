import React from 'react';
import { IconFactory } from '../';
import { storiesOf } from '@storybook/react';
import filterIcon from '../../../../../public/icon/filter.png';
import deleteIcon from '../../../../../public/icon/delete.png';
import addIcon from '../../../../../public/icon/add.png';
import dataTableIcon from '../../../../../public/icon/dataTable.png';
import arrangeIcon from '../../../../../public/icon/arrange.png';
import searchSectionIcon from '../../../../../public/icon/searchSection.png';

storiesOf('Atoms/Icon', module)
	.add('Filterアイコン', () => {
		const FilterIcon = IconFactory({ src: filterIcon });
		return <FilterIcon />;
	})
	.add('Deleteアイコン', () => {
		const DeleteIcon = IconFactory({
			src: deleteIcon,
			width: '35',
			height: '35',
		});
		return <DeleteIcon />;
	})
	.add('Addアイコン', () => {
		const AddIcon = IconFactory({
			src: addIcon,
			width: '35',
			height: '35',
		});
		return <AddIcon />;
	})
	.add('DataTableアイコン', () => {
		const DataTableIcon = IconFactory({
			src: dataTableIcon,
			width: '45',
			height: '45',
		});
		return <DataTableIcon />;
	})
	.add('Arrangeアイコン', () => {
		const ArrangeIcon = IconFactory({
			src: arrangeIcon,
			width: '35',
			height: '35',
		});
		return <ArrangeIcon />;
	})
	.add('SearchSectionアイコン', () => {
		const SearchSectionIcon = IconFactory({
			src: searchSectionIcon,
			width: '1070',
			height: '45',
		});
		return <SearchSectionIcon />;
	});
