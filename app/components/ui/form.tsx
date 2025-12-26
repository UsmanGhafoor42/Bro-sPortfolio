"use client";
import { useState } from "react";
import Button from "../shared/button";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setSubject("Video Editing");
    setService("Video Editing");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:gap-4 justify-baseline items-center w-full layout px-4 sm:px-0"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-5 layout">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full sm:w-1/2 border-1 border-foreground rounded-xl p-2 text-sm sm:text-base"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full sm:w-1/2 border-1 border-foreground rounded-xl p-2 text-sm sm:text-base"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-5 layout">
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full sm:w-1/2 border-1 border-foreground rounded-xl p-2 text-sm sm:text-base"
        />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="w-full sm:w-1/2 border-1 border-foreground rounded-xl p-2 text-sm sm:text-base"
        />
        </div>
      {/* <select
        name="service"
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
        className="w-1/3 border-1 border-foreground rounded-xl p-2 mx-5"
        >
        <option value="video-editing">Video Editing</option>
        <option value="video-production">Video Production</option>
        </select> */}
        <div className="flex flex-col justify-between items-center w-full  gap-5 layout">

      
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full h-30 border-1 border-foreground rounded-xl p-2 "
        />
        <Button text="Submit" className="w-full" />
        </div>
    </form>
  );
};

export default FormComponent;
