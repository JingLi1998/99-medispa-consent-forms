import {
  consultationFields,
  emsculptFields,
  injectableFields,
  laserFields,
  postBotulinumToxinTypeAFields,
  postDermalFillersFields,
  postLaserFields,
  postPlateletRichPlasmaFields,
} from "./forms";

export const routes = [
  {
    collection: "laser",
    formFields: laserFields,
    label: "Laser",
    to: "/laser",
  },
  {
    collection: "consultation",
    formFields: consultationFields,
    label: "Consultation",
    to: "/consultation",
  },
  {
    collection: "injectables",
    formFields: injectableFields,
    label: "Injectables",
    to: "/injectables",
  },
  {
    collection: "emsculpt",
    formFields: emsculptFields,
    label: "Emsculpt",
    to: "/emsculpt",
  },
  {
    collection: "post-laser",
    formFields: postLaserFields,
    label: "Post Laser",
    to: "/post-laser",
  },
  {
    collection: "post-platelet-rich-plasma",
    formFields: postPlateletRichPlasmaFields,
    label: "Post Platelet Rich Plasma",
    to: "/post-platelet-rich-plasma",
  },
  {
    collection: "post-dermal-fillers",
    formFields: postDermalFillersFields,
    label: "Post Dermal Fillers",
    to: "/post-dermal-fillers",
  },
  {
    collection: "post-botulinum-toxin-type-a",
    formFields: postBotulinumToxinTypeAFields,
    label: "Post Botulinum Toxin Type A",
    to: "/post-botulinum-toxin-type-a",
  },
];
