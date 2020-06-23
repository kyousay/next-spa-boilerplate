import React from 'react';

type Props = {
	src: string;
	alt?: string;
	className?: string;
	height?: string;
	width?: string;
	onClick?: () => void;
};

export const Icon: React.FC<Props> = ({
	src,
	alt,
	className,
	height = '20',
	width = '20',
	onClick,
}) => {
	return (
		<img
			className={className}
			src={src}
			width={width}
			height={height}
			alt={alt}
			onClick={onClick}
		/>
	);
};
