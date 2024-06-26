import React from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames';
import search from '../assets/Search.svg';
import { Icon } from '../../../shared/ui/Icon';
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
