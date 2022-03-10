import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, My Name Is  <br />
          Vince Salapuddin
        </SectionTitle>
        <SectionText>
        Fourth-year computer science student at the University of Florida. Working to learn new skills, develop, and apply technical knowledge to achieve new goals, and collaborate with others to create valuable projects.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;