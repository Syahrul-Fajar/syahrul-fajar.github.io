"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Github, Linkedin, Instagram, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfileHeroCard({ name, title, description, profileImageUrl }) {
  return (
    <section className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
      {/* Professional Header with Gradient */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 xs:p-8 sm:p-10">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Professional Avatar */}
          <Avatar className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-4 border-white/20 shadow-xl ring-4 ring-white/10">
            <AvatarImage src="/profile-avatar.png" alt="Syahrul Fajar Profile Picture" />
            <AvatarFallback className="text-xl font-bold bg-white text-blue-600">SF</AvatarFallback>
          </Avatar>

          {/* Professional Info */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">{name}</h1>
            <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-medium text-blue-100 mb-3">{title}</p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-100 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Indonesia</span>
            </div>
            <p className="text-sm xs:text-base lg:text-lg text-blue-50 leading-relaxed max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Professional Contact Bar */}
      <div className="bg-gray-50 dark:bg-gray-750 px-6 xs:px-8 sm:px-10 py-4 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-600 dark:text-gray-300">
            <a
              href="mailto:syhrlfajar@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              syhrlfajar@gmail.com
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Semarang, Indonesia
            </span>
          </div>

          {/* Download CV Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>

      {/* Social Media & Quick Stats */}
      <div className="px-6 xs:px-8 sm:px-10 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect:</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/syahrul-fajar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0A66C2] text-white rounded-lg flex items-center justify-center hover:bg-[#004182] transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/syahrul-fajar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/syahrulfajar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 text-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Years Exp</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">10+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
