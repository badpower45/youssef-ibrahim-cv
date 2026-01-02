import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';

const experiences = [
  {
    title: "Sales Manager",
    company: "Addvalues.tech",
    location: "UAE", 
    period: "Present",
    type: "Software & Tech Solutions",
    description: [
      "Leading the sales strategy for software development services (Web, Mobile Apps, ERP systems).",
      "Consulting with clients to understand their technical pain points and proposing tailored digital solutions.",
      "Negotiating and closing contracts for complex technical projects, ensuring alignment between client needs and technical delivery.",
      "Building a robust pipeline of B2B clients and establishing long-term strategic partnerships in the tech industry."
    ]
  },
  {
    title: "Co-Founder & Sales Representative",
    company: "Eazy_win",
    location: "Port Said, Egypt",
    period: "2021 – 2022",
    description: [
      "Played a key role in launching sales operations for a startup environment.",
      "Closed high-value deals achieving a high conversion rate through effective negotiation.",
      "Managed client relationships effectively, ensuring high customer satisfaction and retention."
    ]
  },
  {
    title: "Marketing & E-Commerce Specialist",
    company: "Freelance",
    location: "Remote",
    period: "2020 – 2021",
    type: "Tech Sector",
    description: [
      "Planned and executed digital marketing campaigns to drive engagement and software product sales.",
      "Managed online stores and optimized product listings for improved search visibility."
    ]
  },
  {
    title: "Sales Associate",
    company: "Paris Store / Palais Des Parfums",
    location: "Port Said, Egypt",
    period: "2018 – 2020",
    description: [
      "Promoted luxury brands and consistently exceeded monthly sales targets.",
      "Handled customer inquiries and ensured a premium customer experience."
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-slate-950" id="experience">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-slate-950 shadow-sm shadow-blue-900/50"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-blue-400 font-medium mt-1 text-lg">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 md:mt-0 md:items-end text-sm text-slate-400 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                {exp.type && (
                  <Badge variant="secondary" className="mb-4 bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700">
                    {exp.type}
                  </Badge>
                )}

                <ul className="space-y-3 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                      <span className="mr-3 text-blue-500 mt-1.5 text-lg leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
