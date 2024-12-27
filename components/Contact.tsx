import React from 'react'

export const Contact = () => {
  return (
    <section className="bg-white z-30 dark:bg-black-100 py-8 lg:py-24 " id="contact">
      <div className="container mx-auto px-4">
        <h2 className="heading text-center mb-8">
          Contact
        </h2>
        <p className="text-center text-lg md:text-2xl mb-8">
          Have a project in mind or just want to say hi? I&apos;d love to hear from
          you.
        </p>
        <form
          className="max-w-md mx-auto"
          action="https://formspree.io/f/mnnnnoaa"
          method="POST"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white-200 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white-200 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white-200 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white-200 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Your message"
            />
          </div>
          <button
            className="bg-black-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
