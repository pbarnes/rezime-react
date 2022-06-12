import {render, screen} from '@testing-library/react'
import Button from '../Button'

describe('Buttons', () => {
    it('should render', () => {
        render(<Button>Something</Button>)
        expect(screen.getByText('Something')).toBeInTheDocument()
    })
})