import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-4 text-center text-gray-400">
      &copy; {new Date().getFullYear()} {AppConfig.site_name}. All rights
      reserved.
    </div>
  </Section>
);

export { Footer };
