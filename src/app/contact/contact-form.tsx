'use client';

import { useState } from "react";
import emailjs from 'emailjs-com';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.sendForm(
      'service_j012een',      // Replace
      'template_70ybm0f',     // Replace
      e.currentTarget,
      'gtGWJApm-pHIxB18l'       // Replace
      ).then(() => {
      setSuccess(true);
      setLoading(false);

      // Auto-hide success toast after a short delay
      setTimeout(() => setSuccess(false), 6000);

      // Safe form reset after successful send
      setTimeout(() => {
        form.reset();
      }, 100);
    
    }).catch((error) => {
      console.error('FAILED:', error);
      setError(true);
      setLoading(false);

      // Auto-hide error toast after a short delay
      setTimeout(() => setError(false), 6000);
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      {/* Toast Notifications */}
      <div className="fixed top-6 right-6 z-50">
        {success && (
          <div className="bg-green-500 text-white px-4 py-3 rounded shadow">
            ✅ Message sent successfully!
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white px-4 py-3 rounded shadow">
            ❌ Failed to send message. Please try again.
          </div>
        )}
      </div>

      <form onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" name="message" required rows={4} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded hover:bg-primary-dark transition"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
