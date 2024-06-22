import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';

interface IconProps {
  className?: string;
  svg: string;
}

export const Icon = (props: IconProps) => {
  const { className, svg, ...otherProps } = props;
  const icon = <img src={svg} className={classNames(styles.Icon)} {...otherProps} />;
  return (
    <button type="button" className={styles.button}>
      {icon}
    </button>
  );
};
