import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_1y1t1yi',
        'template_p30ttl6',
        templateParams,
        'KTj6GPbTAVS2JysnN'
      )
      .then(() => {
        toast.success(' Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        toast.error(' Failed to send message. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className=" bg-gray-950 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-12 border-b-4 border-red-600 inline-block pb-3 select-none"
        >
          Contact Me
        </h2>

        <form
          onSubmit={sendEmail}
          className="bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8 max-w-2xl mx-auto"
        >
          <div className="text-left">
            <label
              className="block mb-2 text-red-400 font-semibold text-base"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-base"
            />
          </div>

          <div className="text-left">
            <label
              className="block mb-2 text-red-400 font-semibold text-base"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-base"
            />
          </div>

          <div className="text-left">
            <label
              className="block mb-2 text-red-400 font-semibold text-base"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full text-base transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
