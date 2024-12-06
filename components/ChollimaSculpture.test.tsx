import { render } from '@testing-library/react'
import { screen } from '@testing-library/react/pure'
import ChollimaSculpture from '../components/ChollimaSculpture'

describe('ChollimaSculpture', () => {
  it('renders the Chollima sculpture image', () => {
    render(<ChollimaSculpture />)
    const image = screen.getByAltText('Chollima Sculpture')
    expect(image).toBeInTheDocument()
  })
})
function expect(element: HTMLElement) {
  return {
    toBeInTheDocument: () => {
      if (!document.body.contains(element)) {
        throw new Error(`Expected element to be in the document, but it was not found`)
      }
    }
  }
}

