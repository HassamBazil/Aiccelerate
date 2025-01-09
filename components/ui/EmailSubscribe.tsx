"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlignCenter } from 'lucide-react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !GOOGLE_SCRIPT_URL) return;

    try {
      setStatus('loading');

      // Create URL with parameters
      const url = `${GOOGLE_SCRIPT_URL}?email=${encodeURIComponent(email)}`;

      // Send as GET request with no-cors mode
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Since we can't read the response in no-cors mode, 
      // we'll assume success if no error was thrown
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto px-4"
      >
        <div className="flex justify-center">
          <h3 className="text-4xl sm:text-5xl md:text-[64px] mb-4 font-light whitespace-nowrap">
            Stay Up-to-Date
          </h3>
        </div>
        <p className="text-white mb-6 text-[18px] uppercase">
          Subscribe to receive updates about Aiccelerate DAO
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-[5px] focus:outline-none focus:border-white/30 transition-colors"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-400">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>
        )}
      </motion.div>
    </div>
  );
};

export default EmailSubscribe; 