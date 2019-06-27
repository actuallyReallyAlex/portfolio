import React from 'react'
import { Anchor, Box, Heading, Text } from 'grommet'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../config.json'
import { Code, LinkNext } from 'grommet-icons'
import Tilt from 'react-tilt'

const Portfolio = () => {
  return (
    <Box
      align="center"
      fill="horizontal"
      gap="medium"
      justify="center"
      pad="large"
    >
      <SectionHeading
        heading={portfolio.heading}
        subHeading={portfolio.subHeading}
      />
      {portfolio.rows.map(({ column1, column2 }, i) => {
        return (
          <Box
            align="start"
            direction="row"
            fill="horizontal"
            justify="center"
            key={i}
            gap="xlarge"
            margin={{ vertical: 'large' }}
          >
            <Tilt
              className="Tilt"
              options={{ max: 15, perspective: 2000, scale: 1.05 }}
            >
              <Box background="brand" className="Tilt-inner" width="384px">
                <Box
                  background={`url(${column1.image})`}
                  height="189px"
                  width="384px"
                />
                <Box pad="medium">
                  <Text size="medium">{column1.category}</Text>
                  <Text size="xlarge" weight="bold">
                    {column1.title}
                  </Text>
                  <Box margin={{ vertical: 'medium' }}>
                    {column1.languages.map(({ color, title }, i) => (
                      <Box
                        align="center"
                        direction="row"
                        gap="small"
                        key={i}
                        justify="start"
                      >
                        <Box background={color} height="10px" width="10px" />
                        <Heading level="4" margin="none">
                          {column2.title}
                        </Heading>
                      </Box>
                    ))}
                  </Box>
                  <Box fill="horizontal">
                    <Text>{column1.description}</Text>
                  </Box>
                  <Box margin={{ top: 'medium' }}>
                    {column1.source && (
                      <Box direction="row" gap="small">
                        <Anchor
                          color="white"
                          href={column1.source.href}
                          icon={<Code />}
                          label={column1.source.title}
                          rel="noreferrer"
                          target="_blank"
                        />
                      </Box>
                    )}
                    {column1.link && (
                      <Box direction="row" gap="small">
                        <Anchor
                          color="white"
                          href={column1.link.href}
                          icon={<LinkNext />}
                          label={column1.link.title}
                          rel="noreferrer"
                          target="_blank"
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Tilt>
            <Tilt
              className="Tilt"
              options={{ max: 15, perspective: 2000, scale: 1.05 }}
            >
              <Box background="brand" className="Tilt-inner" width="384px">
                <Box
                  background={`url(${column2.image})`}
                  height="189px"
                  width="384px"
                />
                <Box pad="medium">
                  <Text size="medium">{column2.category}</Text>
                  <Text size="xlarge" weight="bold">
                    {column2.title}
                  </Text>
                  <Box margin={{ vertical: 'medium' }}>
                    {column2.languages.map(({ color, title }, i) => (
                      <Box
                        align="center"
                        direction="row"
                        gap="small"
                        key={i}
                        justify="start"
                      >
                        <Box background={color} height="10px" width="10px" />
                        <Heading level="4" margin="none">
                          {column2.title}
                        </Heading>
                      </Box>
                    ))}
                  </Box>
                  <Box fill="horizontal">
                    <Text>{column2.description}</Text>
                  </Box>
                  <Box margin={{ top: 'medium' }}>
                    {column2.source && (
                      <Box direction="row" gap="small">
                        <Anchor
                          color="white"
                          href={column2.source.href}
                          icon={<Code />}
                          label={column2.source.title}
                          rel="noreferrer"
                          target="_blank"
                        />
                      </Box>
                    )}
                    {column2.link && (
                      <Box direction="row" gap="small">
                        <Anchor
                          color="white"
                          href={column2.link.href}
                          icon={<LinkNext />}
                          label={column2.link.title}
                          rel="noreferrer"
                          target="_blank"
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Tilt>
          </Box>
        )
      })}
    </Box>
  )
}

export default Portfolio
