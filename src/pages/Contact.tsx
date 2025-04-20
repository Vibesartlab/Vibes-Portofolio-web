

import { ContactForm } from "@/components/ui/contact-form";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out through the form or connect with me on social media.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h2>
                <div className="flex space-x-6">
                  <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 flex items-center">
                    <Linkedin className="w-6 h-6 mr-2" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com" className="text-gray-600 hover:text-gray-900 flex items-center">
                    <Github className="w-6 h-6 mr-2" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900 flex items-center">
                    <Instagram className="w-6 h-6 mr-2" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
