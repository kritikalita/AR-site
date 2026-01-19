import { useRef, useState } from "react";
import { Mail, MapPin, Linkedin, Youtube, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const TargetInput = ({ as = "input", className, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const Component = as;

  // ✅ UPDATED: border-[#73b2f8]
  return (
    <div className={`relative ${className}`}>
      <Component
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-gray-900/50 text-white px-4 py-3 outline-none border-b border-gray-800 focus:border-transparent transition-colors placeholder:text-gray-600 resize-none"
      />
      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -10, y: -10 }}
        className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#73b2f8] pointer-events-none"
      />
      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 10, y: -10 }}
        className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#73b2f8] pointer-events-none"
      />
      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -10, y: 10 }}
        className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#73b2f8] pointer-events-none"
      />
      <motion.div
        animate={isFocused ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 10, y: 10 }}
        className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#73b2f8] pointer-events-none"
      />
    </div>
  );
};

const Footer = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const SERVICE_ID = "service_w8775j4";
  const TEMPLATE_ID = "template_z33mulu";
  const PUBLIC_KEY = "FXNV7WHilpcZDLGUT";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setIsSent(true);
        setIsSubmitting(false);
        e.target.reset();
        setTimeout(() => setIsSent(false), 5000);
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <footer id="contact" className="bg-transparent text-white pt-16 md:pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Unlock your next technological leap.
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Contact us to begin!
          </p>

          {isSent ? (
            // ✅ UPDATED: bg-[#73b2f8]/10 border-[#73b2f8] text-[#73b2f8]
            <div className="bg-[#73b2f8]/10 border border-[#73b2f8] text-[#73b2f8] p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <TargetInput as="input" type="text" name="first_name" required placeholder="First Name" />
                <TargetInput as="input" type="text" name="last_name" required placeholder="Last Name" />
              </div>
              <TargetInput as="input" type="email" name="email" required placeholder="Email Address" />
              <TargetInput as="textarea" name="message" required placeholder="Message" rows="4" />

              {/* ✅ UPDATED: Gradient Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#063677] to-[#73b2f8] hover:opacity-90 text-white font-bold py-3 px-8 rounded transition-all w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <>
                    Sending <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <div>
            {/* ✅ UPDATED: text-gradient */}
            <h3 className="text-xl font-bold mb-6 text-gradient">
              Registered Office
            </h3>
            <h4 className="text-lg font-semibold mb-4">Raghu Vamsi Par East Automation Pvt Ltd</h4>
            <div className="space-y-6 text-gray-300 text-sm md:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#73b2f8] mt-1 shrink-0" size={20} />
                <a
                  href="https://maps.app.goo.gl/YuVn4j5rvq8HKyVR7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#73b2f8] transition-colors"
                >
                  Plot No: 26/A, Hardware Park, Kurmalguda
                  <br />
                  Hyderabad, Telangana-501359
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-[#73b2f8] shrink-0" size={20} />
                <p>info@arrobot.co</p>
              </div>

              <div className="w-full h-48 md:h-56 rounded-lg overflow-hidden border border-gray-800 relative group bg-gray-900">
                <div className="absolute inset-0 bg-[#73b2f8]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>

                <a href="https://maps.app.goo.gl/YuVn4j5rvq8HKyVR7" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30"></a>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1905.2482901126186!2d78.4789597!3d17.2431943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3f1acfc51dd%3A0x93470901f7b8300b!2sArrobot!5e0!3m2!1sen!2sin!4v1766389707753!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 w-full h-full" 
                ></iframe>

                <img
                  src="public/images/products/Map Fallback.png"
                  alt="Map Location"
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 grayscale"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="text-center md:text-left">© 2023 Arrobot. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/arrobot/" target="_blank" rel="noopener noreferrer" className="hover:text-[#73b2f8] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@Raghu_Vamsi_Group" target="_blank" rel="noopener noreferrer" className="hover:text-[#73b2f8] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;