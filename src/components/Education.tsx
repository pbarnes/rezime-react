import React from 'react'
import type { FC } from 'react'

import { formatDate } from '../utils.js'
import type {Education as EducationType} from '../types'

type Props = {
    education: EducationType
}

const Education:FC<Props> = ({education}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3>{education.school}</h3>
        <span>Graduated {formatDate(education.graduationDate)}</span>
      </div>
      <span>{education.degree}, {education.discipline}</span>
    </div>
  )
}

export default Education