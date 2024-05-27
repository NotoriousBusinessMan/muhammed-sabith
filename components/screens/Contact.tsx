"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phoneno: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

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
        <form onSubmit={handleSubmit(onSubmit)} id="form w-full">
          <div className="input-group w-full flex items-center space-x-5 lg:space-x-10 mb-5">
            <div className="inputSet w-full ">
              <label htmlFor="firstname" className="mb-2 block">
                First Name:
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="firstname"
                required
                className="w-full px-4 py-2 rounded-lg"
                {...register("firstname", { required: true })}
              />
            </div>
            <div className="inputSet w-full ">
              <label htmlFor="lastname" className="mb-2 block">
                Last Name:
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="lastname"
                required
                className="w-full px-4 py-2 rounded-lg"
                {...register("lastname", { required: true })}
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
                id="email"
                placeholder="email"
                required
                className="w-full px-4 py-2 rounded-lg"
                {...register("email", { required: true })}
              />
            </div>
            <div className="inputSet w-full">
              <label htmlFor="phone" className="block mb-2">
                Phone No:
              </label>
              <input
                type="number"
                id="phone"
                placeholder="phone number"
                required
                className="w-full px-4 py-2 rounded-lg"
                {...register("phoneno", { required: true })}
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
                id="subject"
                placeholder="subject"
                required
                className="w-full px-4 py-2 rounded-lg"
                {...register("subject", { required: true })}
              />
            </div>
          </div>

          <div className="input-group w-full flex items-center space-x-5 lg:space-x-10 mb-5">
            <div className="inputSet w-full">
              <label htmlFor="message" className="block mb-2">
                Message:
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-lg"
                cols={200}
                placeholder="your message"
                {...register("message", { required: true })}></textarea>
            </div>
          </div>

          <div className="sumbitButton w-full flex items-center">
            <button className="px-4 py-3 rounded-lg bg-blue-800 text-white font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
