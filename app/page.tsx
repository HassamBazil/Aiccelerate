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

  const scrollToMission = () => {
    document.getElementById('mission-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <nav className={`fixed w-full px-4 sm:px-6 py-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : ''
      }`}>
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2 md:pl-8 lg:pl-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image 
                src="/Logo.jpeg" 
                alt="Logo" 
                width={48} 
                height={48}
                priority
                quality={100}
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-[30px] font-prata" style={{ fontFamily: 'prata' }}>
              Aiccelerate
            </span>
        </div>
          <Link 
            href="https://twitter.com" 
            className="nav-link flex items-center md:pr-8 lg:pr-1"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
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
        
        {/* Overlay with gradient fade */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/50 to-black" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              <TextScramble
                textParts={["Accelerating", "Crypto x AI"]}
                hoverTextParts={["Accelerating", "Crypto x AI"]}
              />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We are a DAO of investors, developers and researchers with backgrounds from the top open source AI teams, Coinbase, Google, and major funds. We believe crypto x AI is at an inflection point and our mission is to accelerate effectively via investing and building. </p>

            <button 
              onClick={scrollToMission}
              className="learn-more-btn px-8 py-3 text-lg border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-[5px]"
            >
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
            className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 mb-8 max-w-4xl mx-auto px-4 sm:px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { src: "/images/CompanyLogos/Coinbase.png", alt: "Partner 1" },
              { src: "/images/CompanyLogos/Google.jpg", alt: "Partner 2" },
              { src: "/images/CompanyLogos/NousResearch.jpg", alt: "Partner 3" },
              { src: "/images/CompanyLogos/Ai16z.png", alt: "Partner 4" },
              { src: "/images/CompanyLogos/VirtualsProtocol.png", alt: "Partner 5" },
              { src: "/images/CompanyLogos/DelphiDigital.jpg", alt: "Partner 6" },
              { src: "/images/CompanyLogos/EigenLayer.jpg", alt: "Partner 7" },
              { src: "/images/CompanyLogos/Abstract.jpg", alt: "Partner 8" },
              { src: "/images/CompanyLogos/ARCProtocol.jpg", alt: "Partner 9" },
              { src: "/images/CompanyLogos/StoryProtocol.jpg", alt: "Partner 10" },
              { src: "/images/CompanyLogos/TopologyVentures.jpeg", alt: "Partner 11" },
              { src: "/images/CompanyLogos/Bankless.png", alt: "Partner 12" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white/5 rounded-lg hover:bg-white/10 transition-colors p-2 sm:p-4 flex items-center justify-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="font-400 text-[30px]"
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
            className="text-6xl md:text-7xl text-center mb-32 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Team
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Mark",
                twitter: "@markus9x",
                link: "https://x.com/markus9x",
                description: "Crypto Angel Investing since 2016. Former Head of Research at ICON VC. Prev University of Pennsylvania & Seoul National University.",
                image: "images/OurTeam/Mark.jpg"
              },
              {
                name: "Ejaaz",
                twitter: "@cryptopunk7213",
                link: "https://x.com/cryptopunk7213",
                description: "Crypto X AI Fund Manager, Angel Investor, Former product lead at Coinbase, ConsenSys.",
                image: "/images/OurTeam/Ejaaz.jpg"
              },
              {
                name: "Ropirito",
                twitter: "@ropirito",
                link: "https://x.com/ropirito",
                description: "Researcher In-Residence @ Nous Research, AI Engineer in Finance & Healthcare Industries. Deployed @God, @s8n, @ropairito & @tee_hee_he. MBA Chicago Booth.",
                image: "/images/OurTeam/Ropitoro.jpg"
              },
              {
                name: "Aiccelerate Agent",
                twitter: "?",
                link: "",
                description: "Research/alpha agent",
                image: "/images/OurTeam/AIAgent.png"
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col"
                variants={itemVariants}
              >
                <div className="mb-6" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                  <h3 className="text-3xl font-light mb-1" style={{ fontFamily: 'Barlow Semi Condensed' }}>{member.name}</h3>
                  {member.link ? (
                    <Link 
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-lg"
                    >
                      {member.twitter}
                    </Link>
                  ) : (
                    <p className="text-gray-400 text-lg">{member.twitter}</p>
                  )}
                </div>

                <motion.div 
                  className="w-full h-[300px] rounded-lg overflow-hidden mb-6"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={212}
                    height={202}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </motion.div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl" style={{ fontFamily: 'Barlow Semi Condensed' }}>
          <motion.h2 
            className="text-6xl md:text-7xl text-center mb-32 section-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            Our Advisors
          </motion.h2>

          {/* Development Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="border-b border-white mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>Development</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Shaw", role: "AI/82", twitter: "@shawmakesmagic", link: "https://x.com/shawmakesmagic", image: "/images/Development/Shaw.jpg" },
                { name: "Ethermage", role: "Virtuals Protocol", twitter: "@ethermage", link: "https://x.com/ethermage", image: "/images/Development/EtherMage.jpg" },
                { name: "Jin", role: "AI/82", twitter: "@dankvr", link: "https://x.com/dankvr", image: "/images/Development/Jin.jpg" },
                { name: "Karan", role: "Open Source Developer", twitter: "@karan4d", link: "https://x.com/karan4d", image: "/images/Development/Karan.jpg" },
                { name: "Nader", role: "Eigenlayer", twitter: "@dabit3", link: "https://x.com/dabit3", image: "/images/Development/Nadar.jpg" },
                { name: "Cygaar", role: "Abstract", twitter: "@0xCygaar", link: "https://x.com/0xCygaar", image: "/images/Development/Cygaar.jpg" },
                { name: "Jason", role: "Story Protocol", twitter: "@jasonjzhao", link: "https://x.com/jasonjzhao", image: "/images/Development/JasonZhao.png" },
                { name: "Tachi", role: "ARC", twitter: "@0thTachi", link: "https://x.com/0thTachi", image: "/images/Development/Tachi.jpg" }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    scale: 0.9,
                    filter: "blur(5px)"
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={130}
                      height={126}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-light">{advisor.name}</h4>
                    <p className="text-sm text-gray-400">{advisor.role}</p>
                    <Link 
                      href={advisor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {advisor.twitter}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investment Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="border-b border-white mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>Investment</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Andrew Kang", role: "Mechanism Capital", twitter: "@Rewkang", link: "https://x.com/Rewkang", image: "/images/Investment/Andrew.jpg" },
                { name: "Marc Weinstein", role: "Mechanism Capital", twitter: "@WarcMeinstein", link: "https://x.com/WarcMeinstein", image: "/images/Investment/Marc.jpg" },
                { name: "Casey Caruso", role: "Topology Ventures", twitter: "@caseykcaruso", link: "https://x.com/caseykcaruso", image: "/images/Investment/Casey.jpg" },
                { name: "Anil Lulla", role: "Delphi Digital", twitter: "@anildelphi", link: "https://x.com/anildelphi", image: "/images/Investment/Anil.jpg" },
                { name: "Tommy Shaughnessy", role: "Delphi Digital", twitter: "@Shaughnessy", link: "https://x.com/Shaughnessy", image: "/images/Investment/Tommy.jpg" },
                { name: "Justin Lee", role: "Coinbase Ventures", twitter: "@shiny_shiba_", link: "https://x.com/shiny_shiba_", image: "/images/Investment/Justin.JPG" }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    scale: 0.9,
                    filter: "blur(5px)"
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={130}
                      height={126}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-light">{advisor.name}</h4>
                    <p className="text-sm text-gray-400">{advisor.role}</p>
                    <Link 
                      href={advisor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {advisor.twitter}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="border-b border-white mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>Research</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Sammy", role: "Moca Network", twitter: "@S4mmyEth", link: "https://x.com/S4mmyEth", image: "/images/Research/Sammy.jpg" },
                { name: "Jeff", role: "Steak Studio", twitter: "@Defi0xJeff", link: "https://x.com/Defi0xJeff", image: "/images/Research/Jeff.jpg" },
                { name: "Kel", role: "Independent Researcher", twitter: "@kelxyz_", link: "https://x.com/kelxyz_", image: "/images/Research/Kel.jpg" },
                { name: "Baoskee", role: "Daosfun", twitter: "@baoskee", link: "https://x.com/baoskee", image: "/images/Research/Baoskee.jpg" },
                { name: "Skely", role: "AI/82", twitter: "@123skely", link: "https://x.com/123skely", image: "/images/Research/Skely.jpg" },
                { name: "Teng Yuan", role: "Chain of Thought", twitter: "@0xPrismatic", link: "https://x.com/0xPrismatic", image: "/images/Research/Teng.jpg" }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    scale: 0.9,
                    filter: "blur(5px)"
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={130}
                      height={126}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-light">{advisor.name}</h4>
                    <p className="text-sm text-gray-400">{advisor.role}</p>
                    <Link 
                      href={advisor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {advisor.twitter}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Outreach Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="border-b border-white mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>Media Outreach</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "David Hoffman", role: "Bankless", twitter: "@TrustlessState", link: "https://x.com/TrustlessState", image: "/images/MediaOutreach/DavidHoffman.jpg" },
                { name: "Ryan Sean Adams", role: "Bankless", twitter: "@RyanSAdams", link: "https://x.com/RyanSAdams", image: "/images/MediaOutreach/RaySeanAdams.jpg" },
                { name: "Threadguy", role: "Probably Nothing", twitter: "@notthreadguy", link: "https://x.com/notthreadguy", image: "/images/MediaOutreach/ThreadGuy.jpg" }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col"
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    scale: 0.9,
                    filter: "blur(5px)"
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={130}
                      height={126}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-light">{advisor.name}</h4>
                    <p className="text-sm text-gray-400">{advisor.role}</p>
                    <Link 
                      href={advisor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {advisor.twitter}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
            className="text-md text-gray-400 mb-4"
            variants={fadeInUp}
          >
            MARKET CAPITALIZATION OF CRYPTO X AGENTIC AI
          </motion.p>
          <motion.div variants={fadeInUp} style={{ fontFamily: 'prata' }}>
            <AnimatedNumber 
              finalValue={10000000000} 
              className="text-[32px] sm:text-[32px] md:text-[60px] lg:text-[120px] font-light font-prata gradient-rainbow"
              duration={5000}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission-section" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            className="text-6xl md:text-7xl text-center mb-16 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>
          
          <motion.div 
            className="space-y-8 text-center text-[25px] text-gray-300 px-4 sm:px-8 md:px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p variants={fadeInUp}>
              Accelerate crypto AI Agent development, become the DAO of the sector, and support both the most exciting projects and the open source initiatives that elevate this space. We believe that an open source ethos is critical especially in the field of crypto x AI, not just for the sake of acceleration, but for transparency and safety issues.
            </motion.p>
            
            <motion.p variants={fadeInUp}>
              Our support will include further investments, networking, and raising awareness of the best teams. In addition to this, we plan to ship agents that can empower the space. Our first project is a public utility alpha/research agent that can help us, and the overall market make better judgement calls.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-[25px]">
              We aim to become both an <span className="font-medium">investment</span> DAO and a <span className="font-medium">builder</span> DAO by fusing elements of both a <span className="font-medium">human</span> and <span className="font-medium">agentic</span> component.
            </motion.p>
          </motion.div>
        </div>

        {/* Left Robohand */}
        <motion.div 
          className="absolute -bottom-48 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-100 pointer-events-none"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/images/robohand1.png"
            alt="Robotic Hand"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </section>

      {/* Background Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            className="text-6xl md:text-7xl text-center mb-16 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Background
          </motion.h2>
          
          <motion.div 
            className="space-y-8 text-center text-[25px] text-gray-300 px-4 sm:px-8 md:px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p variants={fadeInUp}>
              We believe that crypto x agentic AI is at an inflection point and there are liquid markets that current venture capital firms are unable to tap into. Several legitimate teams are choosing fair launch models such as pumpkin, daosfun, and others.
            </motion.p>
            
            <motion.p variants={fadeInUp}>
              A prime example of this is the meteoric rise of the AI/82 fund which currently has over $37M in assets under management, a staggering growth from just $6M a month ago. This fund consists almost entirely of AI coins with no vc involvement, some of which have surpassed $100M in market capitalization.
            </motion.p>
            
            <motion.p variants={fadeInUp}>
              It has become impossible to chase every individual project across every platform, so we are looking to leverage our network to become the <span className="font-medium">one stop shop</span> for builders. Abstracting away the hard work for builders by providing a suite of funding, networking and marketing- enabling projects to reach out and donate to us in return for support.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Robohand */}
        <motion.div 
          className="absolute -bottom-24 right-0 w-[500px] opacity-100 pointer-events-none"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/images/robohand2.png"
            alt="Robotic Hand"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            className="text-6xl md:text-7xl text-center mb-16 section-title"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            Details
          </motion.h2>
          
          <motion.p 
            className="text-center text-[25px] mb-24"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our DAO will have a <span className="font-medium bold">Human</span> component and an <span className="font-medium bold">Agent</span> component.
          </motion.p>

          {/* Human Component */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 relative">
            <motion.div 
              className="relative w-full h-[600px] -top-20 -z-10"
              initial={{ x: -100, opacity: 0, rotateY: 45 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/Human.png"
                alt="Human Component"
                width={500}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center space-y-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl mb-4" style={{ fontFamily: 'Barlow Semi Condensed' }}>Human</h3>
              <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                This would be the human component which invests and provides grants to both new and existing high potential projects and those that contribute to open source AI development.
              </p>
              <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                We will have a DAO group chat with partners who will be able to discuss crypto projects based on the AGENT Project Analysis Framework (below) and have access to our research agent.
              </p>
              <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                The core team would also leverage the DAO network to connect with pre-launch teams to discuss investment opportunities and potential airdrops for our DAO partners.
              </p>
            </motion.div>
          </div>

          {/* Agent Component */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative w-full h-[600px] order-1"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/Robot.png"
                alt="Agent Component"
                width={500}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center space-y-6 order-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'Barlow Semi Condensed' }}>Agent</h3>
              <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                Due to the high velocity of AI projects launching, our first initiative is to build an alpha/research agent with wide analysis across several different data feeds and custom metrics. A donation of x% to our DAO would trigger it to provide research/alpha on the project that donated.
              </p>
              <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                A donation would not guarantee a good review, as the agent would evaluate the project with our AGENT Project Analysis Framework. This ensures that only projects that all project analysis is standardized with a baseline that is not tampered by human bias.
              </p>
              <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                We believe that an alpha/research agent with concrete analysis backed by a <span className="font-medium">DAO with a strong social network</span> is what's necessary to ensure its success. This will provide social credibility that can further amplify the reach of its analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-32">
        <motion.div 
          className="container mx-auto px-6 max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl text-center mb-16 section-title"
            style={{ fontFamily: 'Barlow Semi Condensed' }}
            initial={{ y: 50, scale: 0.95 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
            viewport={{ once: true }}
          >
            Conclusion
          </motion.h2>
          
          <motion.p 
            className="text-center text-[20px] text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.17, 0.67, 0.83, 0.67]
            }}
            viewport={{ once: true }}
          >
            We believe we have one of the strongest networks in the industry. If leveraged properly, we could solidify ourselves as <span className="font-medium">the brand</span> of the <span className="font-medium">most exciting sector</span> in crypto. Our goal is to act as a high signal to the market, providing value to builders, our token holders, and the general market, and ship new innovations that propel the space forward.
          </motion.p>
        </motion.div>
      </section>

      {/* AGENT Framework */}
      <section className="py-32">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-32 section-title agent-framework text-center whitespace-nowrap overflow-x-auto md:overflow-visible"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A.G.E.N.T Project Analysis Framework
          </motion.h2>
          
          <div className="space-y-8" style={{ fontFamily: 'Barlow Semi Condensed' }}>
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
                style={{ fontFamily: 'Barlow Semi Condensed' }}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50
                }}
                viewport={{ once: true }} 
                
              >
                <motion.div 
                  className="md:col-span-4 lg:col-span-5 flex justify-center md:justify-end md:pr-4"
                  initial={{ 
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.2
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-light section-title leading-none block opacity-90 pt-4">
                    {section.letter}
                  </span>
                </motion.div>
                
                <motion.div 
                  className="md:col-span-8 lg:col-span-7 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.4 
                  }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="py-6" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                    <h3 className="text-3xl md:text-4xl mb-6 font-light tracking-wide" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                      {section.title}
                    </h3>
                    <ul className="space-y-4 text-gray-300 text-lg">
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2 + i * 0.1 + 0.5 
                          }}
                          viewport={{ once: true }}
                        >
                          <span className="block mt-1.5 text-lg">•</span>
                          <span className="flex-1 text-lg">{item}</span>
                        </motion.li>
                      ))}
              </ul>
            </div>

                  <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>
              </motion.div>
            ))}
            </div>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-6xl md:text-7xl text-center mb-16 section-title">FAQs</h2>
          
          <div className="space-y-8">
            {[
              {
                question: "What is Aiccelerate DAO's primary mission?",
                answer: "Our mission is to accelerate crypto x Agentic AI development and invest and provide grants to the most exciting, open source initiatives that elevate the space. We will also build agents that we've wanted to see on the market."
              },
              {
                question: "How does Aiccelerate DAO support projects?",
                answer: "Our support includes further investments, networking opportunities, and raising awareness of the best teams in the space."
              },
              {
                question: "How can a team apply for support?",
                answer: "We welcome applications from all projects via a donation of x% to our DAO. This will lead to a research report generated by our agent which will be alerted to our DAO partners. If you are a pre-launch project, reach out to us at aicceleratedao@gmail.com"
              },
              {
                question: "What is the Aiccelerate DAO token and what is the contract address?",
                answer: "The Aiccelerate DAO token is $AICC. The contract address is [contract address]"
              },
              {
                question: "What are the tokenomics behind the $AICC Token?",
                answer: "Partners will be able to participate in a gated group chat and will also be given future potential airdrops. The first agent we build will also incorporate additional tokenomics/utility to the $AICC token."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-white pb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-2xl font-light">
                    Q: {faq.question}
                  </h3>
                  <span className="text-2xl transform transition-transform duration-300">
                    {openFaq === index ? "˄" : "˅"}
                  </span>
                </div>
                <div 
                  className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="mt-4 text-gray-300 text-xl">
                    A: {faq.answer}
                  </p>
                </div>
            </div>
            ))}
            </div>

          {/* Contact Us Button */}
          <div className="mt-24 text-center">
            <Link 
              href="mailto:aicceleratedao@gmail.com"
              className="inline-block border border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300 rounded-[5px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Logo */}
      <div className="py-16 text-center">
        <Image 
          src="/Logo.jpeg"
          alt="Aiccelerate Logo"
          width={240}
          height={240}
          className="mx-auto mb-4"
        />
        <p className="text-2xl gradient-rainbow">AICCELERATE</p>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <Link 
              href="https://twitter.com" 
              className="text-gray-400 hover:text-white transition-colors rounded-[5px]"
            >
              Twitter
            </Link>
            <Link 
              href="https://telegram.com" 
              className="text-gray-400 hover:text-white transition-colors rounded-[5px]"
            >
              Telegram
            </Link>
            <Link 
              href="https://discord.com" 
              className="text-gray-400 hover:text-white transition-colors rounded-[5px]"
            >
              Discord
            </Link>
          </div>
          
          <div className="text-sm text-gray-400 space-x-4">
            <span>© 2025 Aiccelerate. All rights reserved.</span>
            <Link 
              href="/privacy-policy" 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}