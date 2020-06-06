import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectCount } from '../../../redux/modules/counter';
import { readTest, selectTest } from '../../../redux/modules/test';

import Home from './Home';

const Component: React.FC = () => {
	const dispatch = useDispatch();
	const handleIncrement = useCallback(() => dispatch(increment()), []);
	const count = useSelector(selectCount);
	const name = useSelector(selectTest);

	useEffect(() => {
		dispatch(readTest());
	}, []);

	return <Home count={count} name={name} handleIncrement={handleIncrement} />;
};

export default Component;
