import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

export const Summary = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Summary</h2>
          <Card className="bg-slate-900 border-slate-800 shadow-xl shadow-slate-950/50">
            <CardContent className="p-6 md:p-10">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                Dynamic <span className="text-blue-400 font-medium">Sales Manager</span> with a valid UAE residence permit and a strong background in the software and technology sector. Currently leading sales initiatives at <span className="text-white font-medium">Addvalues.tech</span>, specializing in selling technical solutions, custom software, and digital transformation services to B2B clients. Proven track record in closing high-value deals, understanding client technical requirements, and driving revenue growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
