import React from 'react';

type Props = {
	src: string;
	alt?: string;
	className?: string;
	width?: string;
	height?: string;
};

export const ImgFactory: <T>(props: Props) => React.FC = (
	props,
) => (): ReturnType<React.FC> => {
	return <img {...props} />;
};

export const HeaderLogo = ImgFactory({
	src: '/HeaderLogo.png',
	width: '180',
	height: '29',
	alt: 'R-CloudSearch',
});
