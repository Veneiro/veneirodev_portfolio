import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/assets/images/avatar_small.png"
              alt="Avatar"
              loading="lazy"
            />
          }
          name="veneiro-dev"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/">🏠Home</NavMenuItem>
        <NavMenuItem href="/projects/">🖥️Projects</NavMenuItem>
        <NavMenuItem href="/cv/">🪪CV </NavMenuItem>
        <NavMenuItem href="/studies/">💼Studies</NavMenuItem>
        <NavMenuItem href="/experience/">🧠Experience</NavMenuItem>
        <NavMenuItem href="/certificates/">🎖️Certificates</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
