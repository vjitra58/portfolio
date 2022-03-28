import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello! I am <Span>VIKAS KUMAR</Span> a Enthusiastic Web Developer. Open to Work with You.
        </SectionText>``
        <Button onClick={()=> window.location = 'mailto:vikaskumar58616@gmail.com'}>Connect with me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;