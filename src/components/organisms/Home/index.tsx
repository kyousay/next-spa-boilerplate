import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectCount } from '../../../redux/modules/counter';
import { readTest, selectTest } from '../../../redux/modules/test';
import {
	change,
	selectRegistration,
} from '../../../redux/modules/registration';

import Home from './Home';

const Component: React.FC = () => {
	const dispatch = useDispatch();
	const handleIncrement = useCallback(() => dispatch(increment()), []);
	const handleFormChange = useCallback(
		({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
			dispatch(change({ name, value })),
		[],
	);
	const count = useSelector(selectCount);
	const name = useSelector(selectTest);
	const registration = useSelector(selectRegistration);

	useEffect(() => {
		dispatch(readTest());
	}, []);

	return (
		<Home
			count={count}
			name={name}
			registration={registration}
			handleIncrement={handleIncrement}
			handleFormChange={handleFormChange}
		/>
	);
};

export default Component;
