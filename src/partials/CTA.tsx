import { Section } from 'astro-boilerplate-components';

const CTA = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p className="text-center">
          If you want to contact me, feel free to send me a message to{' '}
          <strong>veneiroyt@gmail.com</strong>
        </p>
      </div>
    </Section>
  );
};

export { CTA };
