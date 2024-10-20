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
          also known as Veneiro on the web, an almost graduate in Computer
          Engineering and trained in Professional Music Education. I have a
          solid theoretical and technical background that I am eager to apply. I
          consider myself focused, hard-working and creative, with a proactive
          approach to solving problems and learning new skills
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
