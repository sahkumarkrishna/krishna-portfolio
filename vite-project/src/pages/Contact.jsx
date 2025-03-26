import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Name
              </label>
              <Input type="text" placeholder="Enter your name" />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Email
              </label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Description
              </label>
              <Textarea placeholder="Enter your message" rows={4} />
            </div>

            {/* Submit Button */}
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
