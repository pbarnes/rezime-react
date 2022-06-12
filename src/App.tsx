import React from 'react'
import { v4 as uuid } from 'uuid'
import { useForm } from 'react-hook-form'
// import clsx from 'clsx'

import Experience from './components/Experience'
import Education from './components/Education'
import Input from './components/Input'
import Label from './components/Label'
import Button from './components/Button'
import { Duty, } from './types'
import './App.css'
import cv from '../cv.json'


function App() {
  const { handleSubmit, formState: { errors } } = useForm<Duty>()
  const onSubmit = (data: Duty) => console.log(data)

  return (
    <>
      {errors && <div>{JSON.stringify(errors)}</div>}
      <aside className="fixed h-screen right-0 top-0 p-4 min-w-xl bg-white box-border">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full justify-between">
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
            <Button>Cancel</Button>
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
            <Education key={uuid()} education={edu} />
          ))}
        </section>
      </main>
    </>
  )
}


export default App
