"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Clock, CheckCircle, AlertCircle } from "lucide-react";
import {
  contactInfo,
  contactMethods,
  socialLinks,
  formFields,
} from "@/lib/data/contact";

// Contact method card
const ContactCard = ({ method, index }) => (
  <motion.a
    href={method.link}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="block"
  >
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className={`inline-flex p-3 rounded-lg ${method.bgColor} mb-4`}>
        <method.icon className={`w-6 h-6 ${method.color}`} />
      </div>
      <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
      <p className="text-gray-900 dark:text-gray-100 font-medium mb-1">
        {method.value}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {method.description}
      </p>
    </div>
  </motion.a>
);

// Social link button
const SocialButton = ({ social, index }) => (
  <motion.a
    href={social.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${social.color}`}
  >
    <social.icon size={20} />
    <span className="font-medium">{social.name}</span>
  </motion.a>
);

// Form field component
const FormField = ({ field, value, onChange, error }) => {
  const commonClasses =
    "w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";

  return (
    <div>
      <label htmlFor={field.id} className="block text-sm font-medium mb-2">
        {field.label}{" "}
        {field.required && <span className="text-red-500">*</span>}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={field.id}
          name={field.id}
          rows={field.rows}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          className={`${commonClasses} resize-none ${
            error ? "border-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
          required={field.required}
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          className={`${commonClasses} ${
            error ? "border-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
          required={field.required}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <AlertCircle size={14} />
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (field, value) => {
    const validation = formFields.find((f) => f.id === field)?.validation;
    if (!validation) return "";

    if (validation.minLength && value.length < validation.minLength) {
      return `Minimum ${validation.minLength} characters required`;
    }
    if (validation.maxLength && value.length > validation.maxLength) {
      return `Maximum ${validation.maxLength} characters allowed`;
    }
    if (validation.pattern && !validation.pattern.test(value)) {
      return "Invalid format";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    formFields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = "This field is required";
      } else {
        const error = validateField(field.id, formData[field.id]);
        if (error) newErrors[field.id] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-width section-padding relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {
              "Have a project in mind? I'd love to hear about it. Let's create something amazing together."
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <ContactCard key={method.id} method={method} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">
                  {contactInfo.availability}
                </h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 flex items-center gap-2">
                <Clock size={16} />
                {contactInfo.responseTime}
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Connect on Social</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <SocialButton key={social.id} social={social} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <FormField
                  key={field.id}
                  field={field}
                  value={formData[field.id]}
                  onChange={handleChange}
                  error={errors[field.id]}
                />
              ))}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg"
                >
                  <CheckCircle size={20} />
                  {`Message sent successfully! I'll get back to you soon.`}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg"
                >
                  <AlertCircle size={20} />
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
