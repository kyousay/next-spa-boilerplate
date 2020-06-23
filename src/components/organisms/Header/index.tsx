import React from 'react';
import Header from './Header';
import { useRouter } from 'next/router';

const Component: React.FC = () => {
	const currentPath = useRouter().pathname;
	return <Header currentPath={currentPath} />;
};

export default Component;
