import { motion } from "framer-motion";
import { Bot, Brain, CircuitBoard, Workflow, Users, Layers } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { InteractiveServiceCard } from "./ui/InteractiveServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Robotic Assistants",
    desc: "Intelligent autonomous service robots and interactive kiosks designed for hospital assistance, customer service, hospitality, campus guidance, and public service operations.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    details: [
      "Hospital Reception & Patient Assistance Robots",
      "Customer Service & Information Kiosks",
      "Hospitality & Hotel Service Robots",
      "Educational & Campus Assistance Robots",
      "Industrial Robotic Helpers",
      "Public Information & Government Service Robots",
    ],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    desc: "State-of-the-art machine learning, deep learning, computer vision, voice recognition, and generative AI applications engineered to automate complex enterprise workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    details: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Voice AI & Speech Recognition",
      "Predictive Analytics",
      "AI Chatbots & Virtual Assistants",
      "Generative AI Applications",
    ],
  },
  {
    icon: CircuitBoard,
    title: "Robotics Engineering",
    desc: "End-to-end robotics hardware and software engineering, autonomous navigation, multi-sensor fusion, robotic control systems, and low-latency edge AI computing.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    details: [
      "Autonomous Navigation",
      "Sensor Fusion & Integration",
      "Robotic Control Systems",
      "Embedded AI Solutions",
      "Edge AI Computing",
    ],
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    desc: "Comprehensive smart automation solutions delivering operational efficiency across hospitals, warehouses, smart offices, and industrial inventory management.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    details: [
      "Hospital Automation",
      "Warehouse Automation",
      "Smart Office Solutions",
      "Industrial Automation",
      "Inventory Management",
    ],
  },
  {
    icon: Users,
    title: "Visitor & Queue Management Systems",
    desc: "Next-generation visitor check-in kiosks, digital queue orchestration, contactless registration, appointment booking, and real-time facility analytics.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    details: [
      "Self-Service Check-in Kiosks",
      "Digital Queue Management",
      "Real-Time Analytics & Tracking",
      "Appointment Scheduling",
      "Contactless Check-in & Registration",
    ],
  },
  {
    icon: Layers,
    title: "Technology Stack",
    desc: "Core deep-technology architecture powering our autonomous robotics, high-throughput neural models, and intelligent automated systems.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    details: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Voice AI",
    ],
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-transparent scroll-mt-20">
    <div className="container mx-auto max-w-7xl">
      <SectionTitle
        badge="Services"
        title="Our"
        gradientTitle="Services."
        description="Comprehensive technical capabilities designed to solve complex challenges and accelerate digital transformation."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="h-full"
          >
            <InteractiveServiceCard
              icon={s.icon}
              title={s.title}
              desc={s.desc}
              image={s.image}
              details={s.details}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
