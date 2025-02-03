"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { SendIcon } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "fdd96757-1400-4630-8a1c-7e6159b832ed");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success",
          description: "Message sent successfully!",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send the message. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="w-full h-full cursor mainbg mt-10 py-20 md:p-10">
      <div className="md:max-w-[50%] max-w-[80%] mx-auto p-2 mt-10 md:p-10 bg-transparent backdrop-blur-lg rounded-xl shadow-md shadow-brand/55">
        <div>
          <h1 className="text-3xl md:text-5xl mx-auto text-brand">Contact</h1>
          <p className="p-2 rounded-xl shadow-2xl shadow-brand/55 w-fit mx-auto my-10 text-lg md:text-2xl">
            Get In Touch
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center pb-4 w-full"
        >
          <div className="flex justify-center items-center gap-5 p-4 w-full flex-wrap lg:flex-nowrap">
            <div className="w-full">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="name"
                placeholder="First Name"
                className="border-brand rounded-full"
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="border-brand rounded-full"
                required
              />
            </div>
          </div>
          <div className="p-3 w-full">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border-brand w-full rounded-full"
              required
            />
          </div>
          <div className="p-3 w-full">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here."
              className="border-brand w-full"
            />
          </div>
          <div className="mt-5 flex justify-center">
            <Button
              type="submit"
              className="flex items-center gap-2 bg-darkbg shadow shadow-brand hover-cursor"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
              <SendIcon />
            </Button>
          </div>
        </form>
      </div>
    </main>
  );

}
export default Page;
