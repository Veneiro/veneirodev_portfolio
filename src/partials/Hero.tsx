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
          Hi there, I'm <GradientText>Veneiro</GradientText> 👋
        </>
      }
      description={
        <>
          Hey, I am Mateo, also known as Veneiro on the web. I am a Student on
          the EII of Oviedo
        </>
      }
      avatar={
        <img src="/assets/images/avatar.svg" alt="Avatar" loading="lazy" />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/Veneiro4738">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/mateo-rico-iglesias-76821b263/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCSiDElkACkKHaqzS9CdZmWA">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
