import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import ScrollBrick from './ScrollBrick'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, // Example custom brick
  ScrollBrick,
  // Put here your other bricks...
]

export default bricks
