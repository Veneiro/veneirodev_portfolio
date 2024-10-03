import { Section } from 'astro-boilerplate-components';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const CTA = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const btn = document.getElementById('button') as HTMLButtonElement;
    btn.value = 'Sending...';

    const serviceID = 'service_ezw6orq';
    const templateID = 'template_hy273mg';

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, '2wtBGkxhW02d0ygb2')
      .then(
        () => {
          btn.value = 'Send Email';
          setStatus('Message sent successfully!');
          alert('Sent!');
        },
        (err) => {
          btn.value = 'Send Email';
          setStatus('Failed to send message. Please try again.');
          alert(JSON.stringify(err));
        }
      );

    // Clear the form fields
    e.currentTarget.reset();
  };

  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <form
          id="form"
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col space-y-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="rounded border border-gray-300 bg-white p-2 text-black"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="rounded border border-gray-300 bg-white p-2 text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="rounded border border-gray-300 bg-white p-2 text-black"
            required
          />
          <input
            id="button"
            type="submit"
            className="rounded bg-blue-500 p-2 text-white"
            value="Send Message"
          />
        </form>
        {status && <p>{status}</p>}
      </div>
    </Section>
  );
};

export { CTA };
