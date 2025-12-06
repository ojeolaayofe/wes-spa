"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const services = [
    {
      title: "Facials & Skincare",
      description: "Professional facial treatments customized to your skin type",
      image: "/spa-facial-treatment-skincare.jpg",
    },
    {
      title: "Mobile Spa Services",
      description: "Premium spa treatments delivered to your home or location",
      image: "/mobile-spa-massage-therapy.jpg",
    },
    {
      title: "Body Treatments",
      description: "Luxurious body massages and wellness treatments",
      image: "/spa-body-massage-treatment.jpg",
    },
    {
      title: "Beauty Enhancements",
      description: "Aesthetic services including lashes, nails, and more",
      image: "/beauty-salon-aesthetics-services.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/luxury-spa-aesthetic-background-serene-wellness.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
            <img src="/images/mine.jpeg" alt="Wees Aesthetics & Spa Logo" className="h-24 w-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance leading-tight text-primary">
            Wees Aesthetics & Mobile Spa
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Elevate your wellness journey with our premium aesthetic and spa services. Experience luxury, relaxation,
            and rejuvenation like never before.
          </p>

          <a
  href="https://wa.me/2349037537031"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
    Book An Appointment
  </button>
</a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Indulge in a curated selection of premium aesthetic and spa treatments designed for your wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(service.image)}>
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/spa-therapist-professional-aesthetician-luxury.jpg"
                alt="About Wees Aesthetics"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary">About Wees Aesthetics</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                At Wees Aesthetics & Mobile Spa, we believe that true beauty radiates from within a state of complete
                relaxation and self-care. Our team of certified professionals is dedicated to providing exceptional,
                personalized treatments tailored to your unique needs.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                With our innovative mobile spa service, we bring the spa experience directly to you. Whether you're at
                home or your preferred location, we deliver the same premium quality and attention to detail that
                defines our brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Certified and professional therapists</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Premium quality products only</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>Personalized treatment plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-primary">Get In Touch</h2>
            <p className="text-foreground/70 text-lg">Connect with us and start your wellness journey today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-foreground/70">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/70">hello@weesaesthetics.com</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-foreground/70">Serving your area & beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Media */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 mb-8">
            <div className="flex justify-center gap-6">
              <a
                href="https://share.google/4sk6j079TuX9lQwdQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Google"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.85 4.05-1.27 1.45-3.25 2.417-6.84 2.417-5.42 0-9.92-4.48-9.92-9.92s4.48-9.92 9.92-9.92c2.84 0 5.29.94 7.12 2.73l2.45-2.45C19.27 2.75 16.25 0 12.48 0 6.62 0 1.6 5.05 1.6 10.98s5.02 10.98 10.88 10.98c3.24 0 6.33-1.08 8.48-3 1.84-1.66 3.18-4.12 3.48-7.84h-11.16z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/p/Wees-Aesthetics-and-Spa-61555558817210/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/wees_mobile_spa1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@wees.aesthetics.a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-2.3A2.4 2.4 0 0 1 9.1 13.66V9.58a6.8 6.8 0 0 0-6.8 6.78 6.8 6.8 0 0 0 6.8 6.78 6.8 6.8 0 0 0 6.8-6.8V8.56a8.58 8.58 0 0 0 5.29 1.94V6.92a4.84 4.84 0 0 1-3.77-1.23Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center border-t border-primary-foreground/20 pt-8">
            <p className="text-sm">
              © 2025 Wees Aesthetics & Mobile Spa. All rights reserved. Indulge in luxury, embrace wellness.
            </p>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Expanded service image"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-full hover:opacity-80 transition-opacity"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
