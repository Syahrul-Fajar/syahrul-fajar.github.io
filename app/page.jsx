"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import ProfileHeroCard from "@/components/profile-hero-card"
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  TrendingUp,
  CheckCircle,
  Calendar,
  Github,
  ArrowRight,
  Star,
  Zap,
  Target,
} from "lucide-react"

// Tech Stack berdasarkan website asli
const skillCategories = {
  frontend: {
    title: "Frontend Development",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind CSS", "PHP", "Laravel", "Bootstrap"],
    icon: "🎨",
  },
  backend: {
    title: "Backend Development",
    color: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
    skills: ["Supabase", "MySQL"],
    icon: "⚙️",
  },
  tools: {
    title: "Tools & Version Control",
    color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    skills: ["VS Code", "Git", "GitHub"],
    icon: "🛠️",
  },
  other: {
    title: "Other Skills",
    color: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    skills: ["Database Design", "Responsive Design"],
    icon: "💡",
  },
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div
        className={`container mx-auto px-4 py-8 max-w-7xl relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Modern Hero Section */}
        <div className="transform transition-all duration-700 hover:scale-[1.02]">
          <ProfileHeroCard
            name="Syahrul Fajar"
            title="FullStack Web Developer"
            description="Seorang mahasiswa Informatika yang memiliki semangat tinggi dalam membangun solusi digital yang fungsional, menarik, dan berdampak."
            profileImageUrl="/profile-avatar.png"
          />
        </div>

        {/* Modern Content Tabs */}
        <Card className="mt-8 w-full max-w-7xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden transform transition-all duration-700 hover:shadow-3xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Modern Tab Navigation */}
            <CardHeader className="pb-0 px-3 sm:px-6 bg-gradient-to-r from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/50">
              {/* Mobile Navigation */}
              <div className="sm:hidden w-full mb-6">
                <TabsList className="w-full grid grid-cols-3 gap-2 mb-4 bg-white/60 dark:bg-gray-700/60 backdrop-blur-lg p-1 rounded-2xl h-auto border border-white/20">
                  <TabsTrigger
                    value="overview"
                    className="w-full text-xs font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white bg-transparent text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-white py-3 border-0 h-auto transform hover:scale-105"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="w-full text-xs font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white bg-transparent text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-white py-3 border-0 h-auto transform hover:scale-105"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="w-full text-xs font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white bg-transparent text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-white py-3 border-0 h-auto transform hover:scale-105"
                  >
                    Skills
                  </TabsTrigger>
                </TabsList>
                <TabsList className="w-full grid grid-cols-2 gap-2 mb-6 bg-white/60 dark:bg-gray-700/60 backdrop-blur-lg p-1 rounded-2xl h-auto border border-white/20">
                  <TabsTrigger
                    value="education"
                    className="w-full text-xs font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white bg-transparent text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-white py-3 border-0 h-auto transform hover:scale-105"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="w-full text-xs font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white bg-transparent text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-white py-3 border-0 h-auto transform hover:scale-105"
                  >
                    Projects
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Desktop Navigation */}
              <TabsList className="hidden sm:grid w-full grid-cols-2 lg:grid-cols-5 bg-white/60 dark:bg-gray-700/60 backdrop-blur-lg rounded-2xl p-1 border border-white/20">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Projects
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent className="pt-8 px-3 sm:px-6">
              {/* Modern Overview */}
              <TabsContent value="overview" className="space-y-8 mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="group">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        Tentang Saya
                      </h2>
                      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 transform hover:scale-[1.02] transition-all duration-300">
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Halo! Saya seorang{" "}
                            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              FullStack Web Developer
                            </span>{" "}
                            sekaligus mahasiswa informatika yang memiliki semangat tinggi dalam membangun solusi digital
                            yang fungsional, menarik, dan berdampak.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800 transform hover:scale-[1.02] transition-all duration-300">
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Saya aktif bereksperimen dengan teknologi web modern, khususnya dalam ekosistem{" "}
                            <span className="font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                              JavaScript
                            </span>
                            . Fokus utama saya saat ini adalah pada pengembangan menggunakan{" "}
                            <span className="font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                              React.js
                            </span>
                            , serta berbagai tools pendukung dalam modern frontend dan backend development.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800 transform hover:scale-[1.02] transition-all duration-300">
                          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Di luar perkuliahan, saya terus mengasah kemampuan melalui proyek pribadi dan kolaboratif,
                            dengan misi menciptakan solusi digital yang membantu dan mempermudah kehidupan banyak orang.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Modern Key Strengths */}
                    <div className="group">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform duration-300">
                        Keahlian Utama
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { skill: "Frontend Development", icon: "🎨", color: "from-blue-500 to-cyan-500" },
                          { skill: "Backend Development", icon: "⚙️", color: "from-green-500 to-emerald-500" },
                          { skill: "Database Design", icon: "🗄️", color: "from-purple-500 to-pink-500" },
                          { skill: "Responsive Web Design", icon: "📱", color: "from-orange-500 to-red-500" },
                          { skill: "Problem Solving", icon: "🧩", color: "from-indigo-500 to-purple-500" },
                        ].map((item, index) => (
                          <div
                            key={item.skill}
                            className={`bg-gradient-to-r ${item.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                                {item.icon}
                              </div>
                              <div>
                                <div className="font-bold text-lg">{item.skill}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modern Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Star className="w-8 h-8" />
                        Highlights
                      </h3>
                      <div className="space-y-6">
                        {[
                          { title: "Mahasiswa Aktif", subtitle: "Jurusan Informatika", icon: "🎓" },
                          { title: "FullStack Developer", subtitle: "P2MW Technology", icon: "💼" },
                          { title: "Tech Enthusiast", subtitle: "Modern Web Technologies", icon: "🚀" },
                        ].map((item, index) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-4 group cursor-pointer"
                            style={{ animationDelay: `${index * 200}ms` }}
                          >
                            <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300">
                                {item.title}
                              </div>
                              <div className="text-blue-100 text-sm">{item.subtitle}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status Card */}
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Zap className="w-8 h-8" />
                        Status
                      </h3>
                      <p className="text-green-100 text-lg leading-relaxed">
                        Terbuka untuk peluang freelance dan kolaborasi proyek
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-200">Available Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Modern Experience */}
              <TabsContent value="experience" className="space-y-8 mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    Pengalaman
                  </h2>

                  <div className="space-y-8">
                    {/* Experience Item 1 */}
                    <div className="relative pl-12 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 group">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              FullStack Web Developer
                            </h3>
                            <p className="text-xl font-semibold text-blue-600">P2MW Technology</p>
                          </div>
                          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">2025 - Present</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            "Mengembangkan aplikasi web menggunakan teknologi modern seperti React.js dan Laravel",
                            "Berkolaborasi dengan tim untuk merancang dan mengimplementasikan solusi digital",
                            "Mengelolan desain aplikasi agar responsive dan menarik",
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 group cursor-pointer">
                              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed group-hover:text-blue-600 transition-colors duration-300">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          {["React.js", "TailwindCSS", "JavaScript"].map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold transform hover:scale-110 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="relative pl-12 border-l-4 border-gradient-to-b from-green-500 to-cyan-500 group">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                              Web Developer
                            </h3>
                            <p className="text-xl font-semibold text-green-600">Informatics Study Club</p>
                          </div>
                          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">2024</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            "Mengembangkan antar muka website yang menarik",
                            "Implementasi UI/UX design yang user-friendly dan modern",
                            "Koneksi website ke database (supabase)",
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 group cursor-pointer">
                              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed group-hover:text-green-600 transition-colors duration-300">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          {["HTML", "CSS", "React.JS", "TailwindCSS"].map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold transform hover:scale-110 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Modern Skills */}
              <TabsContent value="skills" className="space-y-8 mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    Tech Stack
                  </h2>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(skillCategories).map(([key, category], index) => (
                      <div
                        key={key}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-4">
                          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                            {category.icon}
                          </span>
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skill}
                              className={`${category.color} px-4 py-2 rounded-full font-semibold transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                              style={{ animationDelay: `${skillIndex * 100}ms` }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Modern Proficiency Levels */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 flex items-center gap-4">
                      <Target className="w-8 h-8 text-blue-600" />
                      Tingkat Keahlian
                    </h3>
                    <div className="space-y-6">
                      {[
                        { skill: "JavaScript/TypeScript", level: 85, color: "from-yellow-400 to-orange-500" },
                        { skill: "React.js", level: 80, color: "from-blue-400 to-cyan-500" },
                        { skill: "HTML/CSS", level: 90, color: "from-green-400 to-emerald-500" },
                        { skill: "PHP/Laravel", level: 75, color: "from-purple-400 to-pink-500" },
                        { skill: "MySQL/Database", level: 70, color: "from-indigo-400 to-purple-500" },
                      ].map((item, index) => (
                        <div key={item.skill} className="group" style={{ animationDelay: `${index * 200}ms` }}>
                          <div className="flex justify-between mb-3">
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                              {item.skill}
                            </span>
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {item.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                            <div
                              className={`bg-gradient-to-r ${item.color} h-4 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Modern Education */}
              <TabsContent value="education" className="space-y-8 mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    Pendidikan
                  </h2>

                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          S1 Informatika
                        </h3>
                        <p className="text-xl font-semibold text-blue-600">Universitas Muhammadiyah Semarang</p>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">2023 - Present</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                          Status:
                        </span>{" "}
                        Mahasiswa Aktif
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300">Fokus pada pengembangan Web Modern</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Modern Projects */}
              <TabsContent value="projects" className="space-y-8 mt-8">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    Projects & Portfolio
                  </h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        title: "E-Learning Platform",
                        description:
                          "Platform pembelajaran online dengan sistem manajemen kursus, quiz interaktif, dan tracking progress siswa secara real-time",
                        tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
                        status: "Completed",
                        color: "from-blue-500 to-cyan-500",
                        liveUrl: "#",
                        githubUrl: "https://github.com/syahrul-fajar/e-learning-platform",
                        image: "/placeholder.svg?height=200&width=300",
                      },
                      {
                        title: "Task Management System",
                        description:
                          "Aplikasi manajemen tugas dengan fitur kolaborasi tim, deadline tracking, dan notifikasi real-time menggunakan teknologi modern",
                        tech: ["React.js", "TypeScript", "Supabase", "Tailwind CSS"],
                        status: "In Development",
                        color: "from-green-500 to-emerald-500",
                        liveUrl: "#",
                        githubUrl: "https://github.com/syahrul-fajar/task-management",
                        image: "/placeholder.svg?height=200&width=300",
                      },
                      {
                        title: "Company Profile Website",
                        description:
                          "Website profil perusahaan dengan design corporate modern, CMS admin panel, dan SEO optimization yang responsif",
                        tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
                        status: "Completed",
                        color: "from-purple-500 to-pink-500",
                        liveUrl: "#",
                        githubUrl: "https://github.com/syahrul-fajar/company-profile",
                        image: "/placeholder.svg?height=200&width=300",
                      },
                      {
                        title: "Inventory Management System",
                        description:
                          "Sistem manajemen inventory dengan fitur stock tracking, supplier management, dan reporting dashboard yang komprehensif",
                        tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
                        status: "Completed",
                        color: "from-indigo-500 to-purple-500",
                        liveUrl: "#",
                        githubUrl: "https://github.com/syahrul-fajar/inventory-system",
                        image: "/placeholder.svg?height=200&width=300",
                      },
                      {
                        title: "Personal Portfolio Website",
                        description:
                          "Website portfolio personal dengan design modern dan responsive menggunakan HTML, CSS, dan JavaScript murni",
                        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
                        status: "Live",
                        color: "from-cyan-500 to-blue-500",
                        liveUrl: "https://syahrul-fajar.github.io",
                        githubUrl: "https://github.com/syahrul-fajar/syahrul-fajar.github.io",
                        image: "/placeholder.svg?height=200&width=300",
                      },
                      {
                        title: "React Todo Application",
                        description:
                          "Aplikasi todo list modern dengan fitur CRUD, filter, dan local storage menggunakan React.js dan Tailwind CSS",
                        tech: ["React.js", "TypeScript", "Tailwind CSS", "Local Storage"],
                        status: "Completed",
                        color: "from-orange-500 to-red-500",
                        liveUrl: "#",
                        githubUrl: "https://github.com/syahrul-fajar/react-todo-app",
                        image: "/placeholder.svg?height=200&width=300",
                      },
                    ].map((project, index) => (
                      <div
                        key={project.title}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Project Image */}
                        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                          ></div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <Badge
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                project.status === "Live"
                                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                  : project.status === "Completed"
                                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                    : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                              }`}
                            >
                              {project.status}
                            </Badge>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs px-3 py-1 rounded-full border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            {project.liveUrl !== "#" && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                              >
                                Live Demo
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            )}
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Modern Featured Project */}
                  <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">🚀 Featured Project</h3>
                        <h4 className="text-2xl font-semibold mb-4">Personal Portfolio Website</h4>
                        <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                          Website portfolio yang sedang Anda lihat sekarang! Dibangun dengan teknologi modern dan design
                          yang responsive. Menampilkan semua project, skill, dan pengalaman saya dalam satu tempat yang
                          mudah diakses.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {["Next.js", "React.js", "Tailwind CSS", "TypeScript"].map((tech) => (
                            <Badge
                              key={tech}
                              className="bg-white/20 text-white border-white/30 px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href="https://syahrul-fajar.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                          >
                            Visit Original
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="https://github.com/syahrul-fajar/syahrul-fajar.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </div>
                      </div>
                      <div className="w-full lg:w-80 h-48 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-lg">
                        <img
                          src="/placeholder.svg?height=200&width=320"
                          alt="Portfolio Preview"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Modern GitHub Stats */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        GitHub Activity
                      </h3>
                      <a
                        href="https://github.com/syahrul-fajar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                        View Profile
                      </a>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { value: "15+", label: "Public Repos", color: "from-blue-500 to-cyan-500" },
                        { value: "100+", label: "Commits", color: "from-green-500 to-emerald-500" },
                        { value: "8+", label: "Languages", color: "from-purple-500 to-pink-500" },
                        { value: "2+", label: "Years Active", color: "from-orange-500 to-red-500" },
                      ].map((stat, index) => (
                        <div
                          key={stat.label}
                          className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <div className="text-4xl font-bold mb-2">{stat.value}</div>
                          <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modern Call to Action */}
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                    <h3 className="text-3xl font-bold mb-4">Tertarik untuk berkolaborasi?</h3>
                    <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                      Saya selalu terbuka untuk project baru dan kolaborasi yang menarik. Mari diskusikan ide Anda!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="mailto:syahrulfajar@gmail.com"
                        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        Contact Me
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/syahrul-fajar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        Follow on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
