import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, TrendingUp, Briefcase } from 'lucide-react';

const skillCategories = [
  {
    title: "Tech Sales",
    icon: <Code className="w-5 h-5" />,
    skills: ["SaaS", "Custom Software", "ERP", "Digital Transformation"]
  },
  {
    title: "Business Skills",
    icon: <Briefcase className="w-5 h-5" />,
    skills: ["B2B Sales", "Contract Negotiation", "CRM Management", "Lead Generation"]
  },
  {
    title: "Technical Proficiency",
    icon: <TrendingUp className="w-5 h-5" />,
    skills: ["Microsoft Office", "SDLC (Basic)", "Digital Marketing Tools"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-slate-950" id="skills">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-900 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-100">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 px-3 border border-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
