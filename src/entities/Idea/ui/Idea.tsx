import styles from './Idea.module.scss';
import { Button, ButtonTheme } from '../../../shared/ui/Button/ui/Button';
import { FC } from 'react';
import { AppLink } from '../../../shared/ui/AppLink';

import { RoutePaths } from '../../../shared/config/routeConfig/routeConfig';
import { IIdea } from '../../../shared/lib/consts/IdeaConst/IdeaConst.types';
import cn from 'classnames';
export const Idea: FC<IIdea> = ({
	className,
	MainText,
	firstIdeaText,
	secondIdeaText,
	image,
	position
}) => {
	return (
		<div className={cn(styles.block, { 'flex-row-reverse': position })}>
			<div className={styles.text}>
				<p>{MainText}</p>
				<h1>{firstIdeaText}</h1>
				<h2>{secondIdeaText}</h2>
				<span className={styles.button}>
					<AppLink to={RoutePaths.aboutPage}>
						<Button theme={ButtonTheme.TransitionGray} className={className}>
							Get in touch
						</Button>
					</AppLink>
				</span>
			</div>
			<img src={image} alt='' />
		</div>
	);
};
