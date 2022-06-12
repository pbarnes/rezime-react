import { ReactNode } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type Duty = {
    description: string;
    technologies: Array<string>;
    tags: Array<string>;
}

export type Education = {
    school: string;
    graduationDate: number;
    degree: string;
    discipline: string;
}

export type Experience = {
    companyName: string;
    position: string;
    startDate: number;
    endDate: number | null;
    duties: Array<Duty>;
    technologies?: Array<string>;
}

