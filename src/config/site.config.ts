export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Bill Bradley Services",
    shortName: "Bill Bradley",
    logo: "https://irp.cdn-website.com//7e238bc6/dms3rep/multi/opt/logo-7b036063-367w.png",
    logoLight: "https://irp.cdn-website.com//7e238bc6/dms3rep/multi/opt/logo-7b036063-367w.png",
    region: "Montgomery · River Region",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#174B7A", "brandSecondary": "#D8212B", "brandAccent": "#72B2D5", "page": "#101A26", "surfaceDark": "#07131F", "surfaceDarkAlt": "#132538", "surfaceElevated": "#1C3449", "surfaceSoft": "#F4F7F8", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#95A5AF", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4150", "borderStrong": "#657B86", "glowPrimary": "#174B7A", "glowSecondary": "#D8212B", "networkLine": "#72B2D5", "success": "#70A982", "service1": "#174B7A", "service2": "#72B2D5", "service3": "#D8212B", "service4": "#F1A83B", "service5": "#6983BB"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-262-8368",
    ctaLabel: "Request service",
    mobileEyebrow: "MONTGOMERY · RIVER REGION",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "MONTGOMERY · RIVER REGION",
    line1: "Bill Bradley",
    line2: "Local comfort.",
    detail: "Montgomery HVAC, plumbing, and home maintenance service, with emergency calls, system installation and repair, duct cleaning, water heaters, and sewer jetting.",
    location: "Montgomery service since 1969",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "MONTGOMERY · RIVER REGION · LOCAL HVAC",
    headlineLine1: "Since 1969,",
    headlineLine2: "service that lasts.",
    description: "Heating, cooling, plumbing, and home maintenance for Montgomery, Autauga, Elmore, and Lowndes counties.",
    primaryCta: "Request service",
    secondaryCta: "Call Bill Bradley",
    locationLabel: "MONTGOMERY · RIVER REGION",
    locationValue: "Montgomery · River Region",
    edgeLabel: "MONTGOMERY · RIVER REGION",
    bottomStatement: "HEATING · COOLING · PLUMBING · HOME MAINTENANCE",
    sillLabel: "Montgomery service since 1969",
    serviceLabels: ["Cooling", "Heating", "Plumbing"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/client-hero.svg", "primaryAlt": "Custom HVAC and plumbing graphic for Bill Bradley Services concept", "primaryPosition": "center center", "fit": "cover", "backdrop": "matte", "aspectRatio": "16 / 9"},

  },

  seo: {
    title: "Bill Bradley Services | HVAC Service in Montgomery",
    description: "Montgomery HVAC, plumbing, and home maintenance service, with emergency calls, system installation and repair, duct cleaning, water heaters, and sewer jetting.",

  },

  contact: {
    phoneDisplay: "334-262-8368",
    phoneHref: "tel:+13342628368",
    email: "info@billbradleyservices.com",
    address: "1507 Lake Street, Montgomery, AL 36106",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Montgomery service since 1969",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Montgomery service since 1969",
    body: "Bill Bradley Services handles HVAC installation and repair, plumbing, water heaters, duct cleaning, maintenance programs, and high-pressure sewer and drain cleaning.",
    callLabel: "Call now",
    availabilityLabel: "Montgomery · River Region",
    panelEyebrow: "BILL BRADLEY SERVICES",
    panelTitle: "Bill Bradley Services handles HVAC installation and repair, plumbing, water heaters, duct cleaning, maintenance programs, and high-pressure sewer and drain cleaning.",
    panelFooter: "Montgomery · River Region",
    handoff: "Explore Bill Bradley Services services.",
    items: [{"icon": "cooling", "label": "Air conditioning", "detail": "Air conditioning installation, repair, and equipment service."}, {"icon": "heating", "label": "Heating", "detail": "High-efficiency heating system installation and repair."}, {"icon": "maintenance", "label": "Plumbing", "detail": "Plumbing repairs, water heaters, and fixture service."}],

  },

  services: {
    eyebrow: "BILL BRADLEY SERVICES · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "MONTGOMERY · RIVER REGION",
    summaryTitle: "Bill Bradley Services handles HVAC installation and repair, plumbing, water heaters, duct cleaning, maintenance programs, and high-pressure sewer and drain cleaning.",
    summaryBody: "Bill Bradley Services handles HVAC installation and repair, plumbing, water heaters, duct cleaning, maintenance programs, and high-pressure sewer and drain cleaning.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning", "shortName": "Cooling", "image": "/services/01.svg", "description": "Air conditioning installation, repair, and equipment service."}, {"name": "Heating", "shortName": "Heating", "image": "/services/02.svg", "description": "High-efficiency heating system installation and repair."}, {"name": "Plumbing", "shortName": "Plumbing", "image": "/services/03.svg", "description": "Plumbing repairs, water heaters, and fixture service."}, {"name": "Duct cleaning", "shortName": "Ducts", "image": "/services/04.svg", "description": "Source-capture duct cleaning and ventilation inspection."}, {"name": "Sewer & maintenance", "shortName": "Home care", "image": "/services/05.svg", "description": "Maintenance programs and high-pressure sewer and drain cleaning."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Montgomery · River Region",
    featuredLocation: "Montgomery, AL",
    locationDetail: "Serving Montgomery · River Region.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Montgomery · River Region",
    metrics: [{"value": "5 communities", "label": "Coverage shown"}, {"value": "Serving the area since 1969 · 24/7", "label": "Service commitment"}, {"value": "Local team", "label": "Montgomery · River Region"}],
    locations: [{"name": "Montgomery, AL", "kind": "city", "lat": 32.3668, "lng": -86.3, "hub": true}, {"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": false}, {"name": "Wetumpka, AL", "kind": "city", "lat": 32.5437, "lng": -86.2119, "hub": false}, {"name": "Millbrook, AL", "kind": "city", "lat": 32.4799, "lng": -86.3619, "hub": false}, {"name": "Pike Road, AL", "kind": "city", "lat": 32.2846, "lng": -86.103, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Bill Bradley Services about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Bill Bradley",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-262-8368 to contact Bill Bradley Services.",

  }
};
