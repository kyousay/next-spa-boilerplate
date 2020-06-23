import React from 'react';

type Props = {
	src: string;
	alt?: string;
	className?: string;
	width?: string;
	height?: string;
};

export const Img: React.FC<Props> = (props) => {
	return <img {...props} />;
};
