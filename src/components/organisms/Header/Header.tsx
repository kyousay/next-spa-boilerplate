import React from 'react';
import styles from './index.module.css';
import { Link } from '../../molecules/Link';
import { HeaderLinkText, HeaderActiveLinkText } from '../../atoms/Text/';

const dummyPaths = ['EC2', 'RDS', 'RedShift'];

type Props = {
	currentPath: string;
};

const Header: React.FC<Props> = (props) => {
	const { currentPath } = props;
	return (
		<div className={styles.header_wrapper}>
			<div className={styles.header_logo}>
				<img
					src={'/HeaderLogo.png'}
					width={'180'}
					height={'29'}
					alt={'R-CloudSearch'}
				/>
			</div>
			<ul className={styles.header_link_wrapper}>
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
			</ul>
		</div>
	);
};

export default Header;
