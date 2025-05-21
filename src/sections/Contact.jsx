import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_1y1t1yi',        // Your EmailJS Service ID
        'template_p30ttl6',       // Your Template ID
        templateParams,
        'KTj6GPbTAVS2JysnN'       // Your Public Key
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section
      className="min-h-screen bg-gray-950 text-white py-16 px-6"
      id="contact"
    >
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-10 text-center border-b-4 border-red-600 inline-block pb-2">
          Contact Me
        </h1>

        <form
          onSubmit={sendEmail}
          className="space-y-6 bg-gradient-to-br from-black via-gray-900 to-red-600 p-8 rounded-lg shadow-2xl transition-all duration-500"
        >
          <div>
            <label className="block mb-1 text-red-400">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-red-400">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-red-400">Message:</label>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded font-bold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
