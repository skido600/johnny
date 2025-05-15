"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function Contact_cli() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  const onError = () => {
    toast.error("Please fill in all the fields.");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-bold">Send a Message</h2>
        <p className="text-gray-500 text-sm mt-1">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="p-6 pt-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="your.email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message", { required: true })}
              placeholder="Your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center  items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#314C2D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
            <FaPaperPlane className="mr-2 h-4 w-4" />
            Send Message
          </button>
        </div>
        {isSubmitSuccessful && (
          <div className="mt-4 p-3 bg-green-50  rounded-md">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact_cli;
