import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const Remembera = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          <img
            data-src="https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177964/portfolio/remembera.png"
            alt="Screeshot of Remembera site."
            className="lazyload"
          />
        }
        heading="Remembera"
        label="Documentation"
        description={
          <PortfolioItemDescription
            languages={['MDX', 'JSX', 'JavaScript']}
            description="A knowledge bank. A documentation for hurdles in developement and design - a 'blog' to document how to solve problems."
            sourceLink="https://github.com/alexlee-dev/remembera"
          />
        }
        link={
          <Anchor
            href="https://www.remembera.info/"
            icon={<LinkNext />}
            label="www.remembera.info"
            target="_blank"
            rel="noreferrer"
          />
        }
      />
    </Tile>
  )
}

export default Remembera
