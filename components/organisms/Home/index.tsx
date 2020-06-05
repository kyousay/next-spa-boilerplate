import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectCount } from '../../../redux/modules/counter';

import Home from './Home';

const Component: React.FC = () => {
	const dispatch = useDispatch();
	const handleIncrement = useCallback(() => dispatch(increment()), []);
	const count = useSelector(selectCount);
	return <Home count={count} handleIncrement={handleIncrement} />;
};

export default Component;
