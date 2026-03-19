"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Crown, Send, Shield, Sparkles, Star, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Luxe Studio"
          navItems={[
            { name: "Work", id: "showcase" },
            { name: "Services", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Elevate Your Brand Into the Extraordinary"
          description="We craft exclusive luxury experiences that transcend ordinary design. Our bespoke creative services transform ambitious brands into cultural icons."
          tag="Premium Design Studio"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Our Work", href: "#showcase" },
            { text: "Start Your Project", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199312.jpg"
          imageAlt="Luxury studio workspace"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          background={{ variant: "radial-gradient" }}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Philosophy"
          tagIcon={Award}
          tagAnimation="slide-up"
          title="Where Luxury Meets Innovation"
          description="We believe that exceptional design is the intersection of meticulous craftsmanship and visionary thinking. Every project is a masterpiece."
          subdescription="With over a decade of experience creating luxury brands, we understand that exclusivity isn't just aesthetic—it's a philosophy. We partner with only the most discerning clients to deliver work that commands attention and respect."
          icon={Crown}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-business-entrepreneur-answering-text-message-smartphone_482257-78118.jpg"
          imageAlt="Luxury creative studio"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Premium Services Tailored to Perfection"
          description="Each service is designed to elevate your brand presence and establish market dominance through sophisticated strategic execution."
          tag="Our Expertise"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          animationType="scale-rotate"
          carouselMode="buttons"
          features={[
            {
              id: "service-1",              title: "Luxury Brand Strategy",              description: "Strategic positioning and market analysis for brands seeking premium market dominance and cultural relevance.",              tag: "Strategy",              imageSrc: "http://img.b2bpic.net/free-psd/jewellery-template-design_23-2151573596.jpg",              imageAlt: "Brand strategy consultation"
            },
            {
              id: "service-2",              title: "Bespoke Digital Experiences",              description: "Meticulously crafted digital platforms that embody exclusivity and deliver seamless luxury user experiences.",              tag: "Digital",              imageSrc: "http://img.b2bpic.net/free-vector/home-furnitures-landing-page-tempalte_23-2148402689.jpg",              imageAlt: "Premium digital design"
            },
            {
              id: "service-3",              title: "Identity & Visual Systems",              description: "Comprehensive brand identity systems that establish visual supremacy and ensure consistent luxury positioning.",              tag: "Design",              imageSrc: "http://img.b2bpic.net/free-photo/people-hangout-together-coffee-shop_53876-42691.jpg",              imageAlt: "Luxury identity design"
            }
          ]}
        />
      </div>

      <div id="showcase" data-section="showcase">
        <ProductCardThree
          title="Featured Projects"
          description="A curated selection of our most prestigious brand transformations and luxury market campaigns."
          tag="Portfolio Highlights"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={true}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          carouselMode="buttons"
          products={[
            {
              id: "project-1",              name: "Elite Luxury Brand Launch",              price: "Strategy, Design, Digital",              imageSrc: "http://img.b2bpic.net/free-vector/geometric-gradient-shapes-covers-dark-background_23-2148429763.jpg",              imageAlt: "Luxury brand launch project"
            },
            {
              id: "project-2",              name: "Premium Digital Platform",              price: "Experience Design, Development",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-businesswomen-wearing-medical-masks_23-2148761347.jpg",              imageAlt: "Premium digital project"
            },
            {
              id: "project-3",              name: "Exclusive Brand Identity",              price: "Visual System, Guidelines",              imageSrc: "http://img.b2bpic.net/free-vector/business-card-editable-template-ocean-with-leaves-shadow-background_53876-113834.jpg",              imageAlt: "Brand identity project"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Partnering with the world's most prestigious and discerning brands."
          tag="Distinguished Clients"
          tagIcon={Shield}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Luxury Collective",            "Premium Markets",            "Elite Ventures",            "Exclusive Group",            "Heritage Brands",            "Crown Industries",            "Prestige Global",            "Pinnacle Corp"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/letter-s-luxury-brand-logo-concept-design_1055-13366.jpg",            "http://img.b2bpic.net/free-vector/set-ornamental-logos-vintage-style_23-2147593940.jpg",            "http://img.b2bpic.net/free-vector/premium-badge-golden-effect_1017-7894.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842742.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842743.jpg",            "http://img.b2bpic.net/free-vector/golden-elegant-logo-flat-style_52683-14904.jpg",            "http://img.b2bpic.net/free-vector/realistic-minimalist-business-card-template_23-2150364629.jpg",            "http://img.b2bpic.net/free-vector/dark-business-card-template-with-golden-details_79603-1138.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Their work transcends design. They delivered not just a brand refresh but a complete market repositioning that elevated our status in the luxury segment. Exceptional."
          rating={5}
          author="Alexandra Crown, CEO"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/modern-woman-sitting-couch_23-2148415752.jpg", alt: "Alexandra Crown" },
            { src: "http://img.b2bpic.net/free-photo/portrait-adult-businesswoman-posing_23-2148452676.jpg", alt: "James Mitchell" },
            { src: "http://img.b2bpic.net/free-photo/stock-photo-attractive-brunette-young-adult-woman-black-blouse-dark-green-trousers-posing-against-white-wall-with-many-lamps_132075-9648.jpg", alt: "Victoria Laurent" },
            { src: "http://img.b2bpic.net/free-photo/stylish-woman-escalator-looking-away_23-2148777551.jpg", alt: "Sebastian Grey" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Begin Your Journey"
          title="Become Part of Our Exclusive Circle"
          description="Let's discuss how we can elevate your brand into a luxury market leader. Our team works with only the most ambitious and visionary brands."
          tagIcon={Send}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="your@brand.com"
          buttonText="Request Consultation"
          termsText="By submitting, you agree to our exclusive partnership terms and privacy policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Studio",              items: [
                { label: "Our Work", href: "#showcase" },
                { label: "Services", href: "#features" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Email", href: "mailto:hello@luxestudio.com" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Luxe Studio. All rights reserved. Where excellence meets exclusivity."
        />
      </div>
    </ThemeProvider>
  );
}