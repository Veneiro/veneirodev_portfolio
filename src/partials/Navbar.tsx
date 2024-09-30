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
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/Veneiro">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/Veneiro4738">
          Twitter
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
