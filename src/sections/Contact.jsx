import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        
        {/* Main Content Container */}
        <div className="mt-16 w-full">
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side - Contact Form */}
            <div className="flex-1 lg:max-w-md xl:max-w-lg">
              <div className="card-border rounded-xl p-8 lg:p-10 h-full">
                <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                  Send me a message
                </h3>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-6"
                >
                  <div className="space-y-2">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-vertical"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full mt-4"
                  >
                    <div className="cta-button group w-full">
                      <div className="bg-circle" />
                      <p className="text">
                        {loading ? "Sending..." : "Send Message"}
                      </p>
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - 3D Experience */}
            <div className="flex-1 lg:flex-2">
              <div className="bg-gradient-to-br from-[#cd7c2e] to-[#a46b2d] w-full h-96 lg:h-full min-h-[400px] lg:min-h-[600px] hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;