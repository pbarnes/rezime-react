import React, { FC, ReactNode } from 'react'

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
};

const Button: FC<ButtonProps> = ({ className = '', ...rest }) => {
    return <button className={`b-0 min-w-24 rounded text-white bg-blue-500 p-2 uppercase text-xs ${className}`} {...rest} />
}

export default Button