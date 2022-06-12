import {render, screen} from '@testing-library/react'
import Input from '../Input'

describe('Inputs', () => {
  it('should render', () => {
    render(<Input name='test'/>)
    expect(screen.getByLabelText('test')).toBeInTheDocument()
  })
})