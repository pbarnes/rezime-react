import React, { ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useForm, RegisterOptions } from "react-hook-form";

import './App.css'
import cv from '../cv.json'

type Duty = {
  description: string;
  technologies: Array<string>;
  tags: Array<string>;
}

type Education = {
  school: string;
  graduationDate: number;
  degree: string;
  discipline: string;
}

type Experience = {
  companyName: string;
  position: string;
  startDate: number;
  endDate: number | null;
  duties: Array<Duty>;
  technologies?: Array<string>;
}

type Props = {
  experience: Experience;
}

function formatDate(datetime: number | null, yearOnly = false) {
  if (!datetime) {
    return 'Present'
  }
  const date = new Date(datetime)
  return yearOnly ?
    date.toLocaleDateString('en-us', { year: "numeric" }) :
    date.toLocaleDateString('en-us', { month: 'short', year: "numeric" })
}

const TEN_YEARS_AGO = 1359694800000 // Feb 2013

function Experience({ experience: { startDate, endDate, position, duties, companyName, technologies } }: Props) {
  return (
    <article>
      <aside>
        <h3>{position}</h3>
        <div className="flex justify-between">
          <i>{companyName}</i>
          <span>{formatDate(startDate, startDate < TEN_YEARS_AGO)} - {formatDate(endDate, endDate < TEN_YEARS_AGO)}</span>
        </div>
      </aside>
      <ul>
        {duties.map(duty => (
          <li key={uuid()}>
            {duty.description}
          </li>
        ))}
      </ul>
      {technologies && (<p>
        <i><u>Technologies</u>:</i>
        {technologies?.join(', ')}
        {/* {experience.technologies?.map(tech => (
           tech 
         ))} */}
      </p>)}
    </article>
  )
}

type InputProps = {
  name: string;
  options?: RegisterOptions;
  className?: string
}

const Input:FC<InputProps> = ({name, options, className = ''})=> {
  const { register } = useForm();
  return (
      <input {...register(name, options)} className={`mb-2 p-2 b-1 b-bluegray rounded ${className}`}/>
  )
}

const Label:FC<{children: ReactNode}> = ({children}) => <label className="text-xxs font-bold uppercase">{children}</label>

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
};

const Button:FC<ButtonProps> = ({className = '', ...rest}) => <button className={`b-0 rounded text-white bg-blue-500 p-2 uppercase text-xs ${className}`} {...rest} />

function App() {
  const { handleSubmit, watch, formState: { errors } } = useForm<Duty>();
  const onSubmit = (data: Duty) => console.log(data);

  return (
    <>
      <aside className="fixed h-screen right-0 top-0 p-4 min-w-xl bg-white">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full space-between">
          <div className="flex flex-col w-full">
          <Label>Description</Label>
          <Input name="description" options={{ required: true }} />
          <Label>Technologies</Label>
          <Input name="technologies" />
          <Label>Tags</Label>
          <Input name="tags" />
          </div>
          <div className="flex w-full">
          <Button type="submit">Save</Button>
          </div>
        </form>
      </aside>
      <header>
        <h1 className="mb-4">{cv.firstName} {cv.lastName}</h1>
        <address>
          <h3>{cv.contact.phone}</h3>
          <h3>{cv.contact.email}</h3>
          <h3>{cv.contact.address.city} {cv.contact.address.state}</h3>
        </address>
        <hr />
      </header>
      <main>
        <section>
          <table>
            <thead>
              <tr>
                <td>
                  <div className="page-header-space"></div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <summary>
                    <h5>Summary</h5>
                    <p>
                      {cv.summary}
                    </p>
                  </summary>
                  <hr />
                  <h5>Experience</h5>
                  {cv.experience.map(experience => (
                    <Experience experience={experience} key={uuid()} />
                  ))}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr><td>
                <div className="page-footer-space"></div>
              </td></tr>
            </tfoot>
          </table>

        </section>
        <hr />
        <section>
          <h5>Education</h5>
          {cv.education.map(edu => (
            <div key={uuid()}>
              <div className="flex justify-between">
                <h3>{edu.school}</h3>
                <span>Graduated {formatDate(edu.graduationDate)}</span>
              </div>
              <span>{edu.degree}, {edu.discipline}</span>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
