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
        <NavMenuItem href="/posts/">Docs</NavMenuItem>
        <NavMenuItem href="/">Career</NavMenuItem>
        <NavMenuItem href="/">Experience</NavMenuItem>
        <NavMenuItem href="/">Certificates</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
