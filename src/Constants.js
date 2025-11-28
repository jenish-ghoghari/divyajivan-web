import FSSAI from "./assets/fssaiLogo.png";
import GMP from "./assets/gmpLogo.png";
import GLP from "./assets/glpLogo.png";
import FDA from "./assets/FDALogo.png";

import Tablet from "./assets/Tablet-Photo.jpg";
import Capsules from "./assets/Capsule-Photo.jpg";
import ExternalPreparation from "./assets/External-Preparation-Photo.jpg";

export const licenses = [
  {
    image: GLP,
    name: "GLP",
    alt: "EU-GMP contract manufacturing pharma",
  },
  {
    image: GMP,
    name: "GMP",
    alt: "GMP-certified pharmaceutical manufacturer",
  },
  {
    image: FSSAI,
    name: "FSSAI",
    alt: "FSSAI, third-party pharma company",
  },
  {
    image: FDA,
    name: "FDA",
    alt: "USFDA-approved pharma third-party manufacturers",
  },
];

export const productCategories = [
  {
    title: "Tablets",
    url: "products/tablets",
    alt: ". Best third-party pharma manufacturer for tablets",
    image: Tablet,
  },
  {
    title: "Capsules",
    url: "products/capsules",
    alt: "Third-party pharma contract for capsules & syrups",
    image: Capsules,
  },
  {
    title: "External Preparations",
    url: "products/external-preparations",
    alt: ". Surat-based third-party pharma company",
    image: ExternalPreparation,
  },
];
