"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Calendar,
  GraduationCap,
  Code,
  Database,
  Globe,
  Server,
  Send,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function Portfolio() {
  // Carousel state and handlers for all carousels
const [itiansIndex, setItiansIndex] = useState(0);
const itiansImages = [  
  "/images/itian/photo2025-07-0909-29-36.jpg",
  "/images/itian/photo2025-07-0909-29-33.jpg",
  "/images/itian/photo2025-07-0909-29-37.jpg",
  "/images/itian/photo2025-07-0909-29-38.jpg",
  "/images/itian/photo2025-07-0909-29-39.jpg",
  "/images/itian/photo2025-07-0909-29-41.jpg",
];
const handleItiansPrev = () => setItiansIndex((prev) => (prev - 1 + itiansImages.length) % itiansImages.length);
const handleItiansNext = () => setItiansIndex((prev) => (prev + 1) % itiansImages.length);

const [jobIndex, setJobIndex] = useState(0);
const jobImages = [
  "/images/jobboard/Screenshot-from-2025-07-19-22-40-56.png",
  "/images/jobboard/Screenshot-from-2025-07-19-22-41-05.png",
  "/images/jobboard/Screenshot-from-2025-07-19-22-50-08.png",
  "/images/jobboard/Screenshot-from-2025-07-19-22-50-13.png",
  "/images/jobboard/Screenshot-from-2025-04-11-15-30-45.png",
  "/images/jobboard/Screenshot-from-2025-04-18-09-15-22.png",
];
const handleJobPrev = () => setJobIndex((prev) => (prev - 1 + jobImages.length) % jobImages.length);
const handleJobNext = () => setJobIndex((prev) => (prev + 1) % jobImages.length);

const [kindergartenIndex, setKindergartenIndex] = useState(0);
const kindergartenImages = [
  "/images/Kindergarten/Screenshot-from-2025-04-04-13-18-19.png",
  "/images/Kindergarten/Screenshot-from-2025-04-11-16-06-01.png",
  "/images/Kindergarten/Screenshot-from-2025-04-11-16-06-09.png",
];
const handleKindergartenPrev = () => setKindergartenIndex((prev) => (prev - 1 + kindergartenImages.length) % kindergartenImages.length);
const handleKindergartenNext = () => setKindergartenIndex((prev) => (prev + 1) % kindergartenImages.length);

const [medicalIndex, setMedicalIndex] = useState(0);
const medicalImages = [
  "/images/Medical/Screenshot-from-2025-06-27-20-59-41.png",
  "/images/Medical/Screenshot-from-2025-06-27-20-59-49.png",
  "/images/Medical/Screenshot-from-2025-06-27-21-00-03.png",
  "/images/Medical/Screenshot-from-2025-06-27-21-06-33.png",
  "/images/Medical/Screenshot-from-2025-06-27-21-06-48.png",
];
const handleMedicalPrev = () => setMedicalIndex((prev) => (prev - 1 + medicalImages.length) % medicalImages.length);
const handleMedicalNext = () => setMedicalIndex((prev) => (prev + 1) % medicalImages.length);

const [elearningIndex, setElearningIndex] = useState(0);
const elearningImages = [
  "/images/elearning/demo.png",
  "/images/elearning/Screenshot2025-04-23-04-04-23-305-editcom.linkedin.android.jpg",
  "/images/elearning/Screenshot2025-04-23-04-05-58-232-editcom.linkedin.android.jpg",
  "/images/elearning/Screenshot2025-04-23-04-06-48-850-editcom.linkedin.android.jpg",
  "/images/elearning/Screenshot2025-04-23-04-07-21-293-editcom.linkedin.android.jpg",
  "/images/elearning/Screenshot-from-2025-04-10-23-03-43.png",
  "/images/elearning/Screenshot-from-2025-04-11-15-48-09.png",
];
const handleElearningPrev = () => setElearningIndex((prev) => (prev - 1 + elearningImages.length) % elearningImages.length);
const handleElearningNext = () => setElearningIndex((prev) => (prev + 1) % elearningImages.length);

const [insuranceIndex, setInsuranceIndex] = useState(0);
const insuranceImages = [
  "/images/healthInsurance/Screenshot-from-2025-04-04-18-45-06.png",
  "/images/healthInsurance/Screenshot-from-2025-04-04-18-56-39.png",
  "/images/healthInsurance/Screenshot-from-2025-04-04-18-56-52.png",
];
const handleInsurancePrev = () => setInsuranceIndex((prev) => (prev - 1 + insuranceImages.length) % insuranceImages.length);
const handleInsuranceNext = () => setInsuranceIndex((prev) => (prev + 1) % insuranceImages.length);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif font-bold text-xl text-foreground">Aliaa Hesham</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Hi, I'm Aliaa
                  <span className="text-primary block">Fullstack Developer</span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                  Building modern, scalable web applications using Laravel, React, and Node.js. ITI graduate with
                  hands-on experience in backend integrations, realtime applications, and competitive programming.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  Laravel
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  React
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Vue.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Angular
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/images/Aliaa_hesham_zaki_cv_Fullstack.pdf"
                  download
                  className="inline-block"
                >
                  <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent w-full">
                    Download CV
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://github.com/aliaa11"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/aliaa-hesham"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:aliaaheshamzaki@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                      <img
                        src="/images/5888905217066519506.jpg"
                        alt="Aliaa Hesham Zaki - Fullstack Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <Card className="bg-card border-border shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium text-foreground">Available for work</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>Cairo, Egypt</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span>+20 106 973 0946</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <span>aliaaheshamzaki@gmail.com</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <h3 className="font-medium text-foreground mb-2">Recent Achievement</h3>
                        <p className="text-sm text-muted-foreground">
                          Completed ITI Open Source Application Development Diploma with hands-on projects in Laravel,
                          React, and Supabase.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-4 right-4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              I'm a passionate fullstack developer with a strong foundation in both frontend and backend technologies.
              My journey began with competitive programming (ICPC), which taught me problem-solving skills and
              algorithmic thinking that I apply to building efficient, scalable applications.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              I specialize in creating modern web applications using Laravel for robust backend systems, React and
              Vue.js for dynamic user interfaces, and Node.js for full-stack JavaScript solutions. I'm experienced with
              both SQL and NoSQL databases, and I enjoy working on realtime applications and complex integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">Technical Skills</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Frontend</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        React.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Angular
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Vue.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Next.js
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Bootstrap 5
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        HTML5
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        CSS3
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Backend</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Express.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Laravel
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Django
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        PHP
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Python
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        JavaScript
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        TypeScript
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Database Skills */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Databases</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        MySQL
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        MongoDB
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        PostgreSQL
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Supabase
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Atlas MongoDB
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Realtime DB
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Others */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Tools</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Git
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        GitHub
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Linux
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Bash
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        WordPress
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        REST APIs
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

   {/* Projects Showcase Gallery section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in fullstack development, from management systems to
              realtime applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The ITIANs Community */}
            <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" id="carousel-itians">
                  <img
                    src={itiansImages[itiansIndex]}
                    alt={`The ITIANs Community Platform - Slide ${itiansIndex + 1}`}
                    className="w-full h-48 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {itiansImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${idx === itiansIndex ? "bg-primary" : "bg-white/40"} hover:bg-primary`}
                      onClick={() => setItiansIndex(idx)}
                    />
                  ))}
                </div>
                {/* Arrows */}
                <button onClick={handleItiansPrev} className="absolute left-2 top-1/2 -translate-y-1/2">◀</button>
                <button onClick={handleItiansNext} className="absolute right-2 top-1/2 -translate-y-1/2">▶</button>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">The ITIANs Community</h3>
                <p className="text-muted-foreground text-sm">
                  A realtime community platform built with Laravel backend, React frontend, and Supabase for realtime
                  features. Includes RAG chatbot integration.
                </p>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/aliaa11/Graduation-Project-From-ITI-BackEnd" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Backend
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/aliaa11/Graduation-Project-From-ITI-FrontEnd" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Frontend
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Board Platform */}
            <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" id="carousel-job">
                  <img
                    src={jobImages[jobIndex]}
                    alt={`Job Board Platform - Slide ${jobIndex + 1}`}
                    className="w-full h-48 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {jobImages.map((_, idx) => (
                    <button key={idx} className={`w-2 h-2 rounded-full ${idx === jobIndex ? "bg-accent" : "bg-white/40"}`}
                      onClick={() => setJobIndex(idx)}
                    />
                  ))}
                </div>
                <button onClick={handleJobPrev} className="absolute left-2 top-1/2 -translate-y-1/2">◀</button>
                <button onClick={handleJobNext} className="absolute right-2 top-1/2 -translate-y-1/2">▶</button>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Job Board Platform</h3>
                <p className="text-muted-foreground text-sm">
                  Full-featured job board enabling recruiters to post jobs and applicants to apply.
                </p>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/omarokstar/job-board-laravel-api" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Backend
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/Esraa-mohamed1/job-board-laravel-vue" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Frontend
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kindergarten Management */}
            <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" id="carousel-kindergarten">
                  <img
                    src={kindergartenImages[kindergartenIndex]}
                    alt={`Kindergarten - Slide ${kindergartenIndex + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {kindergartenImages.map((_, idx) => (
                    <button key={idx} className={`w-2 h-2 rounded-full ${idx === kindergartenIndex ? "bg-chart-4" : "bg-white/40"}`}
                      onClick={() => setKindergartenIndex(idx)}
                    />
                  ))}
                </div>
                <button onClick={handleKindergartenPrev} className="absolute left-2 top-1/2 -translate-y-1/2">◀</button>
                <button onClick={handleKindergartenNext} className="absolute right-2 top-1/2 -translate-y-1/2">▶</button>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Kindergarten Management</h3>
                <p className="text-muted-foreground text-sm">
                  Management system for kindergartens built with Angular + Node.js.
                </p>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/aliaa11/School_System_Node.js" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Backend
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/aliaa11/School_System" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Frontend
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Medical Project */}
            <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" id="carousel-medical">
                  <img
                    src={medicalImages[medicalIndex]}
                    alt={`Medical Project - Slide ${medicalIndex + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {medicalImages.map((_, idx) => (
                    <button key={idx} className={`w-2 h-2 rounded-full ${idx === medicalIndex ? "bg-chart-3" : "bg-white/40"}`}
                      onClick={() => setMedicalIndex(idx)}
                    />
                  ))}
                </div>
                <button onClick={handleMedicalPrev} className="absolute left-2 top-1/2 -translate-y-1/2">◀</button>
                <button onClick={handleMedicalNext} className="absolute right-2 top-1/2 -translate-y-1/2">▶</button>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Medical Management</h3>
                <p className="text-muted-foreground text-sm">
                  Healthcare system built with React + Django.
                </p>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                   <a href="https://github.com/aliaa11/MedicalProject-React-Django-" target="_blank">
                  <Github className="w-3 h-3 mr-1" /> Backend </a> 
                  </Button> 
                  <Button asChild size="sm" variant="outline" className="text-xs bg-transparent border-accent/30 hover:bg-accent/10" > <a href="https://github.com/aliaa11/MedicalProject-React-Django-Backend" target="_blank"> 
                  <Github className="w-3 h-3 mr-1" /> Frontend </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* E-learning Platform */}
            <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" id="carousel-elearning">
                  <img
                    src={elearningImages[elearningIndex]}
                    alt={`E-learning - Slide ${elearningIndex + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {elearningImages.map((_, idx) => (
                    <button key={idx} className={`w-2 h-2 rounded-full ${idx === elearningIndex ? "bg-chart-5" : "bg-white/40"}`}
                      onClick={() => setElearningIndex(idx)}
                    />
                  ))}
                </div>
                <button onClick={handleElearningPrev} className="absolute left-2 top-1/2 -translate-y-1/2">◀</button>
                <button onClick={handleElearningNext} className="absolute right-2 top-1/2 -translate-y-1/2">▶</button>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">E-learning Platform</h3>
                <p className="text-muted-foreground text-sm">
                  Interactive learning platform built with JS, HTML, and CSS.
                </p>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/aliaa11/el-madrasaa" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Repo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href="https://el-madrasaa.netlify.app/" target="_blank">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Health Insurance */}
            <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" id="carousel-insurance">
                  <img
                    src={insuranceImages[insuranceIndex]}
                    alt={`Health Insurance - Slide ${insuranceIndex + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {insuranceImages.map((_, idx) => (
                    <button key={idx} className={`w-2 h-2 rounded-full ${idx === insuranceIndex ? "bg-primary" : "bg-white/40"}`}
                      onClick={() => setInsuranceIndex(idx)}
                    />
                  ))}
                </div>
                <button onClick={handleInsurancePrev} className="absolute left-2 top-1/2 -translate-y-1/2">◀</button>
                <button onClick={handleInsuranceNext} className="absolute right-2 top-1/2 -translate-y-1/2">▶</button>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Health Insurance System</h3>
                <p className="text-muted-foreground text-sm">
                  Health insurance management system built with Angular + Laravel.
                </p>
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline">
                    <a href="https://github.com/aliaa11/Health-Insurance" target="_blank">
                      <Github className="w-3 h-3 mr-1" /> Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/aliaa11"
              className="border-primary/30 hover:bg-primary/10 bg-transparent text-primary"
              target="_blank"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              My journey through education and professional development in software engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Work Experience</h3>

              {/* Freelance Development - Job Board Platform */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">Freelance Development Team</h4>
                          <p className="text-sm text-muted-foreground">Fullstack Developer</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          2025
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Led development of the Job Board Platform as a freelance project. Built advanced job filtering, authentication, and recruiter/applicant dashboards using Laravel and Vue.js.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Vue.js</Badge>
                        <Badge variant="secondary" className="text-xs">Laravel</Badge>
                        <Badge variant="secondary" className="text-xs">MySQL</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Freelance Development - Kindergarten Management System */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">Freelance Development Team</h4>
                          <p className="text-sm text-muted-foreground">Fullstack Developer</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          2025
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Developed the Kindergarten Management System as a freelance project. Managed students, staff, and reports using Angular and Node.js.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Angular</Badge>
                        <Badge variant="secondary" className="text-xs">Node.js</Badge>
                        <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* iSchool Instructor */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">iSchool Programming Instructor</h4>
                          <p className="text-sm text-muted-foreground">Remote Programming Instructor</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          2024-2025
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trained and taught students Python programming and Mblock IDE. Conducted coding workshops and
                        provided mentoring to aspiring developers.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Mblock IDE
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Teaching
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Mentoring
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Education</h3>

              {/* ITI */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">Information Technology Institute (ITI)</h4>
                          <p className="text-sm text-muted-foreground">Open Source Application Development Diploma</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          2024-2025
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Intensive program focused on modern web development technologies. Built comprehensive projects
                        including The ITIANs Community platform with realtime features and RAG chatbot integration.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Laravel
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          React
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Supabase
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          RAG Chatbot
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* University */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">Minya University</h4>
                          <p className="text-sm text-muted-foreground">B.Sc. Computer Science</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          2020-2024
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive computer science education with focus on algorithms, data structures, and software
                        engineering. Developed Health Insurance System as capstone project.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Computer Science
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Algorithms
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Software Engineering
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* ICPC & Competitive Programming */}
              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                <Card className="border-border bg-accent/5">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold text-foreground">ICPC Participant</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Extensive experience in algorithmic problem solving through ICPC participation. Developed strong
                        teamwork and time management skills under competition pressure. Active on Codeforces, LeetCode,
                        and HackerRank.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Algorithms
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Problem Solving
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Competitive Programming
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">Get In Touch</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and how I can help you build something
              amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question about my
                  work or want to discuss a potential collaboration, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:aliaaheshamzaki@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      aliaaheshamzaki@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+201069730946" className="text-muted-foreground hover:text-primary transition-colors">
                      +20 106 973 0946
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/aliaa11"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com/in/aliaa-hesham"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href="mailto:aliaaheshamzaki@gmail.com"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-8">
                <form className="space-y-6" action="mailto:aliaaheshamzaki@gmail.com" method="POST" encType="text/plain">
                  <div className="space-y-2">
                    <Input
                      id="name"
                      name="Name"
                      placeholder="Your full name"
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      name="Email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      name="Message"
                      placeholder="Your message"
                      className="bg-background border-border focus:border-primary"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-4">
              <div className="font-serif font-bold text-2xl text-foreground">Aliaa Hesham Zaki</div>
              <p className="text-muted-foreground text-sm max-w-md">
                Fullstack Developer passionate about building modern, scalable web applications. Specializing in
                Laravel, React, Node.js, and creating seamless user experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aliaa11"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/aliaa-hesham"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aliaaheshamzaki@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Full-Stack Applications</li>
                <li>Database Design</li>
                <li>API Integration</li>
                <li>Code Mentoring</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© 2025 Aliaa Hesham Zaki. All rights reserved.</div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-400 fill-current" /> using Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
