import React from 'react'
import type { FC, ReactNode } from 'react'

const Label: FC<{ children: ReactNode }> = ({ children }) => (
    <label className="text-xxs font-bold uppercase">{children}</label>
)

export default Label