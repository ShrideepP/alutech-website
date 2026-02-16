import {
  TargetIcon,
  BlueprintIcon,
  ScrewdriverIcon,
  ShieldCheckIcon,
  CloudRainIcon,
  WrenchIcon,
  FrameCornersIcon,
  HouseSimpleIcon,
  BuildingsIcon,
  BuildingOfficeIcon,
  FactoryIcon,
} from "@phosphor-icons/react/ssr";

export const landingPageContent = {
  hero: {
    badge: "// Aluminium Windows & Doors Belagavi",
    description:
      "Precision-engineered solutions designed for strength, performance, and modern architecture.",
    cta: {
      label: "WhatsApp Us",
      href: "https://wa.me/919071573153",
    },
  },

  whyAlutech: {
    badge: "// Why Alutech",
    features: [
      {
        icon: TargetIcon,
        title: "Precision Engineering",
        description:
          "Engineered aluminium systems delivering long-term durability, precise performance, and consistent quality across residential and commercial projects.",
      },
      {
        icon: BlueprintIcon,
        title: "Custom System Solutions",
        description:
          "Custom-built solutions designed to match architectural intent while meeting functional requirements, site conditions, and project timelines.",
      },
      {
        icon: ScrewdriverIcon,
        title: "End-to-End Execution",
        description:
          "Experienced teams manage fabrication and installation with accuracy, coordination, and accountability from initial consultation to handover.",
      },
      {
        icon: ShieldCheckIcon,
        title: "Proven Material Quality",
        description:
          "Premium materials and tested systems ensure weather resistance, thermal efficiency, and low maintenance throughout product lifespan.",
      },
    ],
  },

  products: {
    badge: "// Product & System Overview",
    showcase: [
      {
        title: "Sliding Window Systems",
        description:
          "Aluminium sliding windows designed to maximize natural light, enable smooth operation, and deliver space-efficient performance across modern residential and commercial spaces.",
        image: {
          src: "/images/sliding-windows.png",
          alt: "Close-up of contemporary sliding window with slim frame and large glass panels.",
        },
      },
      {
        title: "Casement Window Systems",
        description:
          "High-performance aluminium casement windows engineered for secure sealing, controlled ventilation, and long-term reliability in demanding residential and commercial environments.",
        image: {
          src: "/images/casement-windows.png",
          alt: "Modern gray aluminum casement window partially open inward with double glazing.",
        },
      },
      {
        title: "Sliding Door Systems",
        description:
          "Large-format aluminium sliding doors built to create seamless indoor-outdoor connections while maintaining structural strength, smooth operation, and architectural refinement.",
        image: {
          src: "/images/sliding-doors.png",
          alt: "Large floor-to-ceiling sliding glass doors opening to a modern patio and garden.",
        },
      },
      {
        title: "Custom Aluminium Solutions",
        description:
          "Bespoke aluminium window and door systems developed to address unique design requirements, complex site conditions, and specific performance expectations.",
        image: {
          src: "/images/custom-solutions.png",
          alt: "Modern building facade with protruding corner window design and aluminum framing.",
        },
      },
    ],
  },

  benefits: {
    badge: "// Benefits",
    items: [
      {
        icon: ShieldCheckIcon,
        title: "Structural Strength",
        description:
          "Communicates strength, safety, and reliability—key outcomes of structurally sound aluminium systems.",
      },
      {
        icon: CloudRainIcon,
        title: "Weather Resistance",
        description:
          "Represents exposure to rain and harsh conditions, aligning cleanly with protection from environmental elements.",
      },
      {
        icon: WrenchIcon,
        title: "Low Maintenance",
        description:
          "A straightforward symbol for upkeep and maintenance; paired with concise copy, it clearly implies reduced effort over time.",
      },
      {
        icon: FrameCornersIcon,
        title: "Modern Aesthetic",
        description:
          "Suggests structure, clean geometry, and framing—well aligned with modern architectural design and slim-profile systems.",
      },
    ],
  },

  ctaBanner: {
    cta: {
      label: "Request System Details",
      href: "https://wa.me/919071573153",
    },
  },

  applications: {
    badge: "// Applications",
    heading: "Aluminium Systems Designed for Every Building Context",
    description:
      "Solutions tailored to different project types, performance requirements, and architectural needs.",
    items: [
      {
        icon: HouseSimpleIcon,
        title: "Residential Projects",
        description:
          "Ideal for homeowners and residential developers seeking durable, low-maintenance aluminium systems that enhance comfort, natural light, and modern living spaces.",
      },
      {
        icon: BuildingsIcon,
        title: "Commercial Buildings",
        description:
          "Designed for offices, retail spaces, and commercial facilities that require reliable performance, clean aesthetics, and systems capable of handling high-traffic environments.",
      },
      {
        icon: BuildingOfficeIcon,
        title: "Architectural & High-Rise Developments",
        description:
          "Engineered for architects and developers working on complex, large-scale projects where structural integrity, design flexibility, and long-term performance are critical.",
      },
      {
        icon: FactoryIcon,
        title: "Industrial Applications",
        description:
          "Built to perform in demanding industrial environments, offering strength, weather resistance, and dependable operation where durability and functionality matter most.",
      },
    ],
  },

  process: {
    badge: "// Our Process",
    heading: "A Clear, Structured Approach From Consultation to Completion",
    description:
      "Designed to keep projects efficient, transparent, and on schedule.",
    steps: [
      {
        number: 1,
        title: "Consult & Assess",
        description:
          "We review requirements and site conditions to align design intent with performance needs.",
      },
      {
        number: 2,
        title: "Select & Customize",
        description:
          "Suitable aluminium systems are chosen and tailored to meet architectural and functional goals.",
      },
      {
        number: 3,
        title: "Manufacture",
        description:
          "Systems are fabricated with precision to ensure quality, accuracy, and consistency.",
      },
      {
        number: 4,
        title: "Install & Support",
        description:
          "Installation is completed efficiently, with continued support to ensure long-term performance.",
      },
    ],
  },

  testimonials: {
    badge: "// Social Proof",
    items: [
      {
        author: "Sanjay Iyer",
        profession: "Real Estate Developer",
        content:
          "“Alutech proved to be a dependable partner. Their attention to detail and commitment to quality made execution seamless across multiple units.”",
      },
      {
        author: "Priya Shah",
        profession: "Interior Designer",
        content:
          "“The slim profiles and clean detailing worked beautifully with our interiors. The systems added both functionality and visual refinement.”",
      },
    ],
  },

  finalCta: {
    badge: "// Get Started",
    description:
      "Speak directly with our team to discuss your project and find the right aluminium system—quickly and without obligation.",
    cta: {
      label: "WhatsApp Us Now",
      href: "https://wa.me/919071573153",
    },
  },
};
