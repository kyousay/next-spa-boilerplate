import React from 'react';
import { Icon } from '../';
import { storiesOf } from '@storybook/react';
import filterIcon from '../../../../../public/icon/filter.png';
import deleteIcon from '../../../../../public/icon/delete.png';
import addIcon from '../../../../../public/icon/add.png';
import dataTableIcon from '../../../../../public/icon/dataTable.png';
import arrangeIcon from '../../../../../public/icon/arrange.png';
import searchSectionIcon from '../../../../../public/icon/searchSection.png';

storiesOf('Atoms/Icon', module)
	.add('Filterアイコン', () => {
		return <Icon src={filterIcon} />;
	})
	.add('Deleteアイコン', () => {
		return <Icon src={deleteIcon} width={'35'} height={'35'} />;
	})
	.add('Addアイコン', () => {
		return <Icon src={addIcon} width={'35'} height={'35'} />;
	})
	.add('DataTableアイコン', () => {
		return <Icon src={dataTableIcon} width={'45'} height={'45'} />;
	})
	.add('Arrangeアイコン', () => {
		return <Icon src={arrangeIcon} width={'35'} height={'35'} />;
	})
	.add('SearchSectionアイコン', () => {
		return <Icon src={searchSectionIcon} width={'1070'} height={'45'} />;
	});
