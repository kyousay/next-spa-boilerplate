import React from 'react';

type Props = {
	src: string;
	className?: string;
	alt?: string;
	width?: string;
	height?: string;
};

export const Img: React.FC<Props> = (props) => {
	return <img {...props} src={props.src} className={props.className} />;
};
