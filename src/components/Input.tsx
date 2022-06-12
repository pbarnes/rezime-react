import React, { FC } from 'react'
import { useForm, RegisterOptions } from 'react-hook-form'

type InputProps = {
    name: string;
    options?: RegisterOptions;
    className?: string
}

const Input: FC<InputProps> = ({ name, options, className = '' }) => {
    const { register } = useForm();
    return (
        <input {...register(name, options)} className={`mb-2 p-2 b-1 b-bluegray rounded ${className}`} />
    )
}

export default Input