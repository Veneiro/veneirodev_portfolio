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
        <NavMenuItem href="https://unioviedo-my.sharepoint.com/:f:/g/personal/uo277172_uniovi_es/ErQV6QUKNERBoMCkt8wj6EoBIQYNUZHhPKyxoJ44bAGLhw?e=fg2AXn">
          🪪Curriculum Vitae
        </NavMenuItem>
        <NavMenuItem href="/studies/">💼Studies</NavMenuItem>
        <NavMenuItem href="/experience/">🧠Experience</NavMenuItem>
        <NavMenuItem href="/certificates/">🎖️Certificates</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
