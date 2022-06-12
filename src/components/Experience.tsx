import React from 'react'
import { v4 as uuid } from 'uuid'

import { formatDate } from '../utils.js'
import type { Experience as ExperienceType } from '../types'

const TEN_YEARS_AGO = 1359694800000 // Feb 2013

type Props = {
  experience: ExperienceType;
}

function Experience({ experience: { startDate, endDate, position, duties, companyName, technologies } }: Props) {
  return (
    <article>
      <aside>
        <h3>{position}</h3>
        <div className="flex justify-between">
          <i>{companyName}</i>
          <span>{formatDate(startDate, startDate < TEN_YEARS_AGO)} - {formatDate(endDate, endDate ? endDate < TEN_YEARS_AGO : undefined)}</span>
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

export default Experience