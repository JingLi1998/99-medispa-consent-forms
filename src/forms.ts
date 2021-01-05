export const laserFields = [
  {
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Client Name",
        validation: { required: true },
      },
      {
        type: "list",
        name: "consentList",
        label: "Please carefully read the terms of consent and service",
        listItems: [
          "I authorize the staff at 99 Medispa to perform one of the following treatments: Fotona, Picosure, Endymed, Ultherapy, Thermage",
          "I understand that there may be some degree of discomfort during treatment and after treatment, including common skin reactions such as inflammation (redness) and swelling with having this treatment / procedure.",
          "I understand that there are no guarantees as to the results of this treatment or future  treatments due to many variables such as: age, hormonal changes, condition/colour of skin/hair, sun exposure, medications etc.",
          "I understand that with some treatments I may experience, prolonged redness, sensitivity, scabbing and if prone to herpes may experience a stimulation of the virus.",
          "I understand that I cannot have another laser, IPL or RF treatment within 21 days of this treatment on the same area, whether the treatment is performed at this clinic location or any  other clinic location.",
          "I understand that to achieve maximum results, I will need several treatments",
          "I understand this treatment is a cosmetic treatment and that no medical claims are expressed or implied",
          "I agree to refrain from sun tanning booths or sun exposure while I am undergoing treatments.",
          "I understand that although complications are very rare, sometimes an unexpected outcome may occur and that prompt treatment is necessary. In the event of any unexpected outcome, I will immediately contact the doctor / technician who performed the treatment. Adverse reactions may include: burning, blistering, grazing or changes to skin colour (hyperpigmentation – an increase in colour, Hypopigmentation – loss of colour) and scarring.",
          "I understand that some medications may cause me to be photosensitive to light exposure and if treated with laser, may contribute to adverse reactions. It is my responsibility to check with my doctor if my medication may make me photosensitive prior to commencing laser treatments.",
          "I have disclosed to the treatment practitioner all information that has been requested and agree to have this treatment performed on me.",
          "I agree to have my photo taken before the treatment and I understand that I may be asked to return for a second photo after my skin has healed. I understand that my photo may be used for marketing purposes in the future.",
          "I acknowledge that I have read and received a Post Procedure Care Sheet and further agree to follow all post procedure care instructions as I am directed.",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        label:
          "I have read, understood and give consent to the aforementioned statements.",
        validation: { required: true },
      },
    ],
  },
];

export const consultationFields = [
  {
    sectionLabel: "Contact Details",
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Name",
        validation: { required: true },
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        validation: { required: true },
      },
      {
        type: "text",
        name: "mobile",
        label: "Mobile",
        validation: { required: true },
      },
      {
        type: "text",
        name: "birthday",
        label: "Date of Birth",
        validation: { required: true },
      },
    ],
  },
  {
    sectionLabel: "Topics of Concern",
    sectionFields: [
      { type: "checkbox", label: "Hair Removal", name: "hairRemoval" },
      { type: "checkbox", label: "Pigmentation", name: "pigmentation" },
      { type: "checkbox", label: "Vascular", name: "vascular" },
      { type: "checkbox", label: "Skin Tightening", name: "skinTightening" },
      { type: "checkbox", label: "Body Contouring", name: "bodyContouring" },
      { type: "checkbox", label: "Tatoo Removal", name: "tatooRemoval" },
      {
        type: "textarea",
        label: "Please list which areas are to be Treated",
        name: "treatmentAreas",
      },
    ],
  },
  {
    sectionName: "Medical Background",
    sectionFields: [
      {
        type: "checkbox",
        label: "Are you currently under a doctor's care?",
        name: "underDoctorCare",
      },
      {
        type: "text",
        label: "If yes, for what?",
        name: "underDoctorCareDetails",
      },
      {
        type: "textarea",
        label: "Please list any medications or supplements you are taking",
        name: "medications",
      },
      {
        type: "checkbox",
        label: "Have you had surgery in the past 6 months?",
        name: "hasHadSurgery",
      },
      {
        type: "text",
        label: "If yes, for what?",
        name: "hasHadSurgeryDetails",
      },
    ],
  },
];

export const injectableFields = [
  {
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Client Name",
        validation: { required: true },
      },
      {
        type: "text",
        name: "birthday",
        label: "Date of Birth",
        validation: { required: true },
      },
      {
        type: "list",
        name: "injectableRisks",
        label:
          "I understand the risks associated with the above treatment include but are not limited to the following:",
        listItems: [
          "Localised burning or stinging pain during injection",
          "Bruising, Redness",
          "Tenderness",
          "Mild swelling at the injection site",
          "Infection at the injection site",
          "Feeling faint during the procedure",
          "An uneven/inadequate result/lumps – may require additional treatment at review",
        ],
      },
      {
        type: "list",
        name: "injectableSideEffects",
        label: "I understand uncommon and rare side-effects include:",
        listItems: [
          "Permanent granuloma/nodule/lump formation that may require surgical correction",
          "and may be untreatable.",
          "Necrosis of the skin",
          "Prolonged redness",
          "Prolonged sensitivity/pain at the treated sites",
          "Scar formation after injection (keloid)",
          "Infection and subsequent scar formation",
          "Nerve damage and resulting numbness and weakness",
          "Immediate hypersensitivity reactions including anaphylaxis",
          "Nasolacrimal duct obstruction, blindness (when treating around the eye area)",
        ],
      },
      {
        type: "list",
        name: "injectableExtras",
        label: "I further confirm the following statements:",
        listItems: [
          "I am not pregnant or breastfeeding",
          "I have accurately informed my injector of my medical history and any history of previous injectables I have had",
          "I have not had any previous permanent injectables in the area to be treated",
          "I certify that I have fully read this consent form and understand the information provided to me regarding the proposed procedure",
          "I have been adequately informed about the procedure including the potential benefits and limitations",
          "I understand that results are not guaranteed and I accept the risks, side effects and possible complications inherent in undergoing injectable treatments. This consent is binding for today and future treatment at 99 Medispa",
          "I consent to having my photo taken for before and after purposes. This will remain confidential unless requested otherwise",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        validation: { required: true },
        label:
          "I have read, understood and give consent to the aforementioned statements.",
      },
    ],
  },
];

export const postLaserFields = [
  {
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Client Name",
        validation: { required: true },
      },
    ],
  },
  {
    sectionName:
      "Please read the following post laser treatment suggestions and instructions",
    sectionFields: [
      {
        type: "list",
        name: "next24Hours",
        label: " For the next 24 hours:",
        listItems: [
          "Refrain from hot showers, exercise, harsh cleansers and exfoliants",
          "Only apply post treatment cream that is advised by your clinician",
          "The treatment area should feel warm and tender for the next two days",
        ],
      },
      {
        type: "list",
        name: "next30Days",
        label: "For the next 30 days:",
        listItems: [
          "Avoid sun exposure and wear sun block daily (physical SPF preferred)",
          "Please ensure good quality sleep every night before 11pm to speed up skin recovery time",
          "Please keep your skin hydrated by drinking plenty of water",
          "Avoid chemical peels, microdermabrasion and Vitamin A",
          "Mineral make up may be applied on the second day",
          "You may notice tiny incrustation spots form which will fall off in due course (this can take up to two weeks)",
          "Please avoid scratching, picking and touching the treated areas",
          "Men should avoid shaving for 7 days",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        validation: { required: true },
        label:
          "I have read and understood the necessary post laser treatment suggestions and instructions.",
      },
    ],
  },
];

export const postBotulinumToxinTypeAFields = [
  {
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Client Name",
        validation: { required: true },
      },
      {
        type: "list",
        name: "instructions",
        label:
          "Please read the following post care instructions and suggestions:",
        listItems: [
          "Do NOT rub or touch the treated area until the next morning. This includes not having any facial treatments, laser or massage. This is to help avoid any complications",
          "It is recommended you do NOT lie down for the next 4-6 hours as you many inadvertently rub the treated areas. For the same reason you should not do strenuous exercise for the day of treatment",
          "Also, avoid any exposure to any heat treatments such as sauna, hot tub or tanning for 48 hours as it will make your treatment less effective",
          "Paracetamol is recommended for any headaches or pain. Try to avoid medicines such as ibuprofen (Nurofen) or diclofenac (Voltaren) for the next 24 hours",
          "There is a small risk of bruising. If this occurs do not worry, it will only be temporary, is generally minor and can easily be covered up with makeup. Arnica tablets or hirudoid cream helps reduce bruising time if it is of concern",
          "Your treatment will take 4-7 days to start working. It may take 2 full weeks to see the final result. If, after 2 weeks, you feel that you still have more muscle movement than you would like, then this can be adjusted at your post injection assessment",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        validation: { required: true },
        label:
          "I have read and understood the necessary post laser treatment suggestions and instructions",
      },
    ],
  },
];

export const postDermalFillersFields = [
  {
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Client Name",
        validation: { required: true },
      },
      {
        type: "list",
        name: "instructions",
        label:
          "Please read the following post care instructions and suggestions:",
        listItems: [
          "Do NOT rub or touch the treated area until the next morning",
          "Do NOT consume alcohol for 24 hours after treatment",
          "Try to avoid lying down or strenuous exercise for 6 hours after treatment",
          "It is recommended to avoid extended exposure to sun or UV light and extended exposure to extreme hot or cold temperatures including hot drinks (if your lips have been treated) 2 weeks",
          "It is recommended not to apply make up to the treatment area for 12 hours after the injection",
          "There will be some swelling and bruising, however, do not worry as it will only be temporary and can easily be covered up with makeup (after 12 hours). Arnica tablets or hirudoid cream can help if it is of major concern",
          "You may feel lumps for up to 2 weeks after treatment, as your body adjusts to the new volume. You may after 48 hours, massage these out gently. If you can see any lumps please let the staff at 99 Medispa know",
          "If you have any concerns please contact 99 Medispa staff on 0452 008 115",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        validation: { required: true },
        label:
          "I have read and understood the necessary post laser treatment suggestions and instructions",
      },
    ],
  },
];

export const postPlateletRichPlasmaFields = [
  {
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Client Name",
        validation: { required: true },
      },
      {
        type: "list",
        name: "instructions",
        label:
          "Please read the following post care instructions and suggestions:",
        listItems: [
          "There are minimal restrictions after your PRP injections allowing you to return to your daily activities almost immediately",
          "Do NOT touch, press, rub, or manipulate the treated area (s) for at least 8 hours after your treatment",
          "AVOID Aspirin, Motrin, Ibuprofen, Alev e (all non-steroidal a n d st er oi dal a n t i -inflammatory agents), Gingko Biloba, Garlic, Flax Oil, Cod liver Oil, Vitamin A, Vitamin E, or any other essential fatty acids at least 3 days - 1week prior to and after your treatment",
          "Remember, we are creating inflammation. If you experience discomfort or pain you may take Tylenol or other Acetaminophen products",
          "You may apply Ice if you wish to the injected area for 20-30 minutes after the procedure but we would prefer if you can refrain from this",
          "You may apply Ice if you wish to the injected area for 20-30 minutes after the procedure but we would prefer if you can refrain from this",
          "Do not wash or take a shower for at least 6 hours after your treatment",
          "Do not use any lotions, creams, or make-up for at least 6 hours after your treatment",
          "AVOID vigorous exercise, sun and heat exposure for at least 3 days after your treatment",
          "Smokers do not heal well and problems recur earlier and results may take longer",
          "Maintain a healthy diet and Drink at least 64 oz.’s of water the day of the treatment. (Fiji water is recommended due to its high content of Silica) Continue water intake the first week after",
          "It is normal to experience: Bruising, Redness, Itching, Soreness, and Swelling that may last from 3-10 days",
          "Please call our office should you have any questions or concerns regarding your PRP treatment or Aftercare (0452 008 115)",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        validation: { required: true },
        label:
          "I have read and understood the necessary post laser treatment suggestions and instructions",
      },
    ],
  },
];

export const emsculptFields = [
  {
    sectionLabel: "Contact Details",
    sectionFields: [
      {
        type: "text",
        name: "name",
        label: "Name",
        validation: { required: true },
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        validation: { required: true },
      },
      {
        type: "text",
        name: "mobile",
        label: "Mobile",
        validation: { required: true },
      },
      {
        type: "text",
        name: "birthday",
        label: "Date of Birth",
        validation: { required: true },
      },
    ],
  },
  {
    sectionLabel: "Treatment Overview",
    sectionFields: [
      {
        type: "list",
        name: "introduction",
        label: "Please read and confirm the following statements",
        listItems: [
          "You are scheduled for a series of non-invasive treatments with the EMSCULPT. The device is indicated for reduction of fat and for improvement of tone, strengthening, toning and firming of various muscle groups",
          "Your treatment provider will discuss your specific treatment needs. Recommended number of treatments is 4. The treatment is typically about 20-30 minutes per session, with sessions separated by at least two days. Completing a full treatment series is necessary to maximize treatment efficacy. You may need additional treatments depending on your goals",
          "Before the treatment, you are not required to do anything special, however, keeping your body well hydrated is recommended. On the day of the treatment, you are advised to wear comfortable clothing which allows flexibility for correct positioning during the treatment. You will be asked to remove all metallic accessories and electronic devices",
          "I acknowledge that a successful treatment outcome can be affected by smoking or excessive alcohol consumption, as well as: eating disorders or on-going medication. While no special diet is required, you are encouraged to eat healthy to help promote and maintain results",
          "The treatment does not require anesthesia. During the application, you will feel intense muscle contractions in the treated area. The procedure doesn’t require any recovery time. Typically, you can get back to your daily routine right after the treatment",
          "I acknowledge that the treatment should preferably be applied directly over the skin. If not, I am aware not to wear any metallic accessories (such as jewelry, watch or clothes containing metallic threads) during the treatment. I also acknowledge that I do not have any metallic or electronic implants (such as pacemakers, defibrillators, metallic IUDs, etc.)",
        ],
      },
      {
        type: "checkbox",
        name: "treatmentOverview",
        validation: { required: true },
        label:
          "I have read and understood the above statements and instructions",
      },
    ],
  },
  {
    sectionLabel: "General Patient Record",
    sectionFields: [
      {
        type: "list",
        name: "conditions",
        label:
          "Please check whether you currently have or have had any of the following",
        listItems: [
          "Cardiac pacemakers",
          "Implanted defibrillators, implanted neurostimulators",
          "Electronic implants",
          "Pulmonary insufficiency",
          "Metal implants",
          "Drug pumps",
          "Malignant tumour",
          "Injured or otherwise impaired muscles",
          "Fever",
          "Pregnancy",
          "Metallic IUD",
          "Heart disorders",
          "Epilepsy",
          "Recent surgical procedures (muscle contraction may disrupt the healing)",
        ],
      },
      {
        type: "textarea",
        label: "If any of the above apply, please specify and elaborate",
        name: "specifyPreviousConditions",
      },
      {
        type: "text",
        label:
          "Have you been pregnant? If yes, please specify method of birth (C-section or Vaginal birth",
        name: "pregnancy",
      },
    ],
  },
  {
    sectionLabel: "Please tick yes if the following apply to you",
    sectionFields: [
      {
        type: "checkbox",
        label: "You are satisfied with the strength of your core muscles",
        name: "core",
      },
      {
        type: "checkbox",
        label: "You are satisfied with the shape of your buttocks",
        name: "buttocks",
      },
      {
        type: "checkbox",
        label: "You are satisfied with the tone of your arms",
        name: "arms",
      },
      {
        type: "checkbox",
        label: "You are satisfied with the tone of your calves",
        name: "calves",
      },
    ],
  },
  {
    sectionLabel: "Treatment Considerations",
    sectionFields: [
      {
        type: "list",
        label: "Please carefully read the following treatment considerations",
        name: "treatmentConsiderations",
        listItems: [
          "I am aware that the treatment cannot be applied over the head, heart and neck",
          "I am aware that the treatment cannot be applied over the head, heart and neck",
          "I understand that there are certain risks associated with Emsculpt treatments and they include but are not limited to muscular pain, temporary muscle spasm, temporary joint or tendon pain, local erythema or skin redness and intramuscular fat decrease (for full range of cautions please consult your treatment provider)",
          "I understand that the treatment over injured or otherwise impaired muscles is contraindicated",
          "I understand that the treatment may involve risks of complications or injury from both known and unknown causes, and I freely assume these risks",
          "I agree to before and after treatment photographs, measurements and weighing, as this will help for medical evaluation of the results of the treatment. Information will be acquired for medical records or marketing purposes",
          "I understand the results may vary from person to person and that an exact result cannot be predicted. Completing a full treatment series is necessary to maximize treatment efficacy. It is very unlikely, but it is possible that you will not feel any recognizable result after the procedure. I acknowledge the results may not meet my expectations",
          "I certify that I have read this entire document and that I agree with all provisions. I certify that I have had the opportunity to ask questions and these questions have been answered in full to my satisfaction. I fully understand the treatment conditions, the procedure, and possible side effects",
          "I have read the above information, and I request and give my consent to be treated with the Emsculpt by the physician(s) in this practice and his/her designated staff",
        ],
      },
      {
        type: "checkbox",
        name: "consent",
        validation: { required: true },
        label:
          "I have read and understood the above statements and instructions",
      },
    ],
  },
];
