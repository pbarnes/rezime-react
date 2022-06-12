import {render, screen} from '@testing-library/react'
import Label from '../Label'

describe('Labels', () => {
    it('should render', () => {
        render(<Label>Something</Label>)
        expect(screen.getByText('Something')).toBeInTheDocument()
    })
})