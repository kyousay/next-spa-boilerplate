import React from 'react';
import styles from './index.module.css';
import { HeaderLogo } from '../../atoms/Img';
import Link from '../../molecules/Link';
import { HeaderLinkText, HeaderActiveLinkText } from '../../atoms/Text/';

const dummyPaths = ['EC2', 'RDS', 'RedShift'];

type Props = {
	currentPath: string;
};

const Header: React.FC<Props> = (props) => {
	const { currentPath } = props;
	return (
		<div className={styles.header_wrapper}>
			<Link path={'/'}>
				<HeaderLogo />
			</Link>
			<div className={styles.header_link_wrapper}>
				{dummyPaths.map((path) => {
					return (
						<div key={path} className={styles.header_link}>
							<Link path={path}>
								{path === currentPath ? (
									<HeaderActiveLinkText>
										{path}
									</HeaderActiveLinkText>
								) : (
									<HeaderLinkText>{path}</HeaderLinkText>
								)}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
