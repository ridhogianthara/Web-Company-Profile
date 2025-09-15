'use client'

import Image from 'next/image'
import bgHero from "@/assets/image/server.jpg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGlobalAnimations } from '@/hooks/useGlobalAnimations'
import Link from 'next/link'
import { ArrowRight, Goal, Lightbulb, Mail, MapPin, Phone } from 'lucide-react'
import data from '@/lib/data.json'
import AppFooter from '@/components/template/AppFooter'

const Home = () => {
  const heroContain = useRef<HTMLImageElement>(null);
  const serviceContain = useRef<HTMLDivElement>(null);
  const scrollHorizontal = useRef<HTMLDivElement>(null);
  const ProductContain = useRef<HTMLDivElement>(null);

  const { services, Product, Client, testimonials } = data;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!heroContain.current || !serviceContain.current || !scrollHorizontal.current || !ProductContain.current) return;

    // Hero animation
    const heroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    const heroAnimationEnd = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "+=800px",
        end: "+=500px",
        scrub: true,
      },
    });

    heroAnimation.fromTo(
      heroContain.current,
      { scale: 0.8, clipPath: "inset(10%)" },
      { scale: 1, clipPath: "inset(0%)" }
    );

    heroAnimationEnd.fromTo(
      heroContain.current,
      { y: 0 },
      { y: -200 }
    );

    // Services horizontal scroll
    scrollHorizontal.current && gsap.to(
      scrollHorizontal.current,
      {
        x: -scrollHorizontal.current.scrollWidth + scrollHorizontal.current.offsetWidth,
        scrollTrigger: {
          trigger: scrollHorizontal.current,
          start: "10% top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
        }
      }
    );
  }, []);
  useGlobalAnimations();

  return (
    <div className='bg-black'>
      {/* Hero background */}
      <div className="absolute w-full">
        <div className="absolute w-full">

         {/* Custom Wave Background */}
{/* Custom Wave dengan Blur + Opacity */}
<svg
  className="absolute top-5 right-20 w-[150%] h-70 opacity-45 blur-2xl"
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#df1a3c" // biru gelap
    d="
      M0,160 
      C180,220,360,100,540,160 
      C720,220,900,120,1080,160 
      C1260,200,1440,120,1620,160 
      L1620,320 
      L0,320 Z
    "
  />
</svg>
         {/* Custom Wave Background */}
{/* Custom Wave dengan Blur + Opacity */}
<svg
  className="absolute top-50 left-20 w-[150%] h-70 opacity-45 blur-2xl"
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#1e3a8a" // biru gelap
    d="
      M0,160 
      C180,220,360,100,540,160 
      C720,220,900,120,1080,160 
      C1260,200,1440,120,1620,160 
      L1620,320 
      L0,320 Z
    "
  />
</svg>


        </div>
        <div className="relative w-full h-[300vh]">
          <Image
            ref={heroContain}
            src={bgHero}
            alt="hero"
            className="flex justify-center items-center w-full"
            priority
          />
          {/* Overlay untuk turunkan opacity */}
          <div className="absolute inset-0 bg-/50" />
        </div>
      </div>

      {/* Hero section */}
      <section id='home' className="flex justify-center items-center w-full h-screen overflow-hidden fade-center">
        <div className="flex flex-col justify-center items-center max-w-3xl text-center px-20">
          <h1 className="md:text-4xl text-3xl font-bold split-text text-white">
            Transform Your Business with Technology
          </h1>
          <p className="md:text-xl text-base font-bold text-white/90">
            Through our motto “Deliver an Appropriate Technology Solutions”, we describe our vision and mission as follows :
          </p>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-10">
        <div className="flex flex-col justify-center items-center space-y-4 p-6 bg-white/10 rounded-2xl backdrop-blur-xs relative overflow-hidden">
          <div className="absolute w-92 h-92 bg-purple-500 rounded-full blur-[150px] top-0 right-10 opacity-20"></div>
          <div className="absolute w-92 h-92 bg-blue-500 rounded-full blur-[150px] bottom-0 left-10 opacity-20"></div>
          <div className="flex flex-col">
            <h1 className="md:text-4xl text-2xl font-bold split-text text-white">
              About <span className='underline-gradient'></span>
            </h1>
            <p className='md:text-lg text-gray-200 fade-up'>
              PT DNAtek Solusi established at Bandung-West Java in 2012, starting from individual projects, then we have developed into a company incorporated for the purpose of professionalism, trustworthy and reliable, so we are more confident in offering solutions that fit your needs.
              Consisting of highly experienced management team, special expertise and several professionals that have been certified and proven with many projects both large and small, we believe it to meet your needs for technology and solutions.
            </p>
          </div>

          <div className="stagger-grid grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="p-6 flex flex-col items-center gap-4 rounded-2xl bg-black/70 fade-item">
              <Lightbulb className='w-20 h-20 text-blue-400' />
              <p className='text-center text-white'>
                DNAtek's vision is to provide appropriate technolgy solutions with constants innovative solution 
                updated technology and delivering value in everything we do as our commitment to client objectives.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center gap-4 rounded-2xl bg-black/70 fade-item">
              <Goal className='w-20 h-20 text-red-400' />
              <p className='text-center text-white'>
                DNAtek works to help peoples and businesses by giving the best technology solution 
                end to end solutions to fulfill customer needs and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section id='services' className='w-full h-[250vh] relative'>
        <div className="w-full flex justify-center">
          <div ref={serviceContain} className="h-72 flex items-center justify-center p-10 overflow-hidden bg-black">
            <span className='text-4xl font-bold text-center split-text text-white'>
              TRANSFORM YOUR BUSINESS WITH TECHNOLOGY <span className='underline-gradient'></span>
            </span>
          </div>
        </div>
        <div className="pt-16 sticky h-screen top-0 overflow-hidden p-10 bg-black">
          <h1 className='md:text-4xl text-2xl font-bold mb-4 split-text text-white'>
            Layanan Kami <span className='underline-gradient'></span>
          </h1>
          <div ref={scrollHorizontal} className="flex items-center gap-10 w-full stagger-grid mt-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col justify-center gap-2 md:min-w-[500px] min-w-[320px]">
                <img src={service.image} alt={service.title} className='aspect-video object-cover' />
                <div className="p-4">
                  <h1 className='text-xl font-bold text-white'>{service.title}</h1>
                  <p className='text-gray-300'>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id='portfolio'>
        {/* Product section */}
        <section className="min-h-screen w-full relative" ref={ProductContain}>
          <div className="w-full h-full flex flex-col items-center justify-center pt-20 bg-black">
            <h1 className='md:text-4xl text-2xl font-bold mb-20 split-text text-white'>
              Product <span className='underline-gradient'></span>
            </h1>
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10">
              {Product.map((team, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[200px] h-[200px] rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="w-full p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-2xl font-bold text-white mb-8 split-text">
              Client Kami <span className="underline-gradient"></span>
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
              {Client.map((Client, index) => (
                <div key={index} className="fade-item">
                  <div className="bg-white/10 border-4 border-white/10 rounded-xl backdrop-blur-sm overflow-hidden group hover:-translate-y-2 transition-all duration-300 ease-in-out">
                    <img
                      src={Client.image}
                      alt={Client.name}
                      className="w-full h-auto object-cover rounded-md aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="p-4 flex flex-col">
                      <h3 className="text-xl font-bold text-white">{Client.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials section */}
      <section className="w-full p-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-4xl text-2xl font-bold text-white mb-8 split-text">
            Apa Kata Klien Kami? <span className="underline-gradient"></span>
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm fade-item">
                <p className="italic text-gray-300">"{testimonial.quote}"</p>
                <div className="mt-4 flex items-center gap-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id='contact' className='w-full flex justify-center items-center p-10 py-20 relative bg-black'>
        <div className="absolute w-1/3 h-96 top-10 left-0 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute w-1/3 h-96 bottom-10 right-0 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>

        <div className="w-full p-10 rounded-xl backdrop-blur-2xl bg-white/10">
          <div className="flex md:flex-row flex-col w-full justify-between gap-4">
            <div className="flex flex-col">
              <h1 className='split-text md:text-3xl 2xl font-bold text-white'>Hubungi Kami<span className='underline-gradient'></span></h1>
              <p className='text-gray-400 md:text-lg text-base mb-4 fade-left'>
                Jika Anda memiliki pertanyaan atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.
              </p>
              <ul className='text-gray-400 text-lg stagger-grid'>
                <li className='fade-item-left flex items-center gap-2'><MapPin className='w-4 h-4 inline-block' /> Bandung, Indonesia</li>
                <li className='fade-item-left flex items-center gap-2'><Mail className='w-4 h-4 inline-block' /> DNAtek@example.com</li>
                <li className='fade-item-left flex items-center gap-2'><Phone className='w-4 h-4 inline-block' /> +62812345678</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 w-full items-center justify-center stagger-grid">
              <input type="text" placeholder="Nama" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm fade-item' />
              <input type="email" placeholder="Email" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm fade-item' />
              <textarea placeholder="Pesan" className='px-4 py-2 rounded-lg bg-white/5 w-full md:text-base text-sm h-20 resize-none fade-item'></textarea>
              <button className='px-4 py-2 bg-black rounded-lg md:text-base text-sm flex items-center gap-2 fade-item text-white'>
                Kirim Pesan <ArrowRight className='w-4 h-4 inline-block' />
              </button>
            </div>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  );
};

export default Home;
