import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Email already exists. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gap-10 py-10">
      {/* Contact Info */}
      <div className="w-full lg:w-2/5">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mt-16 capitalize">Contact</h1>
          <p className="max-w-md mx-auto text-gray-700 dark:text-gray-400 mb-8">
            I love collaborating with creative folks, so don't hesitate to reach out and say hi! 👋
          </p>
        </div>
        <h2 className="text-xl font-bold mb-8">Get In Touch</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span><strong>Call:</strong> +91 93345 54413</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span><strong>Email:</strong> kumarkrishna9801552@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span><strong>Location:</strong>  Haryana, India</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-2/5">
        
        <form
          className="w-full space-y-4 shadow-lg p-6 rounded-md border dark:border-gray-600 text-gray-700 dark:text-gray-400"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <Input type="text" {...register("name")} placeholder="Enter your name" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <Input type="email" {...register("email")} placeholder="Enter your email" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm">Say me Hi! 😊</label>
            <Textarea {...register("message")} placeholder="Enter your message" rows={4} />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
