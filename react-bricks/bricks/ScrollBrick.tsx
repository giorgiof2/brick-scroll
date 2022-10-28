import { useEffect, useState } from 'react'
import { types } from 'react-bricks/frontend'

interface Props {}

const ScrollBrick: types.Brick<Props> = (props) => {
  const [scroll, setScroll] = useState(0)
  const [widthPercent, setWidthPercent] = useState(0)
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset)
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pageHeight = document.getElementById('page')?.scrollHeight
      setWidthPercent(scroll / (pageHeight - window.innerHeight))
    }
  }, [widthPercent, scroll])

  return (
    <div className="sticky top-0 h-[15px] bg-gray-200 z-1">
      <div
        className="h-full z-10 bg-sky-600 opacity-75"
        style={{ width: `${widthPercent * 100}%` }}
      />
    </div>
  )
}

ScrollBrick.schema = {
  name: 'ScrollBrick',
  label: 'ScrollBrick',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default ScrollBrick
