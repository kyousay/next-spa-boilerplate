import React, { useState } from 'react';
import styles from './index.module.css';
import { SelectBox } from '../../molecules/SelectBox';
import { FilterIcon, SearchSectionIcon } from '../../atoms/Icon';

const dummydatas = [
	'Account',
	'Host',
	'Evironment',
	'Schedule',
	'InstanceId',
	'hogehogehogehogehogehogehoge',
];

const Component: React.FC = () => {
	const [value1, setVal1] = useState('');
	const [value2, setVal2] = useState('');
	return (
		<div className={styles.root}>
			<div className={styles.search_icon}>
				<FilterIcon />
			</div>
			<ul className={styles.search_section_list}>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
				<li className={styles.search_section}>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value1}
						className={'select_box_head'}
						onChange={(e) => {
							setVal1(e.target.value);
						}}
					/>
					<SelectBox
						columnNames={dummydatas}
						name={'dummy'}
						value={value2}
						className={'select_box_body'}
						onChange={(e) => {
							setVal2(e.target.value);
						}}
					/>
				</li>
			</ul>
			<div className={styles.search_section_icon}>
				<SearchSectionIcon />
			</div>
		</div>
	);
};

export default Component;
