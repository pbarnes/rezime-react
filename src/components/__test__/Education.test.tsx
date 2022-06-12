import {render, screen} from '@testing-library/react'
import type { Education as EducationType } from '../../types'
import Education from '../Education'

describe('Educations', () => {
  it('should render', () => {
    const expected: EducationType = {
      school: 'Monsters University',
      degree: 'Bachelors of Scaring',
      discipline: 'Scarer',
      graduationDate: Date.now(),
    }
    render(<Education education={expected} />)
    expect(screen.getByText('Monsters University')).toBeInTheDocument()
    expect(screen.getByText('Bachelors of Scaring, Scarer')).toBeInTheDocument()
  })
})