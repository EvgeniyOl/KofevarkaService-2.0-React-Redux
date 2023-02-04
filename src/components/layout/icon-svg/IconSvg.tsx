import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './iconSvg.module.scss';

interface Props {
  width: number;
  height: number;
  hover: boolean;
  children: ReactNode;
}

const IconSvg: FC<Props> = ({ children, width, height, hover }) => {
  const styleSvg = {
    width: width,
    height: height,
  };
  return (
    <div className={cn(style.main, hover && style.hover)} style={styleSvg}>
      {children}
    </div>
  );
};

export default IconSvg;
