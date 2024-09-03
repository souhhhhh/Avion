
import{ ReactNode } from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames';

export enum ButtonTheme {
  GREY = 'grey',
  PURPLE = 'purple',
  WHITE = 'white',
  TransitionGray = 'transitionGray'
}
interface ButtonProps {
  theme: ButtonTheme;
  children: ReactNode;
  className?: string;
}
export const Button = ({ className, children, theme }: ButtonProps) => {
  return (
    <button className={classNames(styles.Button, { [styles[theme]]: true })}>{children}</button>
  );
};
