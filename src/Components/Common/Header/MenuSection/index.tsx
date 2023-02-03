import { Link } from 'react-router-dom';
import React from 'react';
import style from './MenuSection.module.scss';

type MeniSectionProps = {
  text: string;
  className: string;
  rout: string;
};

export const MenuSection = ({ text, className, rout }: MeniSectionProps) => {
  return (
    <li>
      <Link to={rout}>
        <div className={className}>
          <p>{text}</p>
        </div>
      </Link>
    </li>
  );
};
