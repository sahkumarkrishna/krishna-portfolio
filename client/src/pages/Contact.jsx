import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Schema
const contactSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      toast.success("Message sent successfully!");
      setSuccessMessage(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 gap-10 py-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Contact Info */}
      <motion.div className="w-full lg:w-2/5" custom={0.2} variants={fadeIn}>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mt-16 capitalize">Contact</h1>
          <p className="max-w-md mx-auto text-gray-700 dark:text-gray-400 mb-8">
            I love collaborating with creative folks, so don't hesitate to reach
            out and say hi! 👋
          </p>
        </div>
        <h2 className="text-xl font-bold mb-8">Get In Touch</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span>
              <strong>Call:</strong> +91 93345 54413
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span>
              <strong>Email:</strong> kumarkrishna9801552@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span>
              <strong>Location:</strong> Haryana, India
            </span>
          </div>
        </div>
      </motion.div>

      {/* Success Message OR Form */}
      {successMessage ? (
        <div className="w-full lg:w-2/5 text-center space-y-4">
          <div className="p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Congratulations! 🎉</h2>
            <p>Your response has been recorded.</p>
          </div>
          <Button className="bg-violet-700 dark:text-white" onClick={() => setSuccessMessage(false)}>
          Submit another response
          </Button>
        </div>
      ) : (
        <motion.div className="w-full lg:w-2/5" custom={0.4} variants={fadeIn}>
          <form
            className="w-full space-y-4 shadow-lg p-6 rounded-md border dark:border-gray-600 text-gray-700 dark:text-gray-400"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <Input
                type="text"
                {...register("name")}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <Input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm">Say me Hi! 😊</label>
              <Textarea
                {...register("message")}
                placeholder="Enter your message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button className="w-full bg-violet-700 dark:text-white" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
