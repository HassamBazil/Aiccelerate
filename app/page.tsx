"use client";

import { Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TextScramble from "@/components/ui/TextScramble";
import { useState, useEffect } from 'react';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <nav className={`fixed w-full p-6 z-50 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : ''
      }`}>
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12  flex items-center justify-center">
            <Image 
              src="/Logo.jpeg" 
              alt="Logo" 
              width={48} 
              height={48}
              priority
              quality={100}
            />
          </div>
          
        </div>
        <div>
        <span className="text-xl" style={{fontSize: "30px"}}>Aiccelerate</span>
        </div>
        <Link href="https://twitter.com" className="nav-link">
          <Twitter className="w-6 h-6" />
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              <TextScramble
                textParts={["ACCELERATING", "CRYPTO X AI"]}
                hoverTextParts={["ACCELERATING", "CRYPTO X AI"]}
              />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We are a collective of AI investors, researchers and developers with backgrounds from the top open source protocols, Coinbase, Google, and some of the major funds. We believe crypto x AI is at an inflection point and our mission is to accelerate effectively.
            </p>

            <button className="learn-more-btn px-8 py-3 text-lg border border-white hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* DAO Members Section */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-light mb-16 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            DAO with Members from
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 mb-8 max-w-4xl mx-auto px-4 sm:px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { src: "/images/partners/image 2.png", alt: "Partner 2" },
              { src: "/images/partners/image 3.png", alt: "Partner 3" },
              { src: "/images/partners/image 4.png", alt: "Partner 4" },
              { src: "/images/partners/image 5.png", alt: "Partner 5" },
              { src: "/images/partners/image 6.png", alt: "Partner 6" },
              { src: "/images/partners/image 7.png", alt: "Partner 7" },
              { src: "/images/partners/image 8.png", alt: "Partner 8" },
              { src: "/images/partners/image 9.png", alt: "Partner 9" },
              { src: "/images/partners/image 10.png", alt: "Partner 10" },
              { src: "/images/partners/image 11.png", alt: "Partner 11" },
              { src: "/images/partners/image 12.png", alt: "Partner 12" },
              { src: "/images/partners/image 13.png", alt: "Partner 13" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white/5 rounded-lg hover:bg-white/10 transition-colors p-4 flex items-center justify-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            AND MORE.
          </motion.p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-light text-center mb-16 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Team
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                name: "Mark",
                twitter: "@markus0x",
                description: "Crypto Angel Investing since 2015. Former Head of Research at DCG, Former Research Lead at Coinbase & Seoul National University"
              },
              {
                name: "Ejaaz",
                twitter: "@cryptopunk7213",
                description: "Crypto & AI Fund Manager, Angel Director. Former Product lead at Coinbase, Growth/PM"
              },
              {
                name: "Ropirito",
                twitter: "@ropirito",
                description: "Researcher to Providence ai Nova Research, AI Engineer at Futurs & Shima, anon researcher to Anthropic, Stability AI, Midjourney"
              },
              {
                name: "Aiccelerate Agent",
                description: "Research/crypto agent"
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="space-y-4"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="aspect-square bg-white/5 rounded-lg mb-4"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)"
                  }}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  {member.twitter && (
                    <p className="text-gray-400">{member.twitter}</p>
                  )}
                  <p className="text-sm text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-32">
        <motion.div 
          className="container mx-auto px-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-light text-center mb-16 section-title"
            variants={fadeInUp}
          >
            Our Advisors
          </motion.h2>
          
          {/* Development Section */}
          <motion.div 
            className="max-w-6xl mx-auto mb-16"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl font-light mb-8"
              variants={fadeInUp}
            >
              DEVELOPMENT
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8"
              variants={staggerContainer}
            >
              {[
                { name: "Shaw", role: "AI/82", twitter: "@shawmakesmagic" },
                { name: "Ethermage", role: "Virtuals Protocol", twitter: "@ethermage" },
                { name: "Jin", role: "AI/82", twitter: "@dankvr" },
                { name: "Karan", role: "Open Source Developer", twitter: "@karanx0x" },
                { name: "Nader", role: "Eigenlayer", twitter: "@dabit3" },
                { name: "Cygaar", role: "Abstract", twitter: "@0xCygaar" },
                { name: "Jason", role: "Story Protocol", twitter: "@jasonjhao" },
                { name: "Tachi", role: "ARC", twitter: "@0x1Tachi" }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-square bg-white/5 rounded-lg"></div>
                  <div>
                    <h4 className="font-medium">{advisor.name}</h4>
                    <p className="text-sm text-gray-400">{advisor.role}</p>
                    <p className="text-sm text-gray-400">{advisor.twitter}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Investment Section */}
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl font-light mb-8"
              variants={fadeInUp}
            >
              INVESTMENT
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8"
              variants={staggerContainer}
            >
              {[
                { name: "Andrew Kang", role: "Mechanism Capital", twitter: "@Rewkang" },
                { name: "Marc Weinstein", role: "Mechanism Capital", twitter: "@MarcWeinstein" },
                { name: "Casey Caruso", role: "Paradigm Ventures", twitter: "@caseycaruso" },
                { name: "Ani Lulla", role: "Starknet Digital", twitter: "@anildoteth" },
                { name: "Tommy Shaughnessy", role: "Delphi Digital", twitter: "@Shaughnessy119" },
                { name: "Justin Lee", role: "Coinbase Ventures", twitter: "@jsl2d" }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-square bg-white/5 rounded-lg"></div>
                  <div>
                    <h4 className="font-medium">{advisor.name}</h4>
                    <p className="text-sm text-gray-400">{advisor.role}</p>
                    <p className="text-sm text-gray-400">{advisor.twitter}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Market Cap Section */}
      <section className="py-32">
        <motion.div 
          className="container mx-auto px-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-sm text-gray-400 mb-4"
            variants={fadeInUp}
          >
            MARKET CAPITALIZATION OF CRYPTO X AGENTIC AI
          </motion.p>
          <motion.div variants={fadeInUp}>
            <AnimatedNumber 
              value={10000000000} 
              className="text-4xl sm:text-6xl md:text-7xl font-light"
              duration={2500}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-32">
        <motion.div 
          className="container mx-auto px-6 max-w-3xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl mb-8 section-title"
            variants={fadeInUp}
          >
            Mission Statement
          </motion.h2>
          <motion.div 
            className="space-y-6 text-gray-300"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Our mission: accelerate crypto AI Agent development, become the S&P 500 index of the sector, and provide grants to the most exciting open source initiatives that elevate the space.",
              "Our support will include further investments, networking and raising awareness of the best teams.",
              "We will also hint to developing our own agents. More on that later..."
            ].map((text, index) => (
              <motion.p 
                key={index}
                variants={fadeInUp}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* AGENT Framework */}
      <section className="py-32">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl mb-32 section-title text-center"
            variants={fadeInUp}
          >
            A.G.E.N.T Project Analysis Framework
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
          >
            {[
              {
                letter: "A",
                title: "Architecture & AI Integration",
                items: [
                  "How deeply is AI integrated into the core product?",
                  "What type of AI models/systems are being used?",
                  "Is the AI integration necessary or superficial?",
                  "Technical architecture and scalability plans"
                ]
              },
              {
                letter: "G",
                title: "Governance & Growth",
                items: [
                  "DAO structure and/or voting mechanisms?",
                  "Token distribution and presale structure",
                  "Growth metrics and community management",
                  "Marketing strategy and partnership potential with large players/brands/etc"
                ]
              },
              {
                letter: "E",
                title: "Execution Team",
                items: [
                  "Team background and expertise",
                  "Previous successful projects?",
                  "Network connections in AI/crypto space",
                  "Public vs. anonymous team considerations"
                ]
              },
              {
                letter: "N",
                title: "Network Effects",
                items: [
                  "Community building strategy",
                  "Token holder incentives",
                  "Partnership and collaboration potential",
                  "Focus on impact OUTSIDE of CT (we want projects that can invite large impact)",
                  "Cross-chain/cross-platform integration"
                ]
              },
              {
                letter: "T",
                title: "Technology Root",
                items: [
                  "Unique technological advantages / features",
                  "Open source vs. proprietary components",
                  "Research and development roadmap"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                variants={fadeInUp}
              >
                <motion.div 
                  className="md:col-span-4 lg:col-span-5 flex justify-center md:justify-end md:pr-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-light section-title leading-none block opacity-90 gradient-rainbow pt-4">
                    {section.letter}
                  </span>
                </motion.div>
                
                <div className="md:col-span-8 lg:col-span-7 relative">
                  <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="py-6">
                    <h3 className="text-3xl md:text-4xl mb-6 font-light tracking-wide">
                      {section.title}
                    </h3>
                    <ul className="space-y-4 text-gray-300 text-lg">
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-3"
                          variants={fadeInUp}
                          custom={i}
                        >
                          <span className="block mt-1.5 text-lg">•</span>
                          <span className="flex-1 text-lg">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl text-center mb-12 sm:mb-16 section-title">FAQs</h2>
          
          <div className="space-y-8">
            {[
              {
                question: "What is Aiccelerate DAO's primary mission?",
                answer: "Our mission is to accelerate crypto AI Agent development, become the S&P 500 index of the sector, and provide grants to the most exciting, open source initiatives that elevate the space."
              },
              {
                question: "How does Aiccelerate DAO support projects?",
                answer: "Our support includes further investments, networking opportunities, and raising awareness of the best teams in the space."
              },
              {
                question: "Who can apply for grants?",
                answer: "We welcome applications from open-source initiatives that are working on innovative AI agent development in the crypto space."
              },
              {
                question: "What is the investment thesis?",
                answer: "We believe that crypto x agentic AI is at an inflection point and focus on accelerating the development of this emerging sector."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-8">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-2xl font-light">Q: {faq.question}</h3>
                  <span 
                    className="text-2xl font-thin transition-transform duration-200" 
                    style={{ 
                      transform: openFaq === index ? 'rotate(0deg)' : 'rotate(180deg)',
                      fontSize: '24px',
                      fontFamily: 'system-ui'
                    }}
                  >
                    ↓
                  </span>
                </div>
                {openFaq === index && (
                  <p className="mt-4 text-gray-300 transition-all duration-200">
                    A: {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}