import cn from 'classnames';
import React from 'react';
import style from './btns.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
  disabled?: boolean;
  btnType: 'btnGreen' | 'btnOpacityGreen';
}

const Button: React.FC<Props> = ({ children, disabled, btnType, ...rest }) => {
  return (
    <button {...rest} disabled={disabled} className={cn(style[btnType], disabled ? style.disabledBtn : '')}>
      {children}
    </button>
  );
};
export default Button;
