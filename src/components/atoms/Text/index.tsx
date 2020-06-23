import React from 'react';

type Props = {
	className?: string;
};

export const Text: React.FC<Props> = ({ className, children }) => {
	return <span className={className}>{children}</span>;
};
