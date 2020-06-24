import React from 'react';
import styles from './index.module.css';

type Props = {
	src: string;
	alt?: string;
	className?: string;
	height?: string;
	width?: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

export const IconFactory: (props: Props) => React.FC = (
	props,
) => (): ReturnType<React.FC> => {
	return <img width={'20'} height={'20'} {...props} />;
};

export const FilterIcon = IconFactory({ src: '/icon/filter.png' });
export const DeleteIcon = IconFactory({
	src: '/icon/delete.png',
	width: '35',
	height: '35',
});
export const AddIcon = IconFactory({
	src: '/icon/add.png',
	width: '35',
	height: '35',
});
export const DataTableIcon = IconFactory({
	src: '/icon/dataTable.png',
	width: '45',
	height: '45',
});
export const ArrangeIcon = IconFactory({
	src: '/icon/arrange.png',
	width: '35',
	height: '35',
});
export const SearchSectionIcon = IconFactory({
	src: '/icon/searchSection.png',
	width: '1070',
	height: '45',
});
export const SelectArrowIcon = IconFactory({
	src: '/icon/selectArrow.png',
	width: '5',
	height: '5',
	className: styles['selectArrow'],
});
