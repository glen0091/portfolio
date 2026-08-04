"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Services() {
  return (
    <section
      id="services"
      className="border-border-subtle relative border-t py-24 md:py-32"
    >
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="section-label">Services</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            What I take on.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4, borderColor: "var(--accent-2)" }}
                transition={{ duration: 0.2 }}
                className="card-surface h-full rounded-xl p-6"
              >
                <h3 className="font-display text-base font-semibold">{service.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
