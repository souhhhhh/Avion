import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

export function Button() {
  return <button  className={styles.button}>View collection</button>;

import classNames from 'classnames';
export enum ButtonTheme {
  GREY = 'grey',
  PURPLE = 'purple',
  WHITE = 'white',

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
