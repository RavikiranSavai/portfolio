'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

import { AnimatedCard } from '@/components/animated-card'
import { Button } from '@/components/ui/button'
import { TechLogo } from '@/components/tech-logo'
import { LogoGallery } from '@/components/logo-gallery'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ravikiran Savai
            </h1>
            <p className="mb-8 text-2xl text-gray-300">
              Senior DevOps Engineer
            </p>
            <p className="mb-8 text-lg text-gray-300">
              Automating infrastructure, optimizing deployments, and building reliable systems at scale
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button variant="outline" className="gap-2">
                <Mail className="h-5 w-5" />
                Contact
              </Button>
              <Button variant="default" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Ravikiran Savai"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Contact Information</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-2" />
            <span className="text-gray-300">email@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary mr-2" />
            <span className="text-gray-300">+1 (XXX) XXX-XXXX</span>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Technologies I Work With</h2>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
          {technologies.map((tech) => (
            <TechLogo key={tech} name={tech} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Core Competencies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <AnimatedCard key={skill.title} delay={index * 0.1}>
              <h3 className="mb-2 text-xl font-semibold text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.1}>
              <div className="mb-4 flex items-center gap-2">
                <TechLogo name={project.logo} size={40} />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Logo Gallery */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Tools & Platforms</h2>
        <LogoGallery logos={['VSCode', 'Git', 'Jira', 'Slack', 'Datadog', 'NewRelic', 'Sentry', 'PagerDuty']} />
      </section>
    </div>
  )
}

const technologies = [
  'AWS',
  'Kubernetes',
  'Docker',
  'Terraform',
  'Jenkins',
  'GitHub',
  'Python',
  'Ansible',
  'Prometheus',
  'Grafana',
  'Linux',
  'Git',
]

const skills = [
  {
    title: 'Infrastructure as Code',
    description: 'Expert in Terraform, CloudFormation, and Ansible for automated infrastructure provisioning and configuration management.',
  },
  {
    title: 'CI/CD Pipeline Design',
    description: 'Building robust pipelines using Jenkins, GitLab CI, and GitHub Actions for continuous integration and deployment.',
  },
  {
    title: 'Cloud Architecture',
    description: 'Extensive experience with AWS, Azure, and GCP, designing scalable and resilient cloud infrastructures.',
  },
  {
    title: 'Container Orchestration',
    description: 'Proficient in Kubernetes and Docker, managing containerized applications at scale.',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Implementation of comprehensive monitoring solutions using Prometheus, Grafana, and ELK stack.',
  },
  {
    title: 'Security & Compliance',
    description: 'Implementing DevSecOps practices, security scanning, and maintaining compliance standards.',
  },
]

const projects = [
  {
    title: 'Multi-Cloud Infrastructure Platform',
    description: 'Designed and implemented a multi-cloud infrastructure platform supporting 100+ microservices across AWS and GCP.',
    technologies: ['Terraform', 'Kubernetes', 'AWS', 'GCP', 'ArgoCD'],
    logo: 'AWS',
  },
  {
    title: 'Automated Deployment Pipeline',
    description: 'Built a fully automated CI/CD pipeline reducing deployment time from hours to minutes while ensuring zero-downtime deployments.',
    technologies: ['Jenkins', 'Docker', 'GitOps', 'Helm', 'Prometheus'],
    logo: 'Jenkins',
  },
  {
    title: 'Security Compliance Framework',
    description: 'Developed an automated security compliance framework ensuring continuous compliance with SOC2 and ISO27001 standards.',
    technologies: ['Python', 'AWS Security Hub', 'Terraform', 'CloudWatch'],
    logo: 'Python',
  },
  {
    title: 'Scalable Monitoring Solution',
    description: 'Implemented a comprehensive monitoring and alerting solution covering 1000+ nodes with custom dashboards and automated incident response.',
    technologies: ['Prometheus', 'Grafana', 'AlertManager', 'ELK Stack'],
    logo: 'Prometheus',
  },
]

