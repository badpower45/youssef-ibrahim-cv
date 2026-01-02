import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 py-12 md:py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1641417408632-9156658dcfd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjY2OTA3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        
        {/* Profile Image - Optimized Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative group"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-slate-950 bg-slate-800 relative z-10">
               <ImageWithFallback
                src="https://i.postimg.cc/bNvBq1Xj/testtt.jpg"
                alt="Youssef Ibrahim"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/30 -z-10 group-hover:bg-blue-500/40 transition-colors duration-500"></div>
          </div>
        </motion.div>

        {/* Text Content - Staggered Animation */}
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-800/50 backdrop-blur-sm shadow-sm">
              Sales Manager
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 leading-tight"
          >
            Youssef Ibrahim
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed px-2"
          >
            Driving revenue growth and digital transformation through strategic <span className="text-blue-400 font-medium">tech solutions</span> and strong client partnerships.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-3 gap-x-6 mb-10 text-slate-400 text-sm sm:text-base"
          >
            <div className="flex items-center hover:text-blue-400 transition-colors bg-slate-900/50 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full sm:rounded-none border border-slate-800 sm:border-none">
              <MapPin className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
              <span>UAE (Valid Residence Permit)</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
            <a href="mailto:yeprahim0@gmail.com" className="flex items-center hover:text-blue-400 transition-colors bg-slate-900/50 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full sm:rounded-none border border-slate-800 sm:border-none">
              <Mail className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
              <span>yeprahim0@gmail.com</span>
            </a>
            <div className="hidden sm:block w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
            <a href="https://wa.me/201224199022" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors bg-slate-900/50 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full sm:rounded-none border border-slate-800 sm:border-none">
              <Phone className="w-4 h-4 mr-2 text-blue-500 shrink-0" />
              <span>+20 122 419 9022</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a href="https://wa.me/201224199022" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white min-w-[160px] h-12 rounded-full font-medium shadow-lg shadow-blue-900/20 text-base">
                Contact Me
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1KV_7XRGPr_mqhIUI0aaA2BCXB8vxVp4a/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto">
              <Button variant="outline" size="lg" className="w-full border-slate-800 bg-slate-900/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 min-w-[160px] h-12 rounded-full backdrop-blur-sm text-base">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
