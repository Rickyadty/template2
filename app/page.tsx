"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Villa {
  id: string;
  category: string;
  number: string;
  title: string;
  location: string;
  image: string;
  offsetClass?: string;
}

const villas: Villa[] = [
  {
    id: "villa-1",
    category: "Ocean Cliff",
    number: "01",
    title: "The Grand Ocean Cliff Villa",
    location: "Uluwatu Heights • 2 Bedrooms",
    image: "/images/villa-ocean-cliff.jpg",
  },
  {
    id: "villa-2",
    category: "Jungle Valley",
    number: "02",
    title: "Jungle Ravine Haven",
    location: "Campuhan Valley • Private Waterfall",
    image: "/images/villa-jungle-ravine.jpg",
    offsetClass: "lg:mt-8",
  },
  {
    id: "villa-3",
    category: "Lagoon Pool",
    number: "03",
    title: "Azure Infinity Lagoon Suite",
    location: "Balangan Reef • Direct Beach Access",
    image: "/images/villa-lagoon-suite.jpg",
  },
  {
    id: "villa-4",
    category: "Zen Pavilion",
    number: "04",
    title: "Hidden Bamboo Sanctuary",
    location: "Sidemen Hills • Ayurvedic Spa Pavilion",
    image: "/images/villa-bamboo-sanctuary.jpg",
    offsetClass: "lg:mt-6",
  },
];

const categories = ["Ocean Cliff", "Jungle Valley", "Lagoon Pool", "Zen Pavilion"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Ocean Cliff");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Top Navigation Bar */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto pointer-events-none">
        <header className="pointer-events-auto flex items-center justify-between glass-nav border border-white/20 rounded-full px-5 sm:px-8 py-3.5 shadow-2xl backdrop-blur-md transition-all duration-300">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <span className="font-serif italic font-semibold text-2xl sm:text-3xl text-white tracking-wide transition group-hover:text-emerald-300">
              Amara
            </span>
            <span className="text-[10px] tracking-[0.25em] text-white/70 uppercase font-medium mt-1">
              Sanctuary
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs uppercase tracking-[0.16em] text-white/85 font-medium">
            <Link href="#villas" className="hover:text-white transition duration-200">
              The Villas
            </Link>
            <Link href="#journey" className="hover:text-white transition duration-200">
              The Journey
            </Link>
            <Link href="#ocean" className="hover:text-white transition duration-200">
              Sanctuary Vibe
            </Link>
            <Link href="#journal" className="hover:text-white transition duration-200">
              Journal
            </Link>
            <Link href="#villas" className="hover:text-white transition duration-200">
              Experiences
            </Link>
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#booking"
              className="inline-flex items-center text-xs tracking-wider uppercase font-semibold px-5 py-2.5 rounded-full bg-white text-stone-900 hover:bg-stone-200 transition-all duration-300 shadow-sm active:scale-95"
            >
              Book Stay
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-3 p-6 glass-nav border border-white/20 rounded-3xl text-white space-y-4 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] font-medium">
              <Link
                href="#villas"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-300 transition py-1"
              >
                The Villas
              </Link>
              <Link
                href="#journey"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-300 transition py-1"
              >
                The Journey
              </Link>
              <Link
                href="#ocean"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-300 transition py-1"
              >
                Sanctuary Vibe
              </Link>
              <Link
                href="#journal"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-300 transition py-1"
              >
                Journal
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 space-y-16 lg:space-y-24">
        {/* Hero Section */}
        <section
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[820px] lg:min-h-[880px] bg-stone-950 flex flex-col justify-between p-6 sm:p-10 lg:p-12 pt-28 sm:pt-32 lg:pt-36 shadow-2xl"
          data-purpose="hero-banner"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-aerial.jpg"
              alt="Aerial view of Amara Sanctuary Bali coastline and cliffs"
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/50" />
            <div className="absolute inset-0 bg-radial-at-t from-transparent via-transparent to-stone-950/70" />
          </div>

          {/* Hero Content Block */}
          <div className="relative z-10 max-w-3xl pt-8 sm:pt-12 pb-8 sm:pb-12 text-white">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-white/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium tracking-widest uppercase text-white/90">
              Private Sanctuary — Bespoke Tropical Solitude
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white mb-6">
            Bali’s Calling — <span className="italic font-normal">Awaken</span> to Pure Tropical Serenity
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-stone-200/90 font-light leading-relaxed max-w-xl mb-8">
            Carved into Uluwatu&apos;s limestone cliff ridges and untouched turquoise lagoons. Experience bespoke private pool villas thoughtfully created for quiet luxury and mindful restoration.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#villas"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-stone-950 text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition-all duration-300 shadow-xl group"
            >
              <span>Explore Sanctuary</span>
              <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
            <Link
              href="#journal"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-card border border-white/25 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/20 transition-all duration-300"
            >
              <span>The Villa Journal</span>
            </Link>
          </div>
        </div>

        {/* Hero Bottom Badges */}
        <div className="relative z-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          <div className="flex items-center gap-2 text-white/70">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                fillRule="evenodd"
              />
            </svg>
            <span className="tracking-wide">Uluwatu Cliff Edge • Bali 80361</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 text-[11px] uppercase tracking-widest text-white/75">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              Cliffside Suite
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              Private Butler
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              Infinity Lagoon
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              Zen Pavilion
            </span>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="py-4" data-purpose="metrics-bar">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-stone-200/80 pb-12">
          <div className="space-y-1">
            <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
              100%
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
              Bespoke Seclusion
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
              12
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
              Exclusive Cliff Villas
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
              99.4%
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
              Five-Star Guest Praise
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight">
              24/7
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
              Private Butler &amp; Host
            </p>
          </div>
        </div>
      </section>

      {/* Curated Villas Grid Section */}
      <section className="space-y-10" data-purpose="curated-villas-gallery" id="villas">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400">
              Curate Your Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-tight">
              Pilih Retret Pribadi Anda Sendiri
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed max-w-lg">
              Mau bersantai di bibir tebing laut, heningnya lembah tropis, atau menyatu dengan arsitektur bambu ramah lingkungan? Semua dirancang untuk ketenangan total jiwa Anda.
            </p>
          </div>
        </div>

        {/* Filter Tabs & Controls */}
        <div className="flex items-center justify-between border-b border-stone-200/70 pb-4">
          {/* Filter Tabs */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto text-xs uppercase tracking-wider font-medium text-stone-500">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap transition pb-4 -mb-4.5 cursor-pointer ${
                  activeCategory === cat
                    ? "text-stone-900 font-bold border-b-2 border-stone-900"
                    : "hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Slider Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              aria-label="Previous villa"
              onClick={() => {
                const currentIndex = categories.indexOf(activeCategory);
                const nextIndex = (currentIndex - 1 + categories.length) % categories.length;
                setActiveCategory(categories[nextIndex]);
              }}
              className="w-10 h-10 rounded-full border border-stone-300 text-stone-600 flex items-center justify-center hover:bg-stone-900 hover:text-white transition cursor-pointer"
            >
              ←
            </button>
            <button
              aria-label="Next villa"
              onClick={() => {
                const currentIndex = categories.indexOf(activeCategory);
                const nextIndex = (currentIndex + 1) % categories.length;
                setActiveCategory(categories[nextIndex]);
              }}
              className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Asymmetrical 4-Card Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-start">
          {villas.map((villa) => {
            const isHighlighted = activeCategory === villa.category;
            return (
              <article
                key={villa.id}
                className={`group cursor-pointer transition-all duration-300 ${villa.offsetClass || ""} ${
                  isHighlighted ? "ring-2 ring-stone-900/10 rounded-[28px] p-2 bg-stone-100/50" : ""
                }`}
              >
                <div className="relative aspect-[3/4.4] overflow-hidden rounded-[24px] bg-stone-200 mb-4 shadow-sm">
                  <Image
                    src={villa.image}
                    alt={villa.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-stone-900">
                    {villa.number}
                  </span>
                </div>
                <div className="flex items-start justify-between px-1">
                  <div>
                    <p className="font-serif text-lg font-medium text-stone-900 group-hover:text-emerald-850 transition">
                      {villa.title}
                    </p>
                    <p className="text-xs text-stone-500 font-light mt-0.5">
                      {villa.location}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Slide Indicator */}
        <div className="flex justify-end items-center text-xs tracking-widest text-stone-400 font-medium">
          <span>{categories.indexOf(activeCategory) + 1} / 4 Curated Categories</span>
        </div>
      </section>

      {/* Split Feature Journey Section */}
      <section className="py-8 border-t border-stone-200/80" data-purpose="step-by-step-journey" id="journey">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Steps */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 font-medium mb-4">
                Cara Menikmati Liburan Impian
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-tight mb-4">
                Eksplorasi Santai Tanpa Ribet Bersama Amara
              </h2>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Lupakan booking rumit dan rencana yang melelahkan. Cukup pilih vila favorit, diskusikan preferensi pribadi dengan concierge kami, dan nikmati penyembuhan jiwa yang autentik.
              </p>
            </div>

            {/* Numbered Steps */}
            <div className="space-y-6 pt-2">
              {/* Step 1 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-stone-200/60">
                <span className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-semibold shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium text-stone-900">
                    Tentukan Vibe Villa Pilihan Anda
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light mt-1">
                    Pencinta matahari tebing laut, kabut hutan Ubud, atau arsitektur minimalis yang menenangkan. Kami siapkan semuanya.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/60 transition border border-transparent">
                <span className="w-7 h-7 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-xs font-semibold shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium text-stone-800">
                    Atur Tanggal, Butler Siap Menyambut
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light mt-1">
                    Floating breakfast, spa aromaterapi rempah lokal, hingga transfer helipad dapat dipersiapkan sebelum kedatangan.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/60 transition border border-transparent">
                <span className="w-7 h-7 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-xs font-semibold shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium text-stone-800">
                    Cus Berangkat &amp; Nikmati Ketenangan Total
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light mt-1">
                    Tinggalkan hiruk pikuk kota. Waktunya bernapas lega di pelukan alam tropis Bali yang magis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Mosaic Collage */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Floating Badge Top Left */}
              <div className="absolute -top-3 left-4 z-20 glass-nav border border-white/20 text-white text-[11px] px-3.5 py-1.5 rounded-full shadow-lg">
                ✨ 100+ Bali Vibes Terkurasi
              </div>

              {/* Mosaic Column 1 */}
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-300 shadow-md">
                  <Image
                    src="/images/mosaic-temple.jpg"
                    alt="Ancient Balinese temple and nature"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-stone-300 shadow-md">
                  <Image
                    src="/images/mosaic-water-temple.jpg"
                    alt="Lush green temple and serene water reflection"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Mosaic Column 2 */}
              <div className="space-y-4 pt-6">
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-stone-300 shadow-md">
                  <Image
                    src="/images/mosaic-ocean-cove.jpg"
                    alt="Turquoise ocean cove"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-stone-900/80 text-white backdrop-blur-xs">
                    100% Verified
                  </span>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-300 shadow-md">
                  <Image
                    src="/images/mosaic-pool-architecture.jpg"
                    alt="Modern tropical architecture with private infinity pool"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panoramic Ocean Banner Section */}
      <section
        className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[480px] sm:min-h-[540px] flex items-end p-6 sm:p-10 lg:p-14 shadow-xl"
        data-purpose="cinematic-ocean-break"
        id="ocean"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-ocean-panoramic.jpg"
            alt="Aerial drone view of pristine turquoise coastline waves"
            fill
            sizes="100vw"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 text-white">
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-white/20 text-emerald-300">
              Island Rhythm
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              Bali makin bikin rindu, <br className="hidden sm:block" />
              <span className="italic">kapan giliran Anda?</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-200/90 font-light max-w-md">
              Sunset hangat, debur ombak ritmis, dan kebebasan waktu yang seutuhnya milik Anda. Jangan cuma dipandangi dari layar gadget.
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-white/80 glass-card px-3.5 py-1.5 rounded-full border border-white/15">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  fillRule="evenodd"
                />
              </svg>
              <span>Kelingking Beach &amp; Uluwatu Cliffs</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/30 glass-card flex items-center justify-center text-xs font-medium text-white tracking-widest">
              01/05
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Journal Section */}
      <section className="space-y-8" data-purpose="journal-articles" id="journal">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-stone-200/80 pb-5">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400">
              The Sanctuary Gazette
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 tracking-tight mt-1">
              Baca 100+ Kisah &amp; Wawasan Terkini
            </h2>
          </div>
          <Link
            href="#journal"
            className="text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-stone-600 transition flex items-center gap-1.5"
          >
            Lihat Semua <span>↗</span>
          </Link>
        </div>

        {/* Journal Layout: 1 Hero Story Left, 3 Compact Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Big Featured Article (Left) */}
          <article className="lg:col-span-6 group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-stone-200 mb-5 shadow-sm">
              <Image
                src="/images/journal-misty-cliffs.jpg"
                alt="Misty cliffs and tranquil morning ocean"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900 text-white">
                  Lifestyle &amp; Healing
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 leading-snug group-hover:text-emerald-850 transition">
                Sruputtt! Ini Alasan Kenapa Menikmati Kopi Pagi di Bibir Tebing Bikin Hati Teduh
              </h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2">
                Kopi bukan sekadar biji hitam berkafein—tetapi momen sakral menyelaraskan napas dengan deburan air laut selatan yang tak pernah tergesa-gesa.
              </p>
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-stone-900 underline underline-offset-4 pt-1">
                Baca Selengkapnya
              </span>
            </div>
          </article>

          {/* 3 Horizontal Compact Articles (Right) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Compact Article 1 */}
            <article className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-white transition border border-transparent hover:border-stone-200/70 shadow-xs cursor-pointer">
              <div className="relative w-full sm:w-44 aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-stone-200">
                <Image
                  src="/images/journal-coffee-morning.jpg"
                  alt="Morning brewed coffee cup in tropical sanctuary"
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-950/70 text-white font-medium">
                  Culinary
                </span>
              </div>
              <div className="flex flex-col justify-center space-y-1.5">
                <h4 className="font-serif text-lg font-medium text-stone-900 leading-snug group-hover:text-emerald-850 transition">
                  Ngopi Dulu Duluuu Biar Nggak Salah Ambil Keputusan Hidup
                </h4>
                <p className="text-xs text-stone-500 font-light line-clamp-2">
                  Pagi-pagi otak belum nyala? Tenang, aroma roasted Arabika Kintamani siap menyelamatkan mood Anda dari surel kantor.
                </p>
                <span className="text-[11px] text-stone-400 font-medium">
                  4 min read • Curated Brew
                </span>
              </div>
            </article>

            {/* Compact Article 2 */}
            <article className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-white transition border border-transparent hover:border-stone-200/70 shadow-xs cursor-pointer">
              <div className="relative w-full sm:w-44 aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-stone-200">
                <Image
                  src="/images/journal-spa-herbal.jpg"
                  alt="Ayurvedic tropical herbal spa treatment"
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-950/70 text-white font-medium">
                  Wellness
                </span>
              </div>
              <div className="flex flex-col justify-center space-y-1.5">
                <h4 className="font-serif text-lg font-medium text-stone-900 leading-snug group-hover:text-emerald-850 transition">
                  Kenapa Rasa Kopi &amp; Rempah Herbal Selalu Bikin Rindu Kampung Halaman?
                </h4>
                <p className="text-xs text-stone-500 font-light line-clamp-2">
                  Ada kehangatan dari minyak kelapa virgin dan cengkeh pulau dewata yang tak tergantikan di penjuru dunia mana pun.
                </p>
                <span className="text-[11px] text-stone-400 font-medium">
                  6 min read • Ancient Herb
                </span>
              </div>
            </article>

            {/* Compact Article 3 */}
            <article className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl hover:bg-white transition border border-transparent hover:border-stone-200/70 shadow-xs cursor-pointer">
              <div className="relative w-full sm:w-44 aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-stone-200">
                <Image
                  src="/images/journal-waves-shore.jpg"
                  alt="Waves rolling over white sand shore"
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-2 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-950/70 text-white font-medium">
                  Retreat
                </span>
              </div>
              <div className="flex flex-col justify-center space-y-1.5">
                <h4 className="font-serif text-lg font-medium text-stone-900 leading-snug group-hover:text-emerald-850 transition">
                  Kopi, Senja, Repeat: Resep Bahagia Para Pejuang Deadline
                </h4>
                <p className="text-xs text-stone-500 font-light line-clamp-2">
                  Lelah mengejar target kuartal? Mungkin Anda tidak butuh motivasi baru, melainkan sekadar tidur nyenyak diiringi ombak.
                </p>
                <span className="text-[11px] text-stone-400 font-medium">
                  3 min read • Mindset
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter and Footer */}
      <footer className="border-t border-stone-200 pt-16 pb-8 space-y-16" data-purpose="site-footer" id="booking">
        {/* Newsletter / Booking Callout */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-400">
            NIKMATI RASA, BANGUN ASA
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
            Ingin Menikmati Ketenangan Amara?
          </h2>
          <p className="text-stone-500 text-sm font-light leading-relaxed max-w-md mx-auto">
            Izinkan tim concierge kami menyusun pengalaman istirahat terbaik untuk Anda dan keluarga tercinta.
          </p>
          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
            <Link
              href="#booking"
              className="px-8 py-3.5 rounded-full bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition active:scale-95 shadow-md"
            >
              Hubungi Concierge Kami
            </Link>
            <Link
              href="#booking"
              className="px-8 py-3.5 rounded-full border border-stone-300 text-stone-800 text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition"
            >
              Lihat Brosur Digital
            </Link>
          </div>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className="border-t border-stone-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-400 font-light">
          {/* Secondary Links */}
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-stone-700 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-stone-700 transition">
              Terms of Retreat
            </Link>
            <Link href="#" className="hover:text-stone-700 transition">
              Media &amp; Press Kit
            </Link>
          </div>

          {/* Copyright Note */}
          <p>© 2026 Amara Sanctuary Bali. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-stone-600">
            <Link
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition"
            >
              IG
            </Link>
            <Link
              href="#"
              aria-label="WhatsApp Concierge"
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition"
            >
              WA
            </Link>
            <Link
              href="#"
              aria-label="Spotify Retreat Playlist"
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition"
            >
              SP
            </Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
