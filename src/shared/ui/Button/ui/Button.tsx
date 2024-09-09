import { ButtonHTMLAttributes, PropsWithChildren } from 'react';


import styles from './Button.module.scss';
import classNames from 'classnames';

export const enum ButtonTheme {
	GREY = 'grey',
	PURPLE = 'purple',
	WHITE = 'white',
	TransitionGray = 'transitionGray'
}
interface ButtonProps {
	theme: ButtonTheme;
	className?: string;
}

export const Button = ({
  className,
	children,
  theme,
	...otherProps
}: PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={classNames(styles.Button, { [styles[theme]]: true })}
			{...otherProps}
		>
			{children}
		</button>
	)}