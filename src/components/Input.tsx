import React, { ReactNode } from 'react'
import { useForm, RegisterOptions } from 'react-hook-form'

type InputProps = {
    name: string;
    options?: RegisterOptions;
    className?: string
}

function Input({ name, options, className = '' }: InputProps): ReactNode {
    const { register } = useForm();
    return (
        <input {...register(name, options)} aria-label={name} className={`mb-2 p-2 b-1 b-bluegray rounded ${className}`} />
    )
}

export default Input