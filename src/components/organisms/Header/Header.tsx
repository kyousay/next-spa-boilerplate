import React from 'react';
import styles from './index.module.css';
import { Img } from '../../atoms/Img';
import Link from '../../molecules/Link';
import { Text } from '../../atoms/Text/';
import textStyles from '../../atoms/Text/index.module.css';

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
			<div className={styles.headerLinkWrapper}>
				{dummyPaths.map((path) => {
					const isActive = path === currentPath ? 'is-active' : '';
					return (
						<div key={path} className={styles.headerLink}>
							<Link path={path}>
								<Text
									className={`${textStyles['header_link']} ${textStyles[isActive]}`}>
									{path}
								</Text>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
