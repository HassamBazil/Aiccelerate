"use client";

import { AlignCenter, Network, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TextScramble from "@/components/ui/TextScramble";
import { useState, useEffect } from 'react';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import { motion } from 'framer-motion';
import EmailSubscribe from '@/components/ui/EmailSubscribe';

interface Advisor {
  name: string;
  role: string;
  twitter: string;
  link: string;
  image: string;
}

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
  
  const advisors = [
    { name: "Andrew Kang", role: "Mechanism Capital", twitter: "@Rewkang", link: "https://x.com/Rewkang", image: "/images/Investment/Andrew.jpg" },
    { name: "Marc Weinstein", role: "Mechanism Capital", twitter: "@WarcMeinstein", link: "https://x.com/WarcMeinstein", image: "/images/Investment/Marc.jpg" },
    { name: "Casey Caruso", role: "Topology Ventures", twitter: "@caseykcaruso", link: "https://x.com/caseykcaruso", image: "/images/Investment/Casey.jpg" },
    { name: "Anil Lulla", role: "Delphi Digital", twitter: "@anildelphi", link: "https://x.com/anildelphi", image: "/images/Investment/Anil.jpg" },
    { name: "Tommy Shaughnessy", role: "Delphi Digital", twitter: "@Shaughnessy", link: "https://x.com/Shaughnessy", image: "/images/Investment/Tommy.jpg" },
    { name: "Justin Lee", role: "Coinbase Ventures", twitter: "@shiny_shiba_", link: "https://x.com/shiny_shiba_", image: "/images/Investment/Justin.JPG" }
  ];
  const firstRowCount = 4;
  const secondRowCount = advisors.length - firstRowCount;

  const partners = [
    { src: "/images/dao/Coinbase.svg", alt: "Coinbase", name: "Coinbase" },
    { src: "/images/dao/Google.svg", alt: "Google", name: "Google" },
    { src: "/images/dao/Ai16z.svg", alt: "a16z", name: "Ai16z" },
    { src: "/images/dao/VirtualsProtocol.svg", alt: "Virtuals Protocol", name: "Virtuals Protocol" },
    { src: "/images/dao/EigenLayer.svg", alt: "EigenLayer", name: "EigenLayer", dimensions: { width: 70, height: 40 }},
    { src: "/images/dao/Abstract.svg", alt: "Abstract", name: "Abstract" },
    { src: "/images/dao/StoryProtocol.svg", alt: "Story Protocol", name: "Story Protocol", dimensions: { width: 70, height: 40 }},
    { src: "/images/dao/Mechanism.svg", alt: "Mechanism Capital", name: "Mechanism Capital" },
    { src: "/images/dao/TopologyVentures.svg", alt: "Topology Ventures", name: "Topology Ventures", dimensions: { width: 70, height: 40 }},
    { src: "/images/dao/DelphiDigital.svg", alt: "Delphi Digital", name: "Delphi Digital" },
    { src: "/images/dao/Bankless.svg", alt: "Bankless", name: "Bankless", dimensions: { width: 50, height: 40 }},
    { src: "/images/dao/Arc.svg", alt: "ARC Protocol", name: "ARC" },
  ];

  const firstRow = partners.slice(0, 7);
  const secondRow = partners.slice(7);

  const developmentAdvisors = [
    { name: "Shaw", role: "Ai16z", twitter: "@shawmakesmagic", link: "https://x.com/shawmakesmagic", image: "/images/Development/Shaw.jpg" },
    { name: "Ethermage", role: "Virtuals Protocol", twitter: "@ethermage", link: "https://x.com/ethermage", image: "/images/Development/EtherMage.jpg" },
    { name: "Jin", role: "Ai16z", twitter: "@dankvr", link: "https://x.com/dankvr", image: "/images/Development/Jin.jpg" },
    { name: "Karan", role: "Open Source AI Developer", twitter: "@karan4d", link: "https://x.com/karan4d", image: "/images/Development/Karan.jpg" },
    { name: "Nader", role: "Eigenlayer", twitter: "@dabit3", link: "https://x.com/dabit3", image: "/images/Development/Nadar.jpg" },
    { name: "Cygaar", role: "Abstract", twitter: "@0xCygaar", link: "https://x.com/0xCygaar", image: "/images/Development/Cygaar.jpg" },
    { name: "Jason", role: "Story Protocol", twitter: "@jasonjzhao", link: "https://x.com/jasonjzhao", image: "/images/Development/JasonZhao.png" },
    { name: "Tachi", role: "ARC", twitter: "@0thTachi", link: "https://x.com/0thTachi", image: "/images/Development/Tachi.jpg" }
  ];

  const firstRowDevCount = 5; // First row will have 5 cards
  const secondRowDevCount = developmentAdvisors.length - firstRowDevCount;

  const investmentAdvisors = [
    { name: "Andrew Kang", role: "Mechanism Capital", twitter: "@Rewkang", link: "https://x.com/Rewkang", image: "/images/Investment/Andrew.jpg" },
    { name: "Marc Weinstein", role: "Mechanism Capital", twitter: "@WarcMeinstein", link: "https://x.com/WarcMeinstein", image: "/images/Investment/Marc.jpg" },
    { name: "Casey Caruso", role: "Topology Ventures", twitter: "@caseykcaruso", link: "https://x.com/caseykcaruso", image: "/images/Investment/Casey.jpg" },
    { name: "Anil Lulla", role: "Delphi Digital", twitter: "@anildelphi", link: "https://x.com/anildelphi", image: "/images/Investment/Anil.jpg" },
    { name: "Tommy Shaughnessy", role: "Delphi Digital", twitter: "@Shaughnessy", link: "https://x.com/Shaughnessy", image: "/images/Investment/Tommy.jpg" },
    { name: "Justin Lee", role: "Coinbase Ventures", twitter: "@shiny_shiba_", link: "https://x.com/shiny_shiba_", image: "/images/Investment/Justin.JPG" }
  ];

  const researchAdvisors = [
    { name: "Sammy", role: "Moca Network", twitter: "@S4mmyEth", link: "https://x.com/S4mmyEth", image: "/images/Research/Sammy.jpg" },
    { name: "Jeff", role: "Steak Studio", twitter: "@Defi0xJeff", link: "https://x.com/Defi0xJeff", image: "/images/Research/Jeff.jpg" },
    { name: "Kel", role: "Independent Researcher", twitter: "@kelxyz_", link: "https://x.com/kelxyz_", image: "/images/Research/Kel.jpg" },
    { name: "Baoskee", role: "Daosfun", twitter: "@baoskee", link: "https://x.com/baoskee", image: "/images/Research/Baoskee.jpg" },
    { name: "Skely", role: "Ai16z", twitter: "@123skely", link: "https://x.com/123skely", image: "/images/Research/Skely.jpg" }
  ];

  const mediaAdvisors = [
    { name: "David Hoffman", role: "Bankless", twitter: "@TrustlessState", link: "https://x.com/TrustlessState", image: "/images/MediaOutreach/DavidHoffman.jpg" },
    { name: "Ryan Sean Adams", role: "Bankless", twitter: "@RyanSAdams", link: "https://x.com/RyanSAdams", image: "/images/MediaOutreach/RaySeanAdams.jpg" },
    { name: "Threadguy", role: "Probably Nothing", twitter: "@notthreadguy", link: "https://x.com/notthreadguy", image: "/images/MediaOutreach/ThreadGuy.jpg" }
  ];

  const firstRowInvestCount = 5;
  const firstRowResearchCount = 3;
  const firstRowMediaCount = 3;

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
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      const offsetPosition = missionSection.offsetTop - 150; // 150px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };  
  const ProfileCard = ({ advisor, index }: { advisor: Advisor; index: number }) => (
    <motion.div
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
      <Link 
        href={advisor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group cursor-pointer"
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
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-lg font-light">{advisor.name}</h4>
            <p className="text-sm text-gray-400">{advisor.role}</p>
          </div>
          <Twitter size={16} className="text-gray-400 group-hover:text-white transition-colors mt-1" />
        </div>
      </Link>
    </motion.div>
  );

  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <nav className={`fixed w-full px-4 sm:px-6 py-2 sm:py-4 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : ''
      }`}>
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center space-x-2 md:pl-8 lg:pl-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Image 
                src="/LogoIcon.svg" 
                alt="Logo" 
                width={48} 
                height={48}
                priority
                quality={100}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="py-2">
            <span className="text-xl sm:text-[30px] font-prata uppercase" style={{ fontFamily: 'prata' }}>
              Aiccelerate  &nbsp;DAO
            </span>
        </div>
          <Link 
            href="https://x.com/aicceleratedao" 
            className="nav-link flex items-center md:pr-8 lg:pr-1"
            target="_blank"
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
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              <TextScramble
                textParts={["Accelerating", "Crypto x AI"]}
                hoverTextParts={["Accelerating", "Crypto x AI"]}
              />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            
            We are an Investment & Development DAO focused on the Crypto AI sector. Our members stem from the top open source AI teams, Coinbase, Google, and major funds. <br></br><br></br> 

            Our goal is two-fold: accelerate the development of decentralized open source AI, and invest in the most promising projects across multiple ecosystems. 
          </p>
            <button 
              onClick={scrollToMission}
              className="learn-more-btn px-8 py-3 text-lg border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-[5px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

 {/* Market Cap Section */}
 <section className="py-32">
        <motion.div 
          className="container mx-auto px-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-md font-400 text-[20px] sm:text-[24px] md:text-[30px] mb-4 text-center"
            variants={fadeInUp}
          >
            MARKET CAPITALIZATION OF CRYPTO X AGENTIC AI
          </motion.p>
          <motion.div 
            variants={fadeInUp} 
            style={{ fontFamily: 'prata' }}
            className="flex justify-center px-4 sm:px-8 md:px-12"
          >
            <AnimatedNumber 
              finalValue={13800000000} 
              className="text-[24px] sm:text-[36px] md:text-[72px] lg:text-[96px] xl:text-[102px] font-light font-prata gradient-rainbow text-center"
              duration={5000}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* DAO Members Section */}

     
     {/* DAO Members Section */}
<section className="py-28 text-center">
  <div className="mx-auto px-6">
    {/* Title */}
    <motion.h2 
      className="text-3xl sm:text-4xl md:text-5xl font-light mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ fontFamily: 'prata' }}
    >
      DAO with Members from
    </motion.h2>

    {/* DAO Members Grid */}
    <motion.div 
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto mb-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center space-y-4"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <div className="w-[70px] sm:w-[90px] md:w-[100px] h-[70px] sm:h-[90px] md:h-[100px] flex items-center justify-center">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.dimensions?.width || 120}
              height={partner.dimensions?.height || 120}
              className="object-contain"
            />
          </div>
          <span className="text-white text-[11px] sm:text-sm font-light opacity-100">
            {partner.name}
          </span>
        </motion.div>
      ))}
    </motion.div>

    {/* AND MORE text */}
    <motion.p
      className="text-2xl sm:text-3xl md:text-4xl font-light mt-16 text-white-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      style={{ fontFamily: 'Barlow Semi Condensed' }}
    >
      AND MORE.
    </motion.p>
            </div>
</section>

      <section className="relative overflow-hidden section-container" id='mission-section'>
<div className="container mx-auto px-4 sm:px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-start">
            {/* Title with Parallax */}
            <motion.div 
              className={`
                col-span-1 md:col-span-3 mb-8 md:mb-0 title-container
                static md:sticky top-32
              `}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ 
                zIndex: 40,
                background: 'none'
              }}
            >
              <h2 className="section-title text-4xl sm:text-5xl md:text-7xl font-light text-center md:text-left">
                Mission Statement
              </h2>
            </motion.div>

            {/* Content */}
            <div className="col-span-1 md:col-span-7 md:col-start-5 space-y-6 md:space-y-8 text-base sm:text-lg md:text-[20px] text-gray-300 px-4 md:px-0 md:ml-20">
              <p>
              We will accelerate Crypto AI development with a concentrated effort on the Agent Sector. This mission extends beyond any single blockchain or ecosystem, this DAO will be chain-agnostic, with a hyper-focused belief that agents will be the ultimate power users & consumers of ALL blockchains. </p>
              
              <p>
              We will also leverage our extensive network, product investment & engineering expertise to support both the most exciting projects and open source initiatives. We believe an open source ethos is critical for achieving decentralized AGI.  <br></br><br></br>Our support will also include further investments, networking & raising awareness of the best teams.
              </p>

             
              <p>
              In addition to this, we will house a community of leading developers (multi-framework aligned) that will build an array of agents & tools that will further our cause. We do not believe in sitting around & waiting for the future to happen, we will build it. </p>

              <p>
              Aiccelerate DAO and all its initiatives unite under a single token: $AICC. Contract Address: 3zQ1XAcbSejFZNdbTBGvFGQatvViYbcwgXZ5pQ3KRRaw</p> 

            </div>
          </div>
        </div>
      </section>




              {/* Mission Section */}
      <section >
       
      {/* Core Team Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-6xl md:text-6xl text-center mb-32 section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Core Team
          </motion.h2>
          
          <motion.div 
          style={{fontFamily: 'Barlow Semi Condensed'}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
                description: "Crypto Angel Investor since 2016. Prev UPenn, SNU.",
                image: "images/Mark.png"
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
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col"
                variants={itemVariants}
              >
                <Link 
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <div className="h-[50px] mb-4" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-light leading-tight whitespace-nowrap text-left">
                        {member.name}
                      </h3>
                      <Twitter size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <motion.div 
                    className="w-full aspect-square rounded-lg overflow-hidden mb-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </motion.div>

                  <p className="text-gray-300 text-sm leading-relaxed text-left">
                    {member.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Advisors Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl" style={{ fontFamily: 'Barlow Semi Condensed' }}>
          <div className="flex justify-center items-center">
          <motion.h2 
            className="text-6xl md:text-7xl text-center mb-32 section-title"
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            Our Advisors
          </motion.h2>
          </div>
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Development
              </h3>
            </motion.div>

            {/* Mobile Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6 sm:gap-8">
              {developmentAdvisors.map((advisor, index) => (
                <ProfileCard key={index} advisor={advisor} index={index} />
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* First Row */}
              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-5 gap-8" style={{ width: '80%' }}>
                  {developmentAdvisors.slice(0, firstRowDevCount).map((advisor, index) => (
                    <ProfileCard key={index} advisor={advisor} index={index} />
                  ))}
                </div>
              </div>

              {/* Second Row - Centered */}
              <div className="flex justify-center">
                <div 
                  className="grid gap-8"
                  style={{
                    gridTemplateColumns: `repeat(${secondRowDevCount}, minmax(0, 1fr))`,
                    width: `${(secondRowDevCount / 5) * 80}%`
                  }}
                >
                  {developmentAdvisors.slice(firstRowDevCount).map((advisor, index) => (
                    <ProfileCard key={index + firstRowDevCount} advisor={advisor} index={index + firstRowDevCount} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Section */}
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Investment
              </h3>
            </motion.div>

            {/* Mobile Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6 sm:gap-8">
              {investmentAdvisors.map((advisor, index) => (
                <ProfileCard key={index} advisor={advisor} index={index} />
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* First Row */}
              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-3 gap-8" style={{ width: '45%' }}>
                  {investmentAdvisors.slice(0, 3).map((advisor, index) => (
                    <ProfileCard key={index} advisor={advisor} index={index} />
                  ))}
                </div>
              </div>

              {/* Second Row */}
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-8" style={{ width: '45%' }}>
                  {investmentAdvisors.slice(3).map((advisor, index) => (
                    <ProfileCard key={index + 3} advisor={advisor} index={index + 3} />
                  ))}
                </div>
              </div>
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Research
              </h3>
            </motion.div>

            {/* Mobile Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6 sm:gap-8">
              {researchAdvisors.map((advisor, index) => (
                <ProfileCard key={index} advisor={advisor} index={index} />
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Single Centered Row */}
              <div className="flex justify-center">
                <div 
                  className="grid gap-8"
                  style={{
                    gridTemplateColumns: `repeat(${researchAdvisors.length}, minmax(0, 1fr))`,
                    width: `${(researchAdvisors.length / 5) * 80}%` // Using same 80% width ratio
                  }}
                >
                  {researchAdvisors.map((advisor, index) => (
                    <ProfileCard key={index} advisor={advisor} index={index} />
                  ))}
                </div>
              </div>
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
              <h3 className="text-lg font-light mb-4 uppercase tracking-wider" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Outreach
              </h3>
            </motion.div>

            {/* Mobile Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6 sm:gap-8">
              {mediaAdvisors.map((advisor, index) => (
                <ProfileCard key={index} advisor={advisor} index={index} />
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Single Centered Row */}
              <div className="flex justify-center">
                <div 
                  className="grid gap-8"
                  style={{
                    gridTemplateColumns: `repeat(${mediaAdvisors.length}, minmax(0, 1fr))`,
                    width: `${(mediaAdvisors.length / 5) * 80}%` // Using same 80% width ratio as other sections
                  }}
                >
                  {mediaAdvisors.map((advisor, index) => (
                    <ProfileCard key={index} advisor={advisor} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     

      

        
      </section>

      {/* Robot Hand Transition */}
      <motion.div 
        className="relative w-full h-[300px] overflow-visible -mt-32 -mb-32 hidden md:block"
        initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
      >
        <Image
          src="/images/robohandnew.png"
          alt="Robotic Hand"
          width={500}
          height={500}
          className="absolute left-0 top-0 w-[500px] h-auto" 
          style={{ top: '-50px' }}
        />
      </motion.div>

      {/* Background Section */}
      <section className="relative overflow-hidden section-container">
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-40 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-start">
            {/* Title with Parallax */}
            <motion.div 
              className={`
                col-span-1 md:col-span-3 mb-8 md:mb-0 title-container
                static md:sticky top-32
              `}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ 
                zIndex: 40,
                background: 'none'
              }}
            >
              <h2 className="section-title text-4xl sm:text-5xl md:text-7xl font-light text-center md:text-left">
                Background
              </h2>
            </motion.div>

            {/* Content */}
            <div className="col-span-1 md:col-span-7 md:col-start-5 space-y-6 md:space-y-8 text-base sm:text-lg md:text-[20px] text-gray-300 px-4 md:px-0 md:ml-20">
              <p>
              There are liquid markets that current venture capital firms are unable to tap into. Several legitimate teams are choosing fair launch models such as Pumpfun, Daosfun, and others.
             </p>
             <p>
              It has become impossible to chase every individual project across every platform so we will look to leverage our extensive network, product & investment experience to become the <b>home</b>  for the leading <b>builders </b>and <b>investors</b> of tomorrow.  </p>

              <p>
              We aim to become both an <b>Investment DAO</b> and a <b>Development DAO</b> by fusing elements of both a <b>human</b> and <b>agentic</b> component. We plan to ship an array of agents that can elevate the space. Our first project is a public utility research agent that can help us, and the overall market make better judgement calls.
              </p>

            
            </div>
          </div>
        </div>
      </section>

      {/* Human Hand Transition */}
      <motion.div 
        className="relative w-full h-[300px] overflow-visible -mt-32 -mb-32 hidden md:block"
        initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
      >
        <Image
          src="/images/GoodHandnew.png"
          alt="Human Hand Right"
          width={500}
          height={500}
          className="absolute right-0 top-0 w-[500px] h-auto" 
          style={{ top: '-240px' }}
        />
      </motion.div>

      

      {/* Details Section */}
      <section className="pt-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-6xl md:text-7xl text-center mb-16 section-title"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 20
              }}
            >
              {/* Split text into individual letters for stagger animation */}
              <motion.span className="inline-block">
                {"Details".split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h2>
          </motion.div>
          
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
          <section className="relative overflow-hidden section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 relative">
              <motion.div 
                className="relative w-full h-[600px] -top-10 -z-10"
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 40,
                  damping: 20
                }}
              >
                <Image
                  src="/images/GenericHuman_Better.png"
                  alt="Human Component"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div className="flex flex-col justify-center space-y-6">
                {/* Title with Parallax */}
                <motion.div 
                  className="sticky col-span-1 md:col-span-3 mb-8 md:mb-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    background: 'none'
                  }}
                >
                  <h2 className="section-title text-4xl sm:text-5xl md:text-7xl font-light text-center md:text-left" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                    Human
                  </h2>
                </motion.div>
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
          </section>

          {/* Agent Component */}
          <section className="relative overflow-hidden section-container pt-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="relative w-full h-[600px] order-1"
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 40,
                  damping: 20
                }}
              >
                <Image
                  src="/images/GoodRobot2.png"
                  alt="Agent Component"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div className="flex flex-col justify-center space-y-6 order-2">
                {/* Title with Parallax */}
                <motion.div 
                  className={`
                    sticky col-span-1 md:col-span-3 mb-8 md:mb-0
                    static md:sticky top-24
                  `}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    zIndex: 40
                  }}
                >
                  <h2 className="section-title text-4xl sm:text-5xl md:text-7xl font-light text-center md:text-left pb-8" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                    Agent
                  </h2>
                </motion.div>
                <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                Due to the high velocity of AI projects launching, our first agent is a research agent with wide analysis across several different data feeds and custom metrics. A donation to our DAO would trigger it to provide research on the project that donated (subject to change).</p>
                <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                A donation would not guarantee a good review, as the agent would evaluate the project with our AGENT Project Analysis Framework. This ensures that only projects that all project analysis is standardized with a baseline that is not tampered by human bias. </p>
                <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                We believe that a research agent with concrete analysis backed by a <b>DAO with a strong social network</b> is what’s necessary to ensure its success. This will provide social credibility that can further amplify its reach.</p>
                <p className="text-[20px] text-gray-300 leading-[1.4] min-h-[84px]">
                This will be the first of many agents that we will ship. </p>
              </motion.div>
            </div>
          </section>
        </div>
      </section>

      {/* Conclusion Section */}
      

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
            className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-16 md:mb-32 section-title agent-framework text-center overflow-x-auto md:overflow-visible"
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
                  "Growth metrics and community engagement",
                  "Marketing strategy and partnership potential with large players in/outside CT"
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
                  "Focus on impacts OUTSIDE of CT (web2 agnostic)  (we want projects that can make large impacts)",
                  "Cross-chain/cross-platform integration"
                ]
              },
              {
                letter: "T",
                title: "Technology Root",
                items: [
                  "Unique technological advantages / features",
                  "Open source vs. proprietary components",
                  "Research and development roadmap",
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
                  <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-light section-title leading-none block opacity-90 pt-4 font-proto-mono">
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
                answer: "We welcome applications from all new launch projects via a donation to our DAO (Subject to change). This will lead to a research report generated by our agent which will be sent to our DAO partners. If you are a pre-launch project or an already established project, reach out to us at aicceleratedao@gmail.com"
              },
              {
                question: "What is the Aiccelerate DAO token and what is the contract address?",
                answer: "$AICC will represent the DAO and all future initiatives. No new token will be created. The Contract Address is 3zQ1XAcbSejFZNdbTBGvFGQatvViYbcwgXZ5pQ3KRRaw"
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
                    {openFaq === index ? "−" : "+"}
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
 {/* Contact Us Section */}
 <section className="py-32 text-center">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-7xl font-light mb-16 section-title"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>

          <div className="flex flex-col items-center space-y-14 " >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{width: '300px'}} 
            >

              <Link 
                href="https://x.com/aicceleratedao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[200px] px-12 py-4 border border-white/20 rounded hover:bg-white/5 transition-all duration-300"
              >
                Twitter
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link 
                href="mailto:aicceleratedao@gmail.com"
                className="w-full max-w-[200px] px-12 py-4 border border-white/20 rounded hover:bg-white/5 transition-all duration-300"
              >
                Email
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Email Subscription */}
      <EmailSubscribe />
        
        </div>
      </section>

      {/* Footer Logo */}
      <motion.div 
        className="py-8 text-center"
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -5, 5, -5, 0],
            transition: {
              rotate: {
                duration: 0.5,
                ease: "easeInOut",
                repeat: 0
              }
            }
          }}
        >
          <Image 
            src="/LogoIcon.svg"
            alt="Aiccelerate Logo"
            width={240}
            height={240}
            className="mx-auto mb-4"
          />
        </motion.div>
        <motion.p 
          className="text-3xl gradient-rainbow pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          AICCELERATE
        </motion.p>
      </motion.div>

      {/* Footer */}
      <footer className="py-6 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <Link target="_blank"
              href="https://x.com/aicceleratedao" 
              className="text-gray-400 hover:text-white transition-colors rounded-[5px]"
            >
              Twitter
            </Link>
            <Link target="_blank"
              href="https://x.com/aicceleratedao" 
              className="text-gray-400 hover:text-white transition-colors rounded-[5px]"
            >
              Telegram
            </Link>
            <Link   target="_blank"
              href="https://x.com/aicceleratedao" 
              className="text-gray-400 hover:text-white transition-colors rounded-[5px]"
            >
              Discord
            </Link>
          </div>
          
          <div className="text-sm text-gray-400 space-x-4">
            <span>© 2025 Aiccelerate. All rights reserved.</span>
          </div>
        </div>
      </footer>

     

    </main>
  );
}