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
            <span className="text-xl sm:text-[30px]">
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
              { src: "/images/partners/image 2.png", alt: "Partner 1" },
              { src: "/images/partners/image 3.png", alt: "Partner 2" },
              { src: "/images/partners/image 4.png", alt: "Partner 3" },
              { src: "/images/partners/image 5.png", alt: "Partner 4" },
              { src: "/images/partners/image 6.png", alt: "Partner 5" },
              { src: "/images/partners/image 7.png", alt: "Partner 6" },
              { src: "/images/partners/image 8.png", alt: "Partner 7" },
              { src: "/images/partners/image 9.png", alt: "Partner 8" },
              { src: "/images/partners/image 10.png", alt: "Partner 9" },
              { src: "/images/partners/image 11.png", alt: "Partner 10" },
              { src: "/images/partners/image 12.png", alt: "Partner 11" },
              { src: "/images/partners/image 13.png", alt: "Partner 12" }
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
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-[30px]"
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
                twitter: "@markus0x",
                description: "Crypto Angel Investing since 2016. Former Head of Research at ICON VC, Prev University of Pennsylvania & Seoul National University.",
                image: "/images/mainimage.png"
              },
              {
                name: "Ejaaz",
                twitter: "@cryptopunk7213",
                description: "Crypto X AI Fund Manager, Angel Investor, Former product lead at Coinbase, ConseSys.",
                image: "/images/mainimage.png"
              },
              {
                name: "Ropirito",
                twitter: "@ropirito",
                description: "Researcher In-Residence @ Nous Research, AI Engineer in Finance & Healthcare Industries. Deployed @God, @s8n, @ropirito & @tee_hee_he. MBA Chicago Booth.",
                image: "/images/mainimage.png"
              },
              {
                name: "Aiccelerate Agent",
                twitter: "?",
                description: "Research/alpha agent",
                image: "/images/mainimage.png"
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col"
                variants={itemVariants}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-light mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-lg">{member.twitter}</p>
                </div>

                <motion.div 
                  className="w-full h-[300px] rounded-lg overflow-hidden mb-6"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
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
        <div className="container mx-auto px-6 max-w-6xl">
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Development</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Shaw", role: "AI/82", twitter: "@shawmakesmagic", image: "/images/mainimage.png" },
                { name: "Ethermage", role: "Virtuals Protocol", twitter: "@ethermage", image: "/images/mainimage.png" },
                { name: "Jin", role: "AI/82", twitter: "@dankvr", image: "/images/mainimage.png" },
                { name: "Karan", role: "Open Source Developer", twitter: "@karanx0x", image: "/images/mainimage.png" },
                { name: "Nader", role: "Eigenlayer", twitter: "@dabit3", image: "/images/mainimage.png" },
                { name: "Cygaar", role: "Abstract", twitter: "@0xCygaar", image: "/images/mainimage.png" },
                { name: "Jason", role: "Story Protocol", twitter: "@jasonjhao", image: "/images/mainimage.png" },
                { name: "Tachi", role: "ARC", twitter: "@0x1Tachi", image: "/images/mainimage.png" }
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
                      width={400}
                      height={400}
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
                    <p className="text-sm text-gray-400">{advisor.twitter}</p>
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Investment</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Andrew Kang", role: "Mechanism Capital", twitter: "@Rewkang" },
                { name: "Marc Weinstein", role: "Mechanism Capital", twitter: "@WarcMeinstein" },
                { name: "Casey Caruso", role: "Topology Ventures", twitter: "@caseycaruso" },
                { name: "Ani Lulla", role: "Delphi Digital", twitter: "@anildoteth" },
                { name: "Tommy Shaughnessy", role: "Delphi Digital", twitter: "@Shaughnessy119" },
                { name: "Justin Lee", role: "Coinbase Ventures", twitter: "@jasonjhao" }
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
                      src="/images/mainimage.png"
                      alt={advisor.name}
                      width={400}
                      height={400}
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
                    <p className="text-sm text-gray-400">{advisor.twitter}</p>
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Research</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "Sammy", role: "Moca Network", twitter: "@SammyEth" },
                { name: "Jeff", role: "Steak Studio", twitter: "@JeffDoJeff" },
                { name: "Kel", role: "Independent Researcher", twitter: "@kelxyz" },
                { name: "Baoskee", role: "Daodao", twitter: "@baoskee" },
                { name: "Skely", role: "AI/82", twitter: "@234skely" },
                { name: "Tang Yuan", role: "Chain of Thought", twitter: "@0xTangYuan" }
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
                      src="/images/mainimage.png"
                      alt={advisor.name}
                      width={400}
                      height={400}
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
                    <p className="text-sm text-gray-400">{advisor.twitter}</p>
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider">Media Outreach</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "David Hoffman", role: "Bankless", twitter: "@WarcMeinstein" },
                { name: "Ryan Sean Adams", role: "Bankless", twitter: "@caseycaruso" },
                { name: "Ani Lulla", role: "Probably Nothing", twitter: "@notthreadguy" }
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
                      src="/images/mainimage.png"
                      alt={advisor.name}
                      width={400}
                      height={400}
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
                    <p className="text-sm text-gray-400">{advisor.twitter}</p>
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
            className="text-sm text-gray-400 mb-4"
            variants={fadeInUp}
          >
            MARKET CAPITALIZATION OF CRYPTO X AGENTIC AI
          </motion.p>
          <motion.div variants={fadeInUp}>
            <AnimatedNumber 
              value={10000000000} 
              className="text-[120px] font-light font-prata"
              duration={2500}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative">
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
          className="absolute -bottom-48 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-60 pointer-events-none"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.6, x: 0 }}
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
          className="absolute -bottom-24 right-0 w-[500px] opacity-60 pointer-events-none"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.6, x: 0 }}
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
              className="relative w-full h-[600px] -top-24 -z-10"
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
              <h3 className="text-3xl font-light mb-4">Human</h3>
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
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
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
              <h3 className="text-3xl font-light mb-4">Agent</h3>
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
            className="text-6xl md:text-7xl text-center mb-16 section-title"
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
            className="text-center text-[25px] text-gray-300"
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
          
          <div className="space-y-8">
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
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-light section-title leading-none block opacity-90 gradient-rainbow pt-4">
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
                  
                  <div className="py-6">
                    <h3 className="text-3xl md:text-4xl mb-6 font-light tracking-wide">
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
                  <span className="text-4xl transform transition-transform duration-300">
                    {openFaq === index ? "⌃" : "⌄"}
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
              className="inline-block border border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300"
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
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <p className="text-2xl">ACCELERATE</p>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <Link 
              href="https://twitter.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </Link>
            <Link 
              href="https://telegram.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Telegram
            </Link>
            <Link 
              href="https://discord.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Discord
            </Link>
          </div>
          
          <div className="text-sm text-gray-400 space-x-4">
            <span>© 2025 Trillions. All rights reserved.</span>
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