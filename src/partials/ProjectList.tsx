import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Know And Win"
        description="This repo is part of the Software Architecture course in 2023/2024 edition. 
        It is basically a web game trying to emulate the famous spanish TV show Saber y Ganar, 
        a trivia like game where users answer questions to win juicy prizes 🥇"
        link="https://github.com/Arquisoft/wiq_en3b"
        img={{
          src: '/assets/images/kawLogo.png',
          alt: 'Know And Win Logo',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
          </>
        }
      />
      <Project
        name="Tanks Blitz"
        description="The tanks Blitz Game is a local multiplayer game where you can challenge your mates
        in exciting battles on a random scenario"
        link="https://github.com/Veneiro/sev2DVideogame"
        img={{ src: '/assets/images/tanksLogo.png', alt: 'Tanks Blitz Logo' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>C++</Tags>
          </>
        }
      />
      <Project
        name="Pong"
        description="The classic Pong game you love but with a reimagined design and a new twist"
        link="https://github.com/Veneiro/PongP5JS"
        img={{ src: '/assets/images/pongLogo.png', alt: 'Pong Logo' }}
        category={
          <>
            <Tags color={ColorTags.RED}>P5JS</Tags>
            <Tags color={ColorTags.ORANGE}>JavaScript</Tags>
            <Tags color={ColorTags.GREEN}>HTML</Tags>
            <Tags color={ColorTags.YELLOW}>CSS</Tags>
          </>
        }
      />
      <Project
        name="Discord Music Bot"
        description="A Discord bot that plays music in your server in the old way without slash commands just for the people that wants to have a bot that
        works better with Youtube as before and accepts Youtube urls"
        link="https://github.com/Veneiro/Captain-Alex-BOT"
        img={{ src: '/assets/images/discLogo.png', alt: 'Discord Bot Logo' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
