import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Mateo</GradientText> 👋
        </>
      }
      description={
        <>
          Hey, I am Mateo, also known as Veneiro on the web. I am a Student on
          the EII of Oviedo
        </>
      }
      avatar={
        <img
          src="/assets/images/face.png"
          style={{ width: '20em', height: 'auto' }}
          alt="Myself"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/Veneiro">
            <HeroSocial
              src="/assets/images/github-mark-white.svg"
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/mateo-rico-iglesias-76821b263/">
            <HeroSocial
              src="/assets/images/In-White-128.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
