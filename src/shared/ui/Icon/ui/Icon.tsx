import styles from './Icon.module.scss';
import classNames from 'classnames';
import { AppLink } from '../../AppLink';

interface IconProps {
  className?: string;
  link?: boolean;
  path?: string;
  svg: string;
}

export const Icon = (props: IconProps) => {
  const { link, path, className, svg, ...otherProps } = props;
  if (link) {
    return (
      <AppLink to={typeof path === 'string' ? path : '/'}>
        <img {...otherProps} src={svg} className={classNames(styles.Icon, [className])} />
      </AppLink>
    );
  }
  return (
    <>
      <img {...otherProps} src={svg} className={classNames(styles.Icon)} />
    </>
  );
};
