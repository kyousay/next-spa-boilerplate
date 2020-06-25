import React from 'react';
import styles from './index.module.css';
import { Img } from '../../atoms/Img';
import Link from '../../molecules/Link';
import { HeaderLinkText, HeaderActiveLinkText } from '../../atoms/Text/';

const dummyPaths = ['EC2', 'RDS', 'RedShift'];

type Props = {
	currentPath: string;
};

const Header: React.FC<Props> = (props) => {
	const { currentPath } = props;
	return (
		<div className={styles.headerWrapper}>
			<Link path={'/'}>
				<Img
					src={'/HeaderLogo.png'}
					alt={'R-CloudSearch'}
					width={'180'}
					height={'29'}
				/>
			</Link>
			<ul className={styles.header_link_list}>
				{dummyPaths.map((path) => {
					return (
						<li key={path} className={styles.header_link_list_item}>
							<Link path={path}>
								{path === currentPath ? (
									<HeaderActiveLinkText>
										{path}
									</HeaderActiveLinkText>
								) : (
									<HeaderLinkText>{path}</HeaderLinkText>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Header;
