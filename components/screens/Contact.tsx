import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contactSection px-8 md:px-20 py-20 md:py-36 w-full">
      <div className="top mb-16">
        <h1 className="font-semibold text-center md:text-left text-3xl md:text-6xl mb-4">
          Connect With Me
        </h1>
      </div>
      <div className="bottom w-full ">
        <div id="form w-full">
          <div className="input-group w-full flex items-center space-x-5 lg:space-x-10 mb-5">
            <div className="inputSet w-full ">
              <label htmlFor="firstname" className="mb-2 block">
                First Name:
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="firstname"
                required
                className="w-full px-4 py-2 rounded-lg"
              />
            </div>
            <div className="inputSet w-full ">
              <label htmlFor="lastname" className="mb-2 block">
                Last Name:
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="lastname"
                required
                className="w-full px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div className="input-group w-full flex items-center space-x-5 lg:space-x-10 mb-5">
            <div className="inputSet w-full">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                className="w-full px-4 py-2 rounded-lg"
              />
            </div>
            <div className="inputSet w-full">
              <label htmlFor="phone" className="block mb-2">
                Phone No:
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="phone number"
                required
                className="w-full px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div className="input-group w-full flex items-center space-x-5 lg:space-x-10 mb-5">
            <div className="inputSet w-full">
              <label htmlFor="subject" className="block mb-2">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                required
                className="w-full px-4 py-2 rounded-lg"
              />
            </div>
          </div>

          <div className="input-group w-full flex items-center space-x-5 lg:space-x-10 mb-5">
            <div className="inputSet w-full">
              <label htmlFor="message" className="block mb-2">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full px-4 py-2 rounded-lg"
                cols={200}
                placeholder="your message"></textarea>
            </div>
          </div>

          <div className="sumbitButton w-full flex items-center">
            <button className="px-4 py-3 rounded-lg bg-blue-800 text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
