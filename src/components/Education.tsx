import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const Education = () => {
  return (
    <section className="py-20 bg-slate-950" id="education">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="hover:shadow-lg hover:shadow-blue-900/10 transition-shadow border-l-4 border-l-blue-600 bg-slate-900 border-slate-800 border-t-0 border-r-0 border-b-0">
            <CardContent className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Higher Intermediate Diploma (Marketing)</h3>
                <p className="text-lg text-slate-400 mb-4">Port Said University</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium">
                  <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                    2024
                  </span>
                  <span className="flex items-center text-green-400 bg-green-900/20 px-3 py-1 rounded-full border border-green-900/30">
                    <Award className="w-4 h-4 mr-2" />
                    Excellent Rating
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
