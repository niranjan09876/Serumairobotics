export interface ProductSpec {
  parameter: string;
  specification: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface ProductSection {
  title: string;
  items: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  badge: string;
  detailLabel?: string;
  shortDescription: string;
  image: string;
  imageFit?: "cover" | "contain";
  imageSide?: "left" | "right";
  layout?: "standard" | "two-column" | "reference-panel";
  intro: string;
  sectionTitle?: string;
  sectionItems?: string[];
  additionalSections?: ProductSection[];
  specifications?: ProductSpec[];
  technologies?: string[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  functionalHighlights?: string[];
  useCasesTitle?: string;
  useCasesSubtitle?: string;
  useCases?: string[];
  benefits?: ProductBenefit[];
  ctaHeading?: string;
  ctaDescription?: string;
  customRoute?: string;
}

export const products: Product[] = [
  {
    id: "priya-ai-robot",
    slug: "priya-ai-robot-receptionist",
    title: "Priya AI Robot Receptionist in Hospitals",
    badge: "Healthcare Robotics",
    shortDescription:
      "Intelligent AI robotic receptionist designed for hospital front desks, delivering 24/7 visitor guidance, patient registration, and multilingual voice interaction.",
    image: "/priya-robot.jpg",
    imageFit: "cover",
    intro:
      "Priya is an intelligent AI-powered robotic receptionist designed to enhance hospital front-desk operations, improve patient and visitor experiences, and provide reliable assistance throughout the day. The system combines conversational AI, voice interaction, computer vision, and intelligent automation to support hospitals with efficient and human-friendly reception services.",
    specifications: [
      {
        parameter: "Robot Type",
        specification: "Static AI Robot Reception (Female Version)",
      },
      {
        parameter: "Height",
        specification: "Approx. 5 ft 6 in (167 cm)",
      },
      {
        parameter: "Weight",
        specification: "Approx. 20 kg",
      },
      {
        parameter: "Mobility",
        specification: "Static installation (non-walking); upper-body gestures and head movement",
      },
      {
        parameter: "Applications",
        specification: "Reception, guidance, information, patient assistance, visitor management",
      },
    ],
    technologies: [
      "AI conversational chatbot with multilingual support",
      "Natural language processing and conversational AI",
      "Speech recognition and text-to-speech",
      "Computer vision for visitor and face detection",
      "Cloud connectivity and remote system updates",
      "Intelligent hospital-system integration",
      "AI-powered information assistance",
    ],
    useCasesTitle: "Healthcare Use Cases",
    useCasesSubtitle: "Front-line hospital and clinic deployments",
    useCases: [
      "Patient registration guidance",
      "Appointment assistance",
      "Department navigation",
      "Hospital information assistance",
      "Visitor management",
      "Patient and visitor support",
      "Reception automation",
      "Frequently asked question handling",
    ],
    benefits: [
      {
        title: "Better Patient Experience",
        description: "Fast and friendly assistance for patients and visitors.",
      },
      {
        title: "Operational Efficiency",
        description: "Reduces repetitive workload for hospital reception staff.",
      },
      {
        title: "24/7 Availability",
        description: "Provides consistent information and assistance throughout the day.",
      },
      {
        title: "Smart & Secure",
        description: "Uses AI-powered interaction and secure system integration.",
      },
    ],
    ctaHeading: "Ready to deploy Priya in your healthcare facility?",
    ctaDescription:
      "Schedule a technical consultation with our AI robotics engineering team for on-site trial and EHR integration.",
  },
  {
    id: "police-ai-robot",
    slug: "police-ai-robot-receptionist",
    title: "Police AI Robot Receptionist",
    badge: "Government & Public Safety",
    shortDescription:
      "AI-powered robotic assistance designed to support police stations and government service centers with citizen guidance, information assistance, and reception automation.",
    image: "/police-robot.png",
    imageFit: "contain",
    intro:
      "The Police AI Robot Receptionist is an intelligent robotic assistant designed to modernize reception and citizen-support services in police stations and government facilities. It provides visitors with information, guidance, document assistance, and service support while helping staff handle routine enquiries more efficiently.",
    specifications: [
      {
        parameter: "Robot Type",
        specification: "Static AI Robot Receptionist – Female Version",
      },
      {
        parameter: "Height",
        specification: "Approx. 5 ft 6 in (167 cm)",
      },
      {
        parameter: "Weight",
        specification: "Approx. 20 kg",
      },
      {
        parameter: "Mobility",
        specification: "Static installation (non-walking); upper-body gestures and head movement",
      },
      {
        parameter: "Applications",
        specification: "Police reception, citizen guidance, information services, document guidance, visitor assistance",
      },
    ],
    technologies: [
      "AI conversational chatbot with multilingual support",
      "Natural language processing and conversational AI",
      "Speech recognition and text-to-speech",
      "Computer vision for visitor and face detection",
      "Cloud connectivity and remote updates",
      "Intelligent information retrieval",
      "Integration with police and government service systems",
      "Automated citizen-service assistance",
    ],
    useCasesTitle: "Police & Government Use Cases",
    useCasesSubtitle: "Front-desk guidance, citizen services, and emergency escalation",
    useCases: [
      "Complaint guidance",
      "Citizen information",
      "Document guidance",
      "Police station service information",
      "Women and senior citizen assistance",
      "Visitor assistance",
      "Department/service navigation",
      "Emergency escalation",
      "Government service guidance",
      "Frequently asked questions",
    ],
    benefits: [
      {
        title: "Faster Citizen Assistance",
        description: "Provides visitors with immediate information and guidance.",
      },
      {
        title: "Reduced Reception Workload",
        description: "Handles routine enquiries and repetitive information requests.",
      },
      {
        title: "Multilingual Interaction",
        description: "Supports communication with citizens across different languages.",
      },
      {
        title: "Improved Public Service",
        description: "Creates a more accessible and organized reception experience.",
      },
      {
        title: "Smart Government Integration",
        description: "Can connect with existing police and government information systems.",
      },
    ],
    ctaHeading: "Ready to deploy Police AI Robot Receptionist in your department?",
    ctaDescription:
      "Schedule a consultation with our AI robotics engineering team for pilot deployment and government system integration.",
  },
  {
    id: "ai-robot-assistant",
    slug: "ai-robot-assistant-hospitals",
    title: "AI Robot Assistant in Hospitals",
    badge: "Moving AI Assistant",
    detailLabel: "OUR PRODUCT",
    shortDescription:
      "A moving AI robot assistant designed to support hospitals with reception, patient guidance, information services, and day-to-day visitor assistance.",
    image: "/ai-robot-assistant.png",
    imageFit: "contain",
    layout: "two-column",
    intro:
      "A moving AI robot assistant designed to support hospitals with reception, patient guidance, information services, and day-to-day visitor assistance.",
    specifications: [
      {
        parameter: "Robot Type",
        specification: "Moving AI Robot Assistant",
      },
      {
        parameter: "Height",
        specification: "Approx. 5 ft 5 in (160 cm)",
      },
      {
        parameter: "Weight",
        specification: "Approx. 20 kg",
      },
      {
        parameter: "Mobility",
        specification:
          "Differential Drive (2 powered wheels + caster), Max Speed: 1–1.5 m/s, Turning Radius: 0° (turn in place), Payload: 5–10 kg",
      },
      {
        parameter: "Applications",
        specification:
          "Reception, guidance, information, citizen engagement, patient assistance",
      },
    ],
    technologies: [
      "AI conversational chatbot with multilingual support",
      "Empathetic AI for natural and respectful conversations",
      "Speech recognition and text-to-speech",
      "Computer vision for face and visitor detection",
      "Cloud connectivity, analytics and remote updates",
      "Integration with hospital, police and enterprise systems",
    ],
    useCasesTitle: "Healthcare Use Cases",
    useCasesSubtitle: "Autonomous floor navigation and hospital assistance",
    useCases: [
      "Patient registration guidance",
      "Appointment assistance",
      "Department navigation",
      "Health information",
      "Visitor management",
    ],
    benefits: [
      {
        title: "Autonomous Floor Mobility",
        description:
          "Differential drive with 0° turning radius provides agile navigation across crowded clinic corridors.",
      },
      {
        title: "Empathetic Patient Interaction",
        description:
          "Natural conversational AI with emotional intelligence delivers respectful, comforting care to visitors.",
      },
      {
        title: "Reception & Workload Relief",
        description:
          "Relieves front-desk medical staff by answering repetitive queries, guiding visitors, and handling check-ins.",
      },
      {
        title: "Enterprise Systems Sync",
        description:
          "Connects with hospital EHR, appointment queues, and campus security for synchronized operational flow.",
      },
    ],
    ctaHeading: "Ready to deploy the AI Robot Assistant in your hospital?",
    ctaDescription:
      "Schedule a demonstration with our robotics engineering team for autonomous hospital mapping, fleet trial, and EHR integration.",
  },
  {
    id: "ai-buddy-robot",
    slug: "ai-buddy-robot",
    title: "AI Buddy Robot",
    badge: "AI Companion",
    detailLabel: "OUR PRODUCT",
    shortDescription:
      "A compact AI-powered companion robot designed for children, learning, interaction, entertainment, and emotional companionship.",
    image: "/ai-buddy-robot.jpg",
    imageFit: "cover",
    layout: "two-column",
    intro:
      "A compact AI-powered companion robot designed for children, learning, interaction, entertainment, and emotional companionship.",
    specifications: [
      {
        parameter: "Robot Type",
        specification: "Moving AI Buddy Robot",
      },
      {
        parameter: "Height",
        specification: "Approx. 2 ft (60 cm)",
      },
      {
        parameter: "Weight",
        specification: "Approx. 5 kg",
      },
      {
        parameter: "Mobility",
        specification:
          "Differential Drive (2 powered wheels + caster), Max Speed: 0.3–0.5 m/s, Turning Radius: 360° (turn in place)",
      },
      {
        parameter: "Display",
        specification: "8–10 inch OLED/LCD face",
      },
      {
        parameter: "Interaction",
        specification:
          "Animated eyes, different facial expressions, sleep animation, Happy/Sad/Thinking modes",
      },
    ],
    featuresTitle: "Key Features",
    featuresSubtitle: "A Safe AI-Powered Buddy Robot",
    technologies: [
      "Talk naturally with children",
      "Tell stories",
      "Teach languages, math, and science",
      "Answer questions",
      "Dance and sing",
      "Express emotions through eyes and lights",
      "Act as a learning and emotional companion",
      "Can be controlled by parents through an app",
    ],
    functionalHighlights: [
      "HD Camera & Microphone Array",
      "Smooth 360° Movement",
      "High Quality Speaker for Clear Sound",
      "Long Battery Life (8–12 Hours)",
      "Touch Sensors on Head, Hands & Chest",
      "Auto Dock Charging",
    ],
    benefits: [
      {
        title: "Interactive Learning",
        description:
          "Engages children with interactive lessons across STEM, languages, and general knowledge.",
      },
      {
        title: "Emotional Companionship",
        description:
          "Fosters connection through empathetic animations, expressions, and heartwarming storytelling.",
      },
      {
        title: "Parental Peace of Mind",
        description:
          "Controlled safely through a parent companion app with customizable limits and privacy safeguards.",
      },
      {
        title: "Autonomous Navigation",
        description:
          "Smooth 360° movement, obstacle-avoidance wheels, and auto-dock charging for effortless companionship.",
      },
    ],
    ctaHeading: "Ready to welcome AI Buddy Robot into your family or learning center?",
    ctaDescription:
      "Connect with our educational robotics specialists to explore curriculum packs, home delivery, and early access opportunities.",
  },
  {
    id: "airport-ai-robot",
    slug: "airport-ai-robot-assistant",
    title: "Airport AI Robot Assistant",
    badge: "Aviation & Transport",
    image: "/airport-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at airports can enhance passenger services, improve operational efficiency, strengthen safety, and assist airport staff.",
    intro:
      "An AI Robot Assistant at airports can enhance passenger services, improve operational efficiency, strengthen safety, and assist airport staff. These robots are designed to support—not replace—airport personnel, airline staff, security officers, customs officials, and emergency responders.",
    sectionTitle: "Welcome & Information Robot",
    sectionItems: [
      "Welcome passengers",
      "Flight information",
      "Boarding gate directions",
      "Terminal maps",
      "Airport announcements",
      "Weather updates",
      "Airline information",
      "Visa and travel guidance (general information only)",
      "Indoor navigation",
      "Gate directions",
      "Lounge locations",
      "Restaurants and cafés",
      "Duty-free shops",
      "Restrooms",
      "Prayer rooms",
      "Charging stations",
    ],
    ctaHeading: "Ready to deploy Airport AI Robot Assistant in your terminal?",
    ctaDescription:
      "Schedule a technical consultation with our aviation robotics team for airport mapping, flight integration, and terminal pilot trials.",
  },
  {
    id: "banks-ai-robot",
    slug: "banks-ai-robot-assistant",
    title: "Banks AI Robot Assistant",
    badge: "Financial Services",
    image: "/bank-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at banks can enhance customer service, streamline routine banking operations, improve accessibility, and assist bank employees.",
    intro:
      "An AI Robot Assistant at banks can enhance customer service, streamline routine banking operations, improve accessibility, and assist bank employees. These robots should support customers with information and transactions while ensuring that regulated financial decisions and approvals remain under the supervision of authorized bank personnel.",
    sectionTitle: "Customer Service Robot",
    sectionItems: [
      "Guide them to the correct counter",
      "Explain banking services",
      "Display token numbers and queue information",
      "Provide branch timings",
      "Explain available digital banking options",
      "Support multiple languages",
      "Account opening guidance",
      "Debit and credit card information",
      "Fixed deposit and recurring deposit information",
      "Loan product information",
      "Insurance product information",
      "Pension scheme information",
      "KYC document guidance",
      "Cheque deposit instructions",
      "Passbook update guidance",
    ],
    ctaHeading: "Ready to deploy Banks AI Robot Assistant in your branches?",
    ctaDescription:
      "Schedule a consultation with our financial robotics specialists for core banking integration and branch customer experience enhancement.",
  },
  {
    id: "hospitals-ai-robot",
    slug: "hospitals-ai-robot-assistant",
    title: "Hospitals AI Robot Assistant",
    badge: "Healthcare Robotics",
    image: "/hospital-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "Develop an intelligent AI-powered robotic ecosystem that assists healthcare professionals, enhances patient care, automates hospital operations, and enables predictive healthcare.",
    intro:
      "Develop an intelligent AI-powered robotic ecosystem that assists healthcare professionals, enhances patient care, automates hospital operations, and enables predictive healthcare.",
    sectionTitle: "Reception AI Robot",
    sectionItems: [
      "Patient registration",
      "Appointment booking",
      "Multi-language communication",
      "Queue management",
      "Hospital navigation",
      "Insurance verification",
      "Digital payment assistance",
      "Computer Vision",
      "Speech Recognition",
      "NLP",
      "Face Recognition (where legally permitted)",
      "OCR",
      "Vital sign monitoring",
      "ECG interpretation",
      "AI-assisted X-ray analysis",
      "CT scan analysis",
      "MRI support",
      "Ultrasound assistance",
      "Pathology screening",
    ],
    ctaHeading: "Ready to deploy Hospitals AI Robot Assistant in your clinical network?",
    ctaDescription:
      "Schedule a consultation with our medical robotics engineering team for EHR integration and clinical assistant pilot trials.",
  },
  {
    id: "metro-station-ai-robot",
    slug: "metro-station-ai-robot-assistant",
    title: "Metro Station AI Robot Assistant",
    badge: "Urban Transit Robotics",
    image: "/metro-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at Metro Stations can improve passenger convenience, accessibility, safety, and operational efficiency.",
    intro:
      "An AI Robot Assistant at Metro Stations can improve passenger convenience, accessibility, safety, and operational efficiency. These robots assist commuters with information, navigation, and emergency support while complementing metro staff, security personnel, and station operators.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Display train arrival times",
      "Show platform information",
      "Explain metro routes",
      "Fare information",
      "Service announcements",
      "Metro map guidance",
      "Tourist information",
      "Guide passengers through ticket purchase",
      "Assist with QR code and smart card usage",
      "Explain recharge procedures",
      "Help with digital payments",
      "Guide passengers to ticket vending machines",
      "Provide fare calculation assistance",
    ],
    ctaHeading: "Ready to deploy Metro Station AI Robot Assistant across your transit network?",
    ctaDescription:
      "Schedule a consultation with our public transit robotics engineering team for station trials and commuter service integration.",
  },
  {
    id: "railway-station-ai-robot",
    slug: "railway-station-ai-robot-assistant",
    title: "Railway Station AI Robot Assistant",
    badge: "Rail Transit Robotics",
    image: "/railway-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at railway stations can improve passenger services, station operations, safety, accessibility, and crowd management.",
    intro:
      "An AI Robot Assistant at railway stations can improve passenger services, station operations, safety, accessibility, and crowd management. It is designed to assist passengers and railway staff, while operational decisions, security actions, and train control remain with authorized railway personnel.",
    sectionTitle: "Reception AI Robot",
    sectionItems: [
      "Enhances passenger experience",
      "Reduces waiting time",
      "Improves safety and security",
      "Supports elderly and differently abled passengers",
      "Provides multilingual assistance",
      "Enables smart station operations",
      "Provides train schedules",
      "Platform information",
      "Coach position guidance",
      "Delay and cancellation updates",
      "Station maps",
      "Fare information",
      "Tourism information",
    ],
    additionalSections: [
      {
        title: "AI Robot Guidance",
        items: [
          "Guide passengers through ticket booking",
          "Explain ticket cancellation procedures",
          "Assist with platform ticket purchases",
          "Help with reservation inquiries",
          "Explain digital payment options",
          "Guide passengers to ticket counters and kiosks",
          "Platform navigation",
          "Coach position assistance",
          "Exit guidance",
          "Waiting room directions",
          "Food court locations",
          "Restroom locations",
          "Cloakroom guidance",
          "Parking guidance",
          "Lift and escalator directions",
          "Metro and bus connectivity",
        ],
      },
    ],
    ctaHeading: "Ready to deploy Railway Station AI Robot Assistant in your stations?",
    ctaDescription:
      "Schedule a consultation with our public transit robotics engineering team for station trials, passenger flow mapping, and railway systems integration.",
  },
  {
    id: "bus-terminal-ai-robot",
    slug: "bus-terminal-ai-robot-assistant",
    title: "Bus Terminal AI Robot Assistant",
    badge: "Public Bus Transit",
    image: "/bus-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at Bus Terminals can improve passenger services, streamline terminal operations, enhance safety, and support staff by providing real-time information, navigation, and accessibility assistance.",
    intro:
      "An AI Robot Assistant at Bus Terminals can improve passenger services, streamline terminal operations, enhance safety, and support staff by providing real-time information, navigation, and accessibility assistance. These robots complement terminal staff, drivers, and security personnel while leaving operational and safety-critical decisions to authorized human personnel.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Provides multilingual assistance",
      "Display bus schedules",
      "Platform or bay information",
      "Boarding gate guidance",
      "Delay and cancellation updates",
      "Fare information",
      "Route information",
      "Tourist and city information",
      "Assist with ticket booking",
      "Guide passengers on QR ticket usage",
      "Reservation enquiries",
      "Refund and cancellation guidance",
      "Route and fare calculation",
    ],
    ctaHeading: "Ready to deploy Bus Terminal AI Robot Assistant across your transit network?",
    ctaDescription:
      "Schedule a technical consultation with our transit automation specialists for bus terminal mapping and route information integration.",
  },
  {
    id: "government-offices-ai-robot",
    slug: "government-offices-ai-robot-assistant",
    title: "Government Offices AI Robot Assistant",
    badge: "Public Sector & Governance",
    image: "/gov-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "For a Government Offices AI Robot Assistant, the creative direction should communicate trust, efficiency, accessibility, and professionalism rather than a futuristic sci-fi feel.",
    intro:
      "For a Government Offices AI Robot Assistant, the creative direction should communicate trust, efficiency, accessibility, and professionalism rather than a futuristic sci-fi feel. The robot should appear as a calm, official public service assistant that citizens immediately feel comfortable approaching.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Multilingual conversations",
      "Guides visitors to the correct department",
      "Appointment assistance",
      "Form guidance",
      "Queue management",
      "Document checklist",
      "Visitor registration",
      "Information about government schemes",
      "Accessibility support for elderly and differently abled citizens",
      "Modern government office with clean architecture",
      "Soft natural lighting",
      "Professional employees in the background",
      "Citizens of different ages and backgrounds",
      "Minimal, uncluttered environment",
    ],
    ctaHeading: "Ready to deploy Government Offices AI Robot Assistant in your administrative centers?",
    ctaDescription:
      "Schedule a consultation with our civic robotics specialists for citizen service automation and government portal integration.",
  },
  {
    id: "smart-police-station-ai-robot",
    slug: "smart-police-station-ai-robot-assistant",
    title: "Smart Police Station AI Robot Assistant",
    badge: "Law Enforcement & Public Safety",
    image: "/police-station-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant in a smart police station can help officers with routine administrative tasks while providing citizens with faster access to information and services.",
    intro:
      "An AI Robot Assistant in a smart police station can help officers with routine administrative tasks while providing citizens with faster access to information and services. It can improve efficiency, accessibility, and situational awareness, but decisions involving arrests, investigations, legal judgments, or the use of force should remain with authorized police personnel.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Guide citizens to the correct service counter",
      "Explain required documents",
      "Assist with appointment scheduling",
      "Support multiple languages",
      "General information about procedures",
      "Lost-and-found reporting",
      "Guidance for obtaining police clearances or certificates",
      "Women's and child helpline information",
      "Senior citizen support information",
    ],
    ctaHeading: "Ready to deploy Smart Police Station AI Robot Assistant in your police department?",
    ctaDescription:
      "Schedule a demonstration with our public safety robotics team for precinct deployment, citizen service kiosk setup, and secure department integration.",
  },
  {
    id: "elderly-care-companion-ai-robot",
    slug: "elderly-care-companion-ai-robot-assistant",
    title: "Elderly Care & Companion AI Robot Assistant",
    badge: "Elderly Care & Assisted Living",
    image: "/elderly-care-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant for Elderly Care is designed to help older adults live safely, independently, and with greater social connection.",
    intro:
      "An AI Robot Assistant for Elderly Care is designed to help older adults live safely, independently, and with greater social connection. It can support caregivers and healthcare professionals by providing reminders, monitoring well-being, assisting with daily routines, and enabling communication with family members. It should complement—not replace—human caregivers and medical professionals.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Supports independent living",
      "Improves physical and emotional well-being",
      "Enhances safety at home",
      "Assists with healthcare monitoring",
      "Reduces loneliness through meaningful interaction",
      "Connects seniors with family, caregivers, and healthcare providers",
    ],
    ctaHeading: "Ready to introduce Elderly Care & Companion AI Robot Assistant to your assisted living community?",
    ctaDescription:
      "Schedule a demonstration with our eldercare robotics specialists for senior home pilots, caregiver dashboard setup, and family connectivity features.",
  },
  {
    id: "neonatal-care-ai-robot",
    slug: "neonatal-care-ai-robot-assistant",
    title: "Neonatal Care AI Robot Assistant",
    badge: "Pediatric & Neonatal AI",
    image: "/neonatal-care-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant in neonatal care is designed to support neonatologists, nurses, and parents by monitoring newborns, organizing clinical information, assisting with routine tasks, and improving care coordination.",
    intro:
      "An AI Robot Assistant in neonatal care is designed to support neonatologists, nurses, and parents by monitoring newborns, organizing clinical information, assisting with routine tasks, and improving care coordination. The robot does not replace medical professionals or make independent treatment decisions.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Supports premature and critically ill newborns",
      "Assists NICU staff",
      "Enables continuous monitoring",
      "Improves patient safety",
      "Reduces clinician workload",
      "Provides parents with education and updates",
      "Heart rate",
      "Respiratory rate",
      "Oxygen saturation (SpO₂)",
      "Body temperature",
      "Blood pressure (where applicable)",
      "Weight trends",
      "Sleep patterns",
      "Movement activity",
    ],
    ctaHeading: "Ready to introduce Neonatal Care AI Robot Assistant in your NICU?",
    ctaDescription:
      "Schedule a technical consultation with our clinical engineering specialists for infant monitoring protocols, incubator integration, and NICU pilot trials.",
  },
  {
    id: "university-ai-robot",
    slug: "university-ai-robot-assistant",
    title: "University AI Robot Assistant",
    badge: "Higher Education & Campus",
    image: "/university-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at a University can improve learning, student support, campus operations, research collaboration, and accessibility.",
    intro:
      "An AI Robot Assistant at a University can improve learning, student support, campus operations, research collaboration, and accessibility. These robots assist students, faculty, researchers, visitors, and administrators.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Supports faculty and researchers",
      "Promotes innovation and research",
      "Creates a smart, connected campus",
      "Campus navigation",
      "Department information",
      "Admission guidance",
      "Academic calendar information",
      "Event schedules",
      "Hostel information",
      "Explaining course structures",
      "Providing timetable information",
      "Assignment reminders",
      "Exam schedules",
      "Learning resource recommendations",
      "Frequently asked academic questions",
      "Language translation for international students",
    ],
    ctaHeading: "Ready to deploy University AI Robot Assistant across your campus?",
    ctaDescription:
      "Schedule a consultation with our educational robotics specialists for campus mapping, student portal integration, and multi-department pilot trials.",
  },
  {
    id: "pilgrimages-ai-robot",
    slug: "pilgrimages-ai-robot-assistant",
    title: "Pilgrimages AI Robot Assistant",
    badge: "Pilgrimage & Sacred Sites",
    image: "/pilgrimages-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "AI-powered robots can enhance pilgrim safety, accessibility, and visitor experience while respecting religious practices.",
    intro:
      "AI-powered robots can enhance pilgrim safety, accessibility, and visitor experience while respecting religious practices and ensuring that spiritual guidance remains under the authority of religious institutions and human leaders.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Reduce waiting times",
      "Provide multilingual assistance",
      "Support elderly and differently abled visitors",
      "Manage crowds intelligently",
      "Enhance cleanliness and emergency response",
      "Deliver educational information about the site's history, architecture, and traditions",
      "Provides directions",
      "Explains temple/church/mosque/gurudwara layout",
      "Gives schedules for prayers, rituals, and events",
      "Helps locate amenities (restrooms, water, cloakrooms, exits)",
      "Live queue monitoring",
      "Crowd density estimation",
      "Waiting-time prediction",
      "Suggests less crowded routes",
      "Coordinates with digital token systems",
      "Priority support for senior citizens and persons with disabilities where permitted",
    ],
    ctaHeading: "Ready to introduce Pilgrimages AI Robot Assistant at your sacred destination?",
    ctaDescription:
      "Schedule a technical consultation with our civic robotics team for heritage site mapping, multilingual setup, and respectful pilgrim service trials.",
  },
  {
    id: "shopping-mall-ai-robot",
    slug: "shopping-mall-ai-robot-assistant",
    title: "Shopping Mall AI Robot Assistant",
    badge: "Retail & Shopping Centers",
    image: "/shopping-mall-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at Shopping Malls can improve customer experience, assist retailers, enhance security, and streamline mall operations.",
    intro:
      "An AI Robot Assistant at Shopping Malls can improve customer experience, assist retailers, enhance security, and streamline mall operations. These robots help shoppers with navigation, product information, promotions, accessibility, and emergency support while complementing mall staff and security personnel.",
    sectionTitle: "Reception AI Robot",
    sectionItems: [
      "Provide mall directory",
      "Locate stores",
      "Explain ongoing promotions",
      "Display event schedules",
      "Offer multilingual assistance",
      "Share mall operating hours",
      "Locate products and brands",
      "Compare product features",
      "Suggest complementary products",
      "Recommend offers and discounts",
      "Help create shopping lists",
      "Guide customers to stores",
      "Provide digital catalog information",
      "Indoor navigation",
      "Floor maps",
      "Escalator and elevator guidance",
      "Restroom locations",
      "ATM guidance",
      "Food court directions",
      "Cinema locations",
      "Children's play area",
      "Parking guidance",
      "Exit routes",
      "Lost and found assistance",
      "Gift wrapping information",
      "Event registration",
      "Customer feedback collection",
      "Store timing information",
      "Membership assistance",
      "Voice-guided navigation",
      "Wheelchair route guidance",
      "Sign-language capable display",
      "Assistance requests to mall staff",
      "High-contrast display mode",
    ],
    ctaHeading: "Ready to deploy Shopping Mall AI Robot Assistant across your retail destination?",
    ctaDescription:
      "Schedule a consultation with our commercial retail robotics team for store mapping, directory integration, and shopper concierge pilots.",
  },
  {
    id: "museum-mall-ai-robot",
    slug: "museum-mall-ai-robot-assistant",
    title: "Museum Mall AI Robot Assistant",
    badge: "Culture & Museums",
    image: "/museum-mall-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at a Museum is an intelligent humanoid or mobile robotic guide that enhances the visitor experience by providing interactive tours.",
    intro:
      "An AI Robot Assistant at a Museum is an intelligent humanoid or mobile robotic guide that enhances the visitor experience by providing interactive tours, answering questions, translating information, assisting with navigation, and making museums more engaging and accessible.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Improve visitor engagement and learning.",
      "Provide multilingual assistance.",
      "Reduce waiting time for information.",
      "Offer personalized museum tours.",
      "Enhance accessibility for children, elderly visitors, and people with disabilities.",
      "Support museum staff with routine visitor services.",
      "Greets visitors upon entry.",
      "Provides museum overview.",
      "Explains ticket categories.",
      "Displays museum timings.",
      "Indoor GPS-based navigation.",
      "Interactive digital museum map.",
    ],
    ctaHeading: "Ready to introduce Museum Mall AI Robot Assistant at your exhibition venue?",
    ctaDescription:
      "Connect with our museum technology specialists for curatorial tour programming, gallery mapping, and interactive visitor trial deployments.",
  },
  {
    id: "library-mall-ai-robot",
    slug: "library-mall-ai-robot-assistant",
    title: "Library Mall AI Robot Assistant",
    badge: "Libraries & Education",
    image: "/library-mall-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at a Library is an intelligent humanoid or autonomous mobile robot that helps visitors locate books and access digital resources.",
    intro:
      "An AI Robot Assistant at a Library is an intelligent humanoid or autonomous mobile robot that helps visitors locate books, access digital resources, answer questions, provide personalized recommendations, and support library operations. It serves as an interactive guide, librarian assistant, and educational companion.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Explains library services and membership.",
      "Provides library rules and opening hours.",
      "Gives information about events and workshops.",
      "Assists first-time visitors.",
      "Search the library catalog.",
      "Check book availability.",
      "Display shelf location.",
      "Reserve books.",
      "Suggest similar titles.",
      "Provide e-book alternatives.",
      "Guides users to book shelves.",
      "Searches research databases.",
      "Opens digital journals.",
    ],
    ctaHeading: "Ready to introduce Library Mall AI Robot Assistant in your library system?",
    ctaDescription:
      "Schedule a demonstration with our library automation specialists for catalog integration, shelf navigation, and digital resource access.",
  },
  {
    id: "convention-centre-ai-robot",
    slug: "convention-centre-ai-robot-assistant",
    title: "Convention Centre AI Robot Assistant",
    badge: "Conventions & Expos",
    image: "/convention-centre-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "A Convention Center AI Robot Assistant can become the first point of contact for visitors, exhibitors, speakers, and VIP guests.",
    intro:
      "A Convention Center AI Robot Assistant can become the first point of contact for visitors, exhibitors, speakers, and VIP guests. The concept should feel premium, efficient, and welcoming—like a concierge at a five-star venue.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Event registration and check-in",
      "Hall and booth navigation",
      "Session schedules",
      "Speaker information",
      "Meeting room directions",
      "Live event updates",
      "Lost & found assistance",
      "Food court and restroom directions",
      "Emergency guidance",
      "Multilingual visitor assistance",
      "QR code scanning for tickets",
      "Printing visitor badges (if integrated)",
      "Venue maps and navigation",
    ],
    ctaHeading: "Ready to deploy Convention Centre AI Robot Assistant at your venue?",
    ctaDescription:
      "Schedule a technical consultation with our event robotics team for venue mapping, badge scanning integration, and expo trial operations.",
  },
  {
    id: "tourism-place-ai-robot",
    slug: "tourism-place-ai-robot-assistant",
    title: "Tourism Place AI Robot Assistant",
    badge: "Tourism & Cultural Heritage",
    image: "/tourism-place-robot.png",
    imageSide: "right",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant at tourism and historical sites can enhance visitor experiences by providing multilingual guidance, interactive storytelling, navigation, accessibility support, and real-time safety information, while helping preserve and promote cultural heritage.",
    intro:
      "An AI Robot Assistant at tourism and historical sites can enhance visitor experiences by providing multilingual guidance, interactive storytelling, navigation, accessibility support, and real-time safety information, while helping preserve and promote cultural heritage.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Share site rules",
      "Recommend nearby attractions",
      "Provide weather updates",
      "Explain the history of monuments",
      "Narrate stories about kings, queens, freedom fighters, and historical events",
      "Describe architecture and engineering",
      "Explain sculptures, paintings, and artifacts",
      "Present archaeological discoveries",
      "Offer interactive question-and-answer sessions",
      "Indoor/outdoor navigation",
      "Suggest optimized walking routes",
      "Locate museums, galleries, cafés, restrooms, and exits",
      "Guide visitors to accessible paths",
    ],
    ctaHeading: "Ready to introduce Tourism Place AI Robot Assistant at your heritage destination?",
    ctaDescription:
      "Schedule a technical consultation with our tourism robotics specialists for historical site mapping, audio-visual storytelling setup, and visitor guide pilot trials.",
  },
  {
    id: "smart-city-ai-robot",
    slug: "smart-city-ai-robot-assistant",
    title: "Smart City AI Robot Assistant",
    badge: "Smart City & Citizen Services",
    image: "/smart-city-robot.png",
    imageSide: "left",
    layout: "reference-panel",
    shortDescription:
      "An AI Robot Assistant for Smart City Information Kiosks serves as a 24×7 digital citizen assistant, providing real-time information, public services, emergency assistance, tourism guidance, and multilingual support.",
    intro:
      "An AI Robot Assistant for Smart City Information Kiosks serves as a 24×7 digital citizen assistant, providing real-time information, public services, emergency assistance, tourism guidance, and multilingual support. These AI robots act as the public interface of a Smart City, connecting citizens and visitors to government departments, healthcare, transportation, emergency services, and local businesses.",
    sectionTitle: "AI Robot Assistant",
    sectionItems: [
      "Historical monument details",
      "Hotel recommendations",
      "Restaurant suggestions",
      "Local shopping guidance",
      "Cultural events",
      "Museum information",
      "Festival schedules",
      "Audio-guided city tours",
      "Multilingual tourist assistance",
    ],
    ctaHeading: "Ready to deploy Smart City AI Robot Assistant across your municipality?",
    ctaDescription:
      "Schedule a demonstration with our urban automation specialists for citizen service portal integration, municipal kiosk setup, and public deployment trials.",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug || p.id === slug);
};
