import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import cv from './cv.json'

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

function App() {
  return (
    <>
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
