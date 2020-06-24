import React from 'react';
import styles from './index.module.css';
import { SelectArrowIcon } from '../../atoms/Icon';

type Props = {
	columnNames: string[];
	className?: string;
	name?: string;
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectBox: React.FC<Props> = (props) => {
	const { value, onChange, name, columnNames, className = '' } = props;
	return (
		<div className={styles.root}>
			<select
				onChange={onChange}
				value={value}
				name={name}
				className={[styles.select_box, styles[className]].join(' ')}>
				<option value="" defaultChecked={true}>
					- - -
				</option>
				{columnNames.map((columnName) => {
					return (
						<option value={columnName} key={columnName}>
							{columnName}
						</option>
					);
				})}
			</select>
			<SelectArrowIcon />
		</div>
	);
};
