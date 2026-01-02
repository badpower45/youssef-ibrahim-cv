import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export const Contact = () => {
  return (
    <section className="py-20 bg-slate-950 text-white" id="contact">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Ready to drive growth and transform your business with cutting-edge tech solutions? 
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="bg-slate-900 border-slate-800 text-slate-100 hover:border-slate-700 transition-colors">
            <CardContent className="flex flex-col items-center p-8">
              <div className="p-4 bg-blue-500/10 text-blue-500 rounded-full mb-4 border border-blue-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Me</h3>
              <a href="https://wa.me/201224199022" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                +20 122 419 9022
              </a>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 text-slate-100 hover:border-slate-700 transition-colors">
            <CardContent className="flex flex-col items-center p-8">
              <div className="p-4 bg-blue-500/10 text-blue-500 rounded-full mb-4 border border-blue-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Me</h3>
              <a href="mailto:yeprahim0@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                yeprahim0@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 text-slate-100 hover:border-slate-700 transition-colors">
            <CardContent className="flex flex-col items-center p-8">
              <div className="p-4 bg-blue-500/10 text-blue-500 rounded-full mb-4 border border-blue-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-slate-400">UAE (Valid Residence Permit)</p>
            </CardContent>
          </Card>
        </div>

        <a href="https://wa.me/201224199022" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 shadow-lg shadow-blue-900/20">
            <Mail className="w-4 h-4 mr-2" />
            Send a Message
          </Button>
        </a>
      </div>
    </section>
  );
};
