"use client";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-orange/20 bg-background/30 backdrop-blur-sm mt-auto">
      <div className="layout py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-foreground/60 text-sm font-medium">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Shaharyarkhan123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-orange transition-all duration-200 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </Link>

            <Link
              href="mailto:eurodeveloper1999@gmail.com"
              className="text-foreground hover:text-orange transition-all duration-200 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/muhammadshaharyarshafique/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-orange transition-all duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
