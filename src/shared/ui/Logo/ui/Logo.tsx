import React from 'react';
import logo from '../assets/Avion.svg';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../config/routeConfig/routeConfig';

interface LogoProps {
  link?: boolean;
}
export const Logo = ({ link }: LogoProps) => {
  return (
    <>
      {link ? (
        <Link to={RoutePaths.main}>
          <img src={logo} alt="" />
        </Link>
      ) : (
        <img src={logo} alt="" />
      )}
    </>
  );
};
