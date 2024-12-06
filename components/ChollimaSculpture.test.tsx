import { render, screen } from '@testing-library/react'
import ChollimaSculpture from '../components/ChollimaSculpture'

describe('ChollimaSculpture', () => {
  it('renders the Chollima sculpture image', () => {
    render(<ChollimaSculpture />)
    const image = screen.getByAltText('Chollima Sculpture')
    expect(image).toBeInTheDocument()
  })
})

