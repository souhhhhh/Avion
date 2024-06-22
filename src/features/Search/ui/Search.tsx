import React from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames';
import { Icon } from '../../../shared/Icon';
import search from '../assets/Search.svg';
interface SearchProps {
  className?: string;
}
export const Search = ({ className }: SearchProps) => {
  return (
    <>
      <Icon svg={search} className={classNames(styles.Search)} />
    </>
  );
};
