import React from 'react'
import { Footer, Title, Box, Paragraph, Menu, Anchor } from 'grommet'
import Mail from 'grommet/components/icons/base/Mail'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialLinkedin from 'grommet/components/icons/base/SocialLinkedin'
import Cube from 'grommet/components/icons/base/Cube'

const FooterSection = () => {
  return (
    <Footer justify="between" primary={true}>
      <Title>
        Alex Lee
      </Title>
      <Box direction="row" align="center" pad={{ between: 'medium' }}>
        <Menu direction="row" size="small" dropAlign={{ right: 'right' }}>
          <Anchor icon={<Mail />} href="mailto:alex@alex-lee.site" />
          <Anchor target="_blank" icon={<SocialGithub />} href="https://github.com/alexlee-dev/" />
          <Anchor target="_blank" icon={<Cube />} href="https://www.npmjs.com/~alexlee-dev" />
          <Anchor target="_blank" icon={<SocialTwitter />} href="https://twitter.com/alexlee_dev" />
          <Anchor target="_blank" icon={<SocialLinkedin />} href="https://www.linkedin.com/in/alexlee-dev" />
        </Menu>
        <Paragraph margin="none">© 2018 Alex Lee</Paragraph>
      </Box>
    </Footer>
  )
}

export default FooterSection
