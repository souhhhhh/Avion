import { ReactNode } from 'react';
import styles from './AppLink.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
interface AppLinkProps {
  className?: string;
  to: string;
  children: ReactNode;
}
export const AppLink = ({ to, children, ...otherProps }: AppLinkProps) => {
  return (
    <Link {...otherProps} to={to} className={classNames(styles.AppLink)}>
      {children}
    </Link>
  );
};
