const departments = [
  {
    title: "Emergency & ICU",
    slug: "emergency",
    image: "/departments/emergency.png",
    description: "Our Emergency and ICU services operate 24/7 to manage critical, life-threatening, and urgent health conditions. Equipped with advanced medical technology, our units ensure rapid diagnosis, immediate intervention, and continuous monitoring for patients who require intensive care.Our experienced doctors, nurses, and paramedical staff work round the clock to stabilize patients and provide comprehensive treatment in emergency situations. Alongside this, our OPD department offers routine consultations, follow-ups, preventive health services, and timely medical guidance to support complete patient care.",
  },
  {
    title: "General Surgery",
    slug: "general-surgery",
    image: "/departments/generalSurgery.png",
    description: "The General Surgery department offers a comprehensive range of surgical procedures using advanced equipment and modern surgical techniques. Our surgeons specialize in both conventional and minimally invasive procedures, ensuring less pain, minimal scarring, and faster recovery for patients.From routine surgeries to complex cases, our team provides safe, effective, and personalized surgical care. We focus on thorough pre-operative evaluation, precise surgical intervention, and attentive post-operative support to ensure the best possible outcomes."
  },
  {
    title: "Cardiology",
    slug: "cardiology",
    image: "/departments/cardiology.png",
    description: "The Cardiology department provides complete heart and vascular care with a focus on early detection, accurate diagnosis, and effective treatment of cardiac conditions. Our services include heart screenings, ECG, ECHO, stress tests, Holter monitoring, and advanced diagnostic evaluations.Our expert cardiologists are equipped to manage hypertension, arrhythmias, coronary artery disease, heart failure, and other complex cardiac disorders.We emphasize preventive cardiology through lifestyle guidance, risk assessment, and regular check-ups to help patients maintain long-term heart health. With state-of-the-art technology and compassionate care, we strive to ensure the best outcomes for every patient."
  },
  {
    title: "Orthopedics",
    slug: "orthopedics",
    image: "/departments/orthopedic.png",
    description: "Our Orthopedic department specializes in the diagnosis, treatment, and rehabilitation of bone, joint, muscle, and spine conditions. We manage a wide range of issues including fractures, arthritis, ligament injuries, sports injuries, disc problems, and congenital deformities.With advanced imaging facilities and modern surgical techniques, we offer both non-surgical and surgical solutions such as joint replacements, arthroscopy, spine surgeries, and trauma care.Our team focuses on restoring movement, reducing pain, and improving overall functional ability. Personalized treatment plans, physiotherapy support, and post-operative rehabilitation ensure patients return to their daily activities with comfort and confidence."
  },
  {
    title: "Pediatrics",
    slug: "pediatrics",
    image: "/departments/pediatrics.png",
    description: "Our Pediatrics department provides comprehensive medical care for newborns, infants, children, and adolescents. We offer safe and timely vaccinations, regular growth and developmental monitoring, nutritional guidance, and effective treatment for common and complex childhood illnesses.Our compassionate pediatricians focus on early detection of developmental delays, preventive care, and long-term well-being. With child-friendly facilities and a caring environment, we ensure that every child receives the highest standard of medical attention, comfort, and support throughout all stages of growth."
  },
  {
    title: "Urology",
    slug: "urology",
    image: "/departments/urologist.png",
    description: "Our Urology department offers comprehensive care for disorders related to the urinary tract and male reproductive system. We diagnose and treat conditions such as kidney stones, urinary infections, prostate problems, bladder disorders, and male infertility.With the help of advanced diagnostic tools like ultrasound, uroflowmetry, and endoscopic procedures, we provide accurate evaluations and effective treatment plans.Our team specializes in both medical management and minimally invasive surgeries, ensuring quicker recovery and improved patient comfort. We focus on restoring healthy urinary function and improving overall quality of life through personalized and compassionate care."
  },
  {
    title: "Obstetrics & Gynecology",
    slug: "obstetrics-gynecology",
    image: "/departments/obstetrics&Gynecology.png",
    description: "Our Obstetrics & Gynecology department offers comprehensive healthcare services for women at every stage of life. We provide thorough prenatal check-ups, safe delivery options, postpartum care, and support throughout pregnancy to ensure the well-being of both mother and baby.Our gynecology services include treatment for menstrual disorders, hormonal issues, uterine and ovarian conditions, PCOS, infections, and reproductive health concerns.We also offer fertility evaluations, family planning guidance, and menopause management with personalized care. With advanced diagnostic tools and a compassionate team, we aim to support women’s health, comfort, and wellness with the highest standard of medical care."
  },
  {
    title: "Radiology",
    slug: "radiology",
    image: "/departments/radiology.png",
    description: "Our Radiology department is equipped with advanced imaging technologies to deliver accurate and reliable diagnostic results. We offer a full range of imaging services, including digital X-rays, ultrasounds, CT scans, and other specialized radiological procedures.Our skilled radiologists work closely with clinicians to interpret images precisely, enabling timely diagnosis and guiding effective treatment plans.With high-quality imaging systems, patient safety protocols, and a focus on comfort, we ensure fast, clear, and dependable diagnostic support for all medical conditions."
  },
  {
    title: "Pathology / Laboratory",
    slug: "pathology",
    image: "/departments/pathology.png",
    description: "Our Pathology and Laboratory department provides reliable, precise, and timely diagnostic testing to support accurate medical decision-making. We perform a wide range of investigations including routine blood tests, urine analysis, cultures, biopsies, hormonal studies, and advanced diagnostic screenings.Equipped with modern analyzers and strict quality-control protocols, our lab ensures dependable results for all types of medical conditions.Our experienced pathologists and technicians work closely with doctors to assist in early detection, diagnosis, and ongoing monitoring of diseases—ensuring patients receive the most appropriate and effective treatment."
  },
  {
    title: "Oncology",
    slug: "oncology",
    image: "/departments/oncology.png",
    description: "Our Oncology department offers comprehensive and compassionate cancer care, supporting patients through every stage of their journey. We provide advanced cancer screening, accurate diagnosis, personalized treatment planning, and chemotherapy services tailored to each patient’s condition.Our multidisciplinary team works closely with specialists from radiology, surgery, and pathology to ensure a holistic approach to cancer treatment.We focus on early detection, effective management, symptom control, and long-term follow-up care. With a patient-centered and supportive environment, we aim to provide strength, comfort, and the highest quality of care throughout treatment and recovery."
  },
  {
    title: "Psychiatry",
    slug: "psychiatry",
    image: "/departments/psychiatry.png",
    description: "Our Psychiatry department provides confidential, compassionate, and comprehensive mental health care to individuals of all ages. We address a wide range of concerns, including stress, anxiety, depression, mood disorders, behavioral issues, and emotional difficulties.Our services include psychological counseling, psychotherapy, medication management, and personalized treatment plans designed to support mental and emotional well-being.With a focus on understanding each patient’s unique challenges, our team works towards improving daily functioning, enhancing coping skills, and promoting a healthier, more balanced quality of life in a safe and supportive environment."
  },
  {
    title: "Pharmacy",
    slug: "pharmacy",
    image: "/departments/pharmacy.png",
    description: "Our in-house Pharmacy provides convenient, reliable, and safe access to all prescribed medications, ensuring continuity of care for every patient. We maintain a well-stocked inventory of essential drugs, over-the-counter medicines, and specialized treatments recommended by our doctors.Our trained pharmacists offer guidance on correct dosage, drug interactions, storage instructions, and proper usage to ensure effective and safe medication management.With a focus on patient safety, authenticity, and timely service, our pharmacy plays a vital role in supporting overall treatment and improving health outcomes."
  },
  {
    title: "Nephrology & Dialysis",
    slug: "nephrology-dialysis",
    image: "/departments/nephrology.png",
    description: "Our Nephrology department specializes in the diagnosis and management of kidney-related diseases, including chronic kidney disease, acute kidney injury, electrolyte imbalances, kidney infections, and high blood pressure. We use advanced screening tools and personalized treatment plans to protect kidney function and improve long-term health.Our state-of-the-art Dialysis Unit provides safe, hygienic, and comfortable dialysis sessions for patients with kidney failure. With trained nephrologists, dialysis technicians, and continuous monitoring, we ensure precise care and a smooth treatment experience.Our goal is to support patients with compassionate care, timely intervention, and comprehensive kidney health management."
  },
  {
    title: "Gastroenterology",
    slug: "gastroenterology",
    image: "/departments/gastro.png",
    description: "Our Gastroenterology department provides expert care for disorders of the stomach, liver, pancreas, gallbladder, and intestines. We diagnose and treat conditions such as acidity, gastritis, ulcers, irritable bowel syndrome (IBS), liver disease, pancreatitis, jaundice, and other digestive problems.Using advanced diagnostic tools and endoscopic procedures like upper GI endoscopy and colonoscopy, our specialists ensure accurate evaluation and effective treatment.Our team focuses on restoring digestive health through personalized medical care, lifestyle guidance, and long-term management plans to improve overall well-being."
  },
  {
    title: "General / Internal Medicine",
    slug: "internal-medicine",
    image: "/departments/internalMed.png",
    description: "Our General / Internal Medicine department provides comprehensive primary care for adults, focusing on the prevention, diagnosis, and management of a wide range of medical conditions. We treat common illnesses such as fever, infections, allergies, digestive issues, and respiratory problems, as well as chronic conditions like diabetes, hypertension, thyroid disorders, and lifestyle-related diseases. Our physicians emphasize early detection, regular health check-ups, and long-term disease management to promote overall wellness. With personalized treatment plans, continuous monitoring, and preventive guidance, we aim to support patients in maintaining a healthy and balanced life."
  },
  {
    title: "Dental",
    slug: "dental",
    image: "/departments/dental.jpg",
    description: "Our Dental department offers comprehensive oral care for patients of all ages. We provide preventive treatments such as dental cleaning, scaling, and oral hygiene education to maintain healthy teeth and gums.Our services include fillings, root canal treatments, tooth extractions, crowns, bridges, dentures, and cosmetic dentistry to restore function and enhance smiles.We also offer orthodontic care, including braces and aligners, to correct alignment issues and improve overall dental health. With advanced equipment and a gentle approach, our dental team ensures safe, comfortable, and effective treatment for all your oral health needs."
  },
  {
    title: "Physiotherapy & Rehabilitation",
    slug: "physiotherapy",
    image: "/departments/physio.png",
    description: "Our Physiotherapy & Rehabilitation department supports patients in recovering from injuries, surgeries, strokes, and chronic pain conditions through personalized therapy programs. We provide specialized treatments for joint pain, back and neck issues, sports injuries, postoperative recovery, neurological conditions, and mobility limitations.Using evidence-based techniques, therapeutic exercises, manual therapy, and advanced rehabilitation equipment, our physiotherapists design customized plans to restore strength, flexibility, and balance. Our goal is to enhance mobility, reduce pain, and improve overall daily functioning, helping patients return to an active and independent lifestyle with confidence."
  },
];

export default departments;
