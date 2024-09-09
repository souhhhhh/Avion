<<<<<<< HEAD
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
=======

import{ ButtonHTMLAttributes, FC, ReactNode } from 'react';
>>>>>>> efee39a5988b47dc7cba3772dbaa4a1d4e72c4cd

import styles from './Button.module.scss';
import classNames from 'classnames';

export const enum ButtonTheme {
	GREY = 'grey',
	PURPLE = 'purple',
	WHITE = 'white',
	TransitionGray = 'transitionGray'
}
<<<<<<< HEAD
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
	);
=======

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  theme: ButtonTheme;
  children: ReactNode;
  className?: string;
}
export const Button: FC<ButtonProps> = ({ className, children, theme, ...props }: ButtonProps) => {
  return (
    <button className={classNames(styles.Button, { [styles[theme]]: true })} {...props} >{children}</button>
  );
>>>>>>> efee39a5988b47dc7cba3772dbaa4a1d4e72c4cd
};
