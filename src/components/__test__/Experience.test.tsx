import {render, screen} from '@testing-library/react'
import type { Experience as ExperienceType } from '../../types'
import Experience from '../Experience'

describe('Experiences', () => {
    it('should render', () => {
        const expected: ExperienceType = {
            companyName: 'Acme Corp.',
            duties: [],
            startDate: Date.now(),
            endDate: null,
            position: 'Tester',
        }
        render(<Experience experience={expected} />)
        expect(screen.getByText('Acme Corp.')).toBeInTheDocument()
        expect(screen.getByText('Tester')).toBeInTheDocument()
    })
})