export const CATEGORIES = {
  NEONATAL:      { label: "Newborn Health",           color: "#e74c3c", icon: "👶" },
  DEVELOPMENT:   { label: "Child Development",         color: "#9b59b6", icon: "🧠" },
  INFECTIOUS:    { label: "Childhood Infections",      color: "#27ae60", icon: "🦠" },
  NUTRITION:     { label: "Nutrition & Growth",        color: "#f39c12", icon: "🥦" },
  RARE:          { label: "Rare Childhood Diseases",   color: "#2980b9", icon: "💊" },
  MENTAL_HEALTH: { label: "Child Mental Health",       color: "#1abc9c", icon: "💚" },
  INJURY:        { label: "Injury Prevention",         color: "#e67e22", icon: "🛡️" },
  HEALTH_SYSTEMS:{ label: "Health Systems & Policy",  color: "#16a085", icon: "🏥" },
  CARDIO:        { label: "Congenital Heart Disease",  color: "#c0392b", icon: "❤️‍🩹" },
};

// 6 tiers — real pediatric, neonatal, and health services research journals
export const JOURNALS = {
  6: ["Nature", "Science", "New England Journal of Medicine", "JAMA", "The Lancet"],
  5: ["Pediatrics (AAP)", "The Lancet Child & Adolescent Health", "Health Affairs"],
  4: ["JAMA Pediatrics", "Archives of Disease in Childhood", "Milbank Quarterly"],
  3: ["Academic Pediatrics", "BMJ Paediatrics Open", "Health Services Research"],
  2: ["Journal of Perinatology", "BMC Health Services Research", "Acta Paediatrica"],
  1: ["Clinical Pediatrics", "Pediatric Reports", "Regional Pediatric Bulletin"],
};

export const PRESTIGE_BY_TIER = { 1: 0, 2: 0, 3: 1, 4: 2, 5: 4, 6: 7 };

// Fraction of study cost returned as budget gain per tier.
export const TIER_MULTIPLIERS = { 1: 0.06, 2: 0.12, 3: 0.22, 4: 0.45, 5: 0.75, 6: 1.20 };

// journalWeights: [tier1..tier6] — must sum to 1.
//
// 7 quadrant templates (risk × reward):
//   LR_LR: low risk, low reward  — safe incremental work, modest journals
//   LR_MR: low risk, med reward
//   LR_HR: low risk, high reward — well-powered studies on high-priority topics
//   MR_LR: med risk, low reward
//   MR_MR: med risk, med reward
//   MR_HR: med risk, high reward
//   HR_LR: high risk, low reward — often fails, and even success lands in mid tiers (trap!)
//   HR_MR: high risk, med reward
//   HR_HR: high risk, high reward — moonshots
//
// Cost reflects both axes: HR_LR is cheap; LR_HR is expensive.

export const ALL_PROPOSALS = [
  // ── NEONATAL ─────────────────────────────────────────────────────────────
  {
    id: "p1",
    title: "Better Breathing Support for Premature Babies",
    category: "NEONATAL",
    description: "Premature babies often struggle to breathe on their own. This study tests a gentler breathing machine made just for tiny newborns.",
    cost: 2,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.15, 0.21, 0.26, 0.23, 0.11, 0.04], // MR_MR
    impact: "Could reduce lung damage in premature babies born before 32 weeks.",
  },
  {
    id: "p2",
    title: "Preventing Brain Injury at Birth",
    category: "NEONATAL",
    description: "When a baby doesn't get enough oxygen during birth, the brain can be hurt. Researchers want to test a cooling treatment that protects the brain.",
    cost: 4,
    risk: "low",
    successRate: 0.82,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // LR_HR — high impact clinical trial
    impact: "Could prevent cerebral palsy in thousands of newborns every year.",
  },
  {
    id: "p3",
    title: "Skin-to-Skin Care in the NICU",
    category: "NEONATAL",
    description: "Holding a premature baby skin-to-skin may help their heart, temperature, and brain develop faster. This study measures exactly how much it helps.",
    cost: 1,
    risk: "low",
    successRate: 0.90,
    journalWeights: [0.42, 0.30, 0.16, 0.07, 0.04, 0.01], // LR_LR
    impact: "Could shorten NICU stays and improve brain development in premature infants.",
  },
  {
    id: "p24",
    title: "Racial Disparities in Neonatal Heart Surgery Survival",
    category: "NEONATAL",
    description: "New data shows Hispanic and Black newborns are 15–20% more likely to die after heart surgery than white newborns. This study finds out why.",
    cost: 3,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.24, 0.15], // MR_HR
    impact: "Could identify where care disparities occur — and how to fix them.",
  },
  {
    id: "p25",
    title: "Days Alive Outside the Hospital After Neonatal Surgery",
    category: "NEONATAL",
    description: "Instead of just measuring survival, this study measures how many days babies spend at home with their families versus back in the hospital over the following year.",
    cost: 4,
    risk: "low",
    successRate: 0.82,
    journalWeights: [0.05, 0.10, 0.18, 0.27, 0.25, 0.15], // LR_HR — novel outcome measure → top journals
    impact: "Creates a measure of success that captures what families actually care about — time at home.",
  },
  {
    id: "p26",
    title: "Extra Risk for Tiny Newborns in Heart Surgery",
    category: "NEONATAL",
    description: "Very small babies who need heart surgery face far greater danger than larger newborns. This study measures exactly how much lower birth weight raises the risk.",
    cost: 2,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.31, 0.28, 0.21, 0.13, 0.05, 0.02], // MR_LR — descriptive study, modest journals
    impact: "Could change how surgical timing decisions are made for the most vulnerable newborns.",
  },
  {
    id: "p27",
    title: "Prenatal Care Gaps for Babies with Heart Defects",
    category: "NEONATAL",
    description: "Babies with congenital heart disease do better when mothers get proper prenatal care and deliver at a hospital equipped for their condition. This study maps where gaps exist.",
    cost: 2,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could connect more mothers to the right hospital before their baby is born.",
  },
  {
    id: "p28",
    title: "Reducing NICU Infections in Extremely Premature Babies",
    category: "NEONATAL",
    description: "Babies born before 28 weeks are highly vulnerable to hospital infections. This study tests a bundle of prevention practices across many NICUs.",
    cost: 2,
    risk: "high",
    successRate: 0.52,
    journalWeights: [0.33, 0.28, 0.21, 0.12, 0.05, 0.01], // HR_LR — hard to prove, incremental journals
    impact: "Could prevent thousands of life-threatening infections in the most fragile newborns.",
  },
  {
    id: "p29",
    title: "AI Monitoring for Premature Infants in the NICU",
    category: "NEONATAL",
    description: "A new AI system watches vital signs 24/7 and alerts nurses before a premature baby gets dangerously sick — hours earlier than current monitors.",
    cost: 4,
    risk: "high",
    successRate: 0.50,
    journalWeights: [0.03, 0.07, 0.13, 0.27, 0.32, 0.18], // HR_HR
    impact: "Could prevent life-threatening collapses in premature infants by catching warning signs much earlier.",
  },

  // ── CHILD DEVELOPMENT ────────────────────────────────────────────────────
  {
    id: "p4",
    title: "Early Signs of Autism in Infants",
    category: "DEVELOPMENT",
    description: "Scientists want to find signs of autism in babies as young as 6 months by watching how they look at faces and respond to sounds.",
    cost: 3,
    risk: "low",
    successRate: 0.82,
    journalWeights: [0.05, 0.10, 0.18, 0.29, 0.24, 0.14], // LR_HR — autism + early detection = top journals
    impact: "Earlier diagnosis means earlier therapy — leading to much better outcomes for autistic children.",
  },
  {
    id: "p5",
    title: "Language Development in Toddlers",
    category: "DEVELOPMENT",
    description: "Why do some toddlers learn to talk later than others? This study looks at brain scans and home environment to find out.",
    cost: 1,
    risk: "low",
    successRate: 0.88,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could help identify speech delays early and improve literacy for millions of children.",
  },
  {
    id: "p6",
    title: "Screen Time and Toddler Brain Development",
    category: "DEVELOPMENT",
    description: "Does watching videos slow down how babies learn to talk and think? Researchers will track 500 toddlers over two years.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.14, 0.20, 0.26, 0.25, 0.11, 0.04], // MR_MR
    impact: "Could reshape pediatric screen-time guidelines used by families worldwide.",
  },

  // ── CHILDHOOD INFECTIONS ─────────────────────────────────────────────────
  {
    id: "p7",
    title: "RSV Vaccine for Newborns",
    category: "INFECTIOUS",
    description: "RSV sends thousands of babies to the hospital every winter. This study tests a new vaccine given right after birth.",
    cost: 5,
    risk: "high",
    successRate: 0.50,
    journalWeights: [0.03, 0.07, 0.12, 0.27, 0.33, 0.18], // HR_HR
    impact: "Could prevent the #1 cause of infant hospitalization in the first year of life.",
  },
  {
    id: "p8",
    title: "Stopping the Spread of Ear Infections",
    category: "INFECTIOUS",
    description: "Ear infections are the most common reason kids visit the doctor. Researchers test a new prevention approach in daycare settings.",
    cost: 1,
    risk: "low",
    successRate: 0.90,
    journalWeights: [0.41, 0.29, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could cut antibiotic use in young children and reduce hearing problems.",
  },
  {
    id: "p9",
    title: "Antibiotic Resistance in Sick Children",
    category: "INFECTIOUS",
    description: "Some germs no longer respond to antibiotics. This study finds new treatments for children with infections that don't get better.",
    cost: 4,
    risk: "high",
    successRate: 0.45,
    journalWeights: [0.03, 0.07, 0.13, 0.26, 0.33, 0.18], // HR_HR
    impact: "Could protect children from infections that are currently untreatable.",
  },

  // ── NUTRITION & GROWTH ───────────────────────────────────────────────────
  {
    id: "p10",
    title: "Breastfeeding and Infant Gut Health",
    category: "NUTRITION",
    description: "The bacteria in a baby's belly affect their whole health. Researchers want to understand how breast milk shapes these bacteria.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.14, 0.20, 0.26, 0.24, 0.12, 0.04], // MR_MR
    impact: "Could improve feeding guidelines and reduce asthma and allergies in children.",
  },
  {
    id: "p11",
    title: "Iron Deficiency in Toddlers",
    category: "NUTRITION",
    description: "Many toddlers don't get enough iron, which slows brain growth. This study tests a simple food-based fix that families can afford.",
    cost: 1,
    risk: "low",
    successRate: 0.90,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could improve brain development and school readiness in millions of young children.",
  },
  {
    id: "p12",
    title: "Childhood Obesity Prevention Program",
    category: "NUTRITION",
    description: "A school-based program teaching kids about healthy food and movement — starting in kindergarten.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.15, 0.21, 0.25, 0.24, 0.11, 0.04], // MR_MR
    impact: "Could lower childhood obesity rates and reduce lifelong risk of diabetes and heart disease.",
  },

  // ── RARE CHILDHOOD DISEASES ──────────────────────────────────────────────
  {
    id: "p13",
    title: "Gene Therapy for Childhood Leukemia",
    category: "RARE",
    description: "Using the body's own immune cells to hunt and destroy leukemia cells in children who haven't responded to other treatments.",
    cost: 5,
    risk: "high",
    successRate: 0.48,
    journalWeights: [0.03, 0.07, 0.12, 0.27, 0.33, 0.18], // HR_HR
    impact: "Could cure leukemia for children with the hardest-to-treat cases.",
  },
  {
    id: "p14",
    title: "Treatment for Cystic Fibrosis in Children",
    category: "RARE",
    description: "A new inhaled medicine that helps children with cystic fibrosis breathe more easily and stay out of the hospital.",
    cost: 4,
    risk: "high",
    successRate: 0.52,
    journalWeights: [0.03, 0.08, 0.13, 0.27, 0.31, 0.18], // HR_HR
    impact: "Could add years to the lives of children living with cystic fibrosis.",
  },

  // ── CHILD MENTAL HEALTH ──────────────────────────────────────────────────
  {
    id: "p15",
    title: "Anxiety in Elementary School Children",
    category: "MENTAL_HEALTH",
    description: "One in five children has an anxiety disorder. This study tests a simple classroom program that teaches kids how to calm worried thoughts.",
    cost: 1,
    risk: "low",
    successRate: 0.88,
    journalWeights: [0.39, 0.30, 0.18, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could help millions of anxious children thrive in school and at home.",
  },
  {
    id: "p16",
    title: "Stress and Resilience in Children's Brain Development",
    category: "MENTAL_HEALTH",
    description: "Hard experiences early in life can affect how the brain grows. This research studies what helps children build resilience and bounce back stronger.",
    cost: 4,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // MR_HR
    impact: "Could transform how pediatric mental health programs help children build resilience and thrive.",
  },

  // ── INJURY PREVENTION ────────────────────────────────────────────────────
  {
    id: "p17",
    title: "Safer Playgrounds for Young Children",
    category: "INJURY",
    description: "Researchers will study which playground surfaces and equipment designs cause the fewest injuries in children under 5.",
    cost: 1,
    risk: "low",
    successRate: 0.92,
    journalWeights: [0.42, 0.29, 0.17, 0.07, 0.04, 0.01], // LR_LR
    impact: "Could update national playground safety standards and prevent thousands of childhood injuries.",
  },
  {
    id: "p18",
    title: "Car Seat Safety for Premature Infants",
    category: "INJURY",
    description: "Standard car seats may not protect the smallest babies. This study designs and tests a better seat for infants born too early.",
    cost: 2,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.18, 0.25, 0.27, 0.18, 0.09, 0.03], // LR_MR
    impact: "Could reduce injury and death for premature babies going home from the NICU.",
  },

  // ── HEALTH SYSTEMS & POLICY ──────────────────────────────────────────────
  {
    id: "p19",
    title: "Medicaid Coverage Gaps for Newborns",
    category: "HEALTH_SYSTEMS",
    description: "Some newborns fall through gaps in Medicaid in their first weeks of life. This study maps exactly where the gaps are and who is most affected.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.14, 0.20, 0.26, 0.24, 0.12, 0.04], // MR_MM
    impact: "Could lead to policy fixes that ensure every newborn has health insurance from day one.",
  },
  {
    id: "p20",
    title: "Telehealth for Children in Underserved Communities",
    category: "HEALTH_SYSTEMS",
    description: "Families in low-income neighborhoods often can't get to a pediatrician. This study tests whether video visits actually close that gap.",
    cost: 2,
    risk: "high",
    successRate: 0.55,
    journalWeights: [0.33, 0.27, 0.22, 0.12, 0.05, 0.01], // HR_LR — many telehealth studies fail to show impact; modest journals
    impact: "Could expand quality pediatric care to millions of children who currently go without.",
  },
  {
    id: "p21",
    title: "Racial Disparities in NICU Care",
    category: "HEALTH_SYSTEMS",
    description: "Black and Latino newborns in NICUs often receive different care than white newborns. This study identifies exactly where disparities occur and why.",
    cost: 3,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.24, 0.15], // MR_HR
    impact: "Could drive policy changes that ensure every premature baby gets the same quality of care.",
  },
  {
    id: "p22",
    title: "Value-Based Payment Models for Pediatric Care",
    category: "HEALTH_SYSTEMS",
    description: "What if doctors were paid based on how healthy their child patients stay? This study tests that idea in real clinics.",
    cost: 4,
    risk: "high",
    successRate: 0.52,
    journalWeights: [0.10, 0.18, 0.25, 0.24, 0.15, 0.08], // HR_MR — novel but hard to execute
    impact: "Could redesign how children's healthcare is paid for, rewarding prevention over treatment.",
  },
  {
    id: "p23",
    title: "School-Based Health Centers in High-Need Areas",
    category: "HEALTH_SYSTEMS",
    description: "Health clinics inside schools give kids access to a doctor without missing class. This study measures how much they improve child health.",
    cost: 3,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.05, 0.11, 0.18, 0.28, 0.24, 0.14], // LR_HR
    impact: "Could expand school-based health centers to 10 million children in underserved schools.",
  },
  {
    id: "p34",
    title: "Reducing Paperwork Barriers to Children's Medicaid",
    category: "HEALTH_SYSTEMS",
    description: "Complicated forms cause millions of eligible children to lose Medicaid every year. This study tests simpler enrollment systems.",
    cost: 1,
    risk: "low",
    successRate: 0.88,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could re-enroll millions of children who are eligible for Medicaid but fall through paperwork gaps.",
  },
  {
    id: "p35",
    title: "Child Tax Credit as a Children's Health Policy",
    category: "HEALTH_SYSTEMS",
    description: "When low-income families receive extra cash through tax credits, children get healthier. This study measures how much the Child Tax Credit reduces hospital visits.",
    cost: 3,
    risk: "low",
    successRate: 0.82,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // LR_HR
    impact: "Could strengthen the case for tax policies that directly improve child health and reduce poverty.",
  },
  {
    id: "p36",
    title: "Medicaid Managed Care and Childhood ADHD Rates",
    category: "HEALTH_SYSTEMS",
    description: "ADHD diagnoses have exploded among children on Medicaid. This study investigates whether the type of coverage affects how often children are diagnosed.",
    cost: 2,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.30, 0.28, 0.22, 0.13, 0.05, 0.02], // MR_LR — contentious findings, health econ journal
    impact: "Could reveal whether financial incentives in Medicaid are driving overdiagnosis in children.",
  },
  {
    id: "p37",
    title: "Behavioral Health Services for Children in Foster Care",
    category: "HEALTH_SYSTEMS",
    description: "Children in foster care often have unmet mental health needs but many never receive services. This study maps access to home-based care and tests new ways to reach them.",
    cost: 2,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.19, 0.25, 0.26, 0.18, 0.09, 0.03], // LR_MR
    impact: "Could expand mental health services for one of the most vulnerable groups of children.",
  },
  {
    id: "p38",
    title: "Homelessness, Shelters, and Children's Mental Health",
    category: "HEALTH_SYSTEMS",
    description: "Children living in shelters have far higher rates of mental illness and school absences. This study uses Medicaid records to find what services help most.",
    cost: 3,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.13, 0.20, 0.26, 0.25, 0.12, 0.04], // MR_MR
    impact: "Could change how shelter systems provide mental health support for families with children.",
  },
  {
    id: "p39",
    title: "Right-to-Counsel Housing Law and Birth Outcomes",
    category: "HEALTH_SYSTEMS",
    description: "When low-income tenants facing eviction get free legal help, they're less likely to lose their homes. This study measures whether that protection leads to healthier pregnancies.",
    cost: 3,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.24, 0.15], // MR_HR — novel natural experiment
    impact: "Could show that tenant protection laws are also effective public health policies for babies.",
  },
  {
    id: "p40",
    title: "Pre-K Expansion and Children's Healthcare Use",
    category: "HEALTH_SYSTEMS",
    description: "When cities expand free pre-K, do children get healthier? This study follows children before and after their city expanded Pre-K access.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.15, 0.20, 0.26, 0.24, 0.11, 0.04], // MR_MR
    impact: "Could establish early education as a direct driver of child health — strengthening the case for universal Pre-K.",
  },
  {
    id: "p41",
    title: "Vaccine Uptake Disparities by Race and Neighborhood",
    category: "HEALTH_SYSTEMS",
    description: "Vaccination rates for MMR vary dramatically by race, income, and zip code. This study maps gaps and tests targeted outreach.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.14, 0.21, 0.26, 0.24, 0.11, 0.04], // MR_MR
    impact: "Could prevent outbreaks of measles and other preventable diseases in under-vaccinated communities.",
  },
  {
    id: "p42",
    title: "WIC Prenatal Participation and Infant Health",
    category: "HEALTH_SYSTEMS",
    description: "WIC provides food support to low-income pregnant women. This study measures how much prenatal WIC participation improves infant birth weight and first-year health.",
    cost: 1,
    risk: "low",
    successRate: 0.88,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could strengthen federal nutrition programs by demonstrating their direct impact on infant health.",
  },
  {
    id: "p43",
    title: "Gentrification and Childhood Obesity in Public Housing",
    category: "HEALTH_SYSTEMS",
    description: "When neighborhoods gentrify, rising stress and displacement may worsen child health even as food options improve. This study tracks obesity rates as neighborhoods change.",
    cost: 2,
    risk: "high",
    successRate: 0.50,
    journalWeights: [0.32, 0.28, 0.22, 0.12, 0.05, 0.01], // HR_LR — hard causal inference, contested, modest journals
    impact: "Could show how housing policy and neighborhood change affect children's physical health.",
  },
  {
    id: "p44",
    title: "Postpartum Medicaid Coverage and Maternal Health",
    category: "HEALTH_SYSTEMS",
    description: "Many mothers lose Medicaid just 60 days after giving birth. This study tests whether continuous coverage through the full postpartum year improves outcomes.",
    cost: 3,
    risk: "low",
    successRate: 0.82,
    journalWeights: [0.05, 0.10, 0.18, 0.29, 0.24, 0.14], // LR_HR
    impact: "Could change federal policy to extend Medicaid for new mothers through the full postpartum year.",
  },

  // ── CONGENITAL HEART DISEASE ──────────────────────────────────────────────
  {
    id: "p30",
    title: "Social Factors Affecting Heart Surgery Outcomes",
    category: "CARDIO",
    description: "Children from low-income neighborhoods do worse after heart surgery — not because of the surgery itself, but because of what happens when they go home. This study identifies the key factors.",
    cost: 3,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.24, 0.15], // MR_HR
    impact: "Could reshape post-surgical support programs to address the root causes of poor outcomes.",
  },
  {
    id: "p31",
    title: "Long-Term Survival After Congenital Heart Surgery",
    category: "CARDIO",
    description: "Most studies only follow children for 30 days after heart surgery. This landmark study follows thousands of children for 10 years using linked Medicaid records.",
    cost: 4,
    risk: "low",
    successRate: 0.80,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // LR_HR — landmark longitudinal
    impact: "Creates the first long-term survival roadmap for children born with heart defects in the US.",
  },
  {
    id: "p32",
    title: "AI Electrocardiogram for Children with Repaired Heart Defects",
    category: "CARDIO",
    description: "An AI model that reads heart electrical signals can detect dangerous changes in children whose heart defects were repaired — before they feel any symptoms.",
    cost: 5,
    risk: "high",
    successRate: 0.48,
    journalWeights: [0.03, 0.07, 0.12, 0.27, 0.33, 0.18], // HR_HR
    impact: "Could prevent sudden cardiac events in tens of thousands of children living with repaired heart defects.",
  },
  {
    id: "p33",
    title: "Public Reporting and Hospital Selection in Pediatric Heart Surgery",
    category: "CARDIO",
    description: "When hospitals publish surgery outcomes publicly, do they start selecting only easier cases to look better? This study examines how public reporting changes which children get treated where.",
    cost: 2,
    risk: "high",
    successRate: 0.50,
    journalWeights: [0.33, 0.27, 0.22, 0.12, 0.05, 0.01], // HR_LR — niche policy study, modest journals
    impact: "Could improve how hospital report cards are designed so complex patients still get care.",
  },

  // ── MORE CHILD DEVELOPMENT ────────────────────────────────────────────────
  {
    id: "p45",
    title: "Poverty and Early Brain Development",
    category: "DEVELOPMENT",
    description: "Brain scans of young children from low-income families show differences in regions linked to language and memory. This study tests whether early support programs can close the gap.",
    cost: 4,
    risk: "low",
    successRate: 0.80,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // LR_HR
    impact: "Could reshape early childhood programs to target the most critical windows of brain development.",
  },
  {
    id: "p46",
    title: "Bilingual Brain Development in Young Children",
    category: "DEVELOPMENT",
    description: "Children who grow up speaking two languages may develop certain thinking skills earlier. This study measures brain activity in bilingual toddlers to understand why.",
    cost: 2,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.14, 0.20, 0.26, 0.25, 0.11, 0.04], // MR_MR
    impact: "Could inform bilingual education policies and support immigrant families.",
  },

  // ── MORE CHILDHOOD INFECTIONS ─────────────────────────────────────────────
  {
    id: "p47",
    title: "Long COVID Symptoms in School-Age Children",
    category: "INFECTIOUS",
    description: "Some children have ongoing symptoms months after COVID infection — fatigue, brain fog, and missed school. This study tracks which children are most affected and what helps them recover.",
    cost: 3,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // MR_HR — high public interest
    impact: "Could guide return-to-school policies and treatment for millions of children with lingering COVID symptoms.",
  },
  {
    id: "p48",
    title: "Flu Vaccine Effectiveness in Daycare Settings",
    category: "INFECTIOUS",
    description: "Flu spreads fast in daycare centers. This study measures how well current vaccines work in the youngest children and whether staff vaccination protects infants.",
    cost: 1,
    risk: "low",
    successRate: 0.90,
    journalWeights: [0.41, 0.29, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could strengthen flu vaccination recommendations for infants and childcare workers.",
  },

  // ── MORE NUTRITION & GROWTH ───────────────────────────────────────────────
  {
    id: "p49",
    title: "Food Deserts and Childhood Nutrition",
    category: "NUTRITION",
    description: "Many children live in neighborhoods with no grocery stores. This study tracks what children eat in food deserts and tests whether mobile food programs improve nutrition.",
    cost: 3,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.05, 0.11, 0.18, 0.28, 0.24, 0.14], // MR_HR
    impact: "Could support policy changes that bring healthy food access to millions of children in underserved communities.",
  },
  {
    id: "p50",
    title: "Vitamin D Deficiency in Newborns",
    category: "NUTRITION",
    description: "Many newborns — especially those in northern states — are born with low vitamin D, which is critical for bone growth and immune development.",
    cost: 1,
    risk: "low",
    successRate: 0.90,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could update newborn supplementation guidelines and prevent rickets in thousands of infants.",
  },

  // ── MORE RARE CHILDHOOD DISEASES ─────────────────────────────────────────
  {
    id: "p51",
    title: "Sickle Cell Disease Pain Management in Children",
    category: "RARE",
    description: "Sickle cell disease causes episodes of severe pain that send children to the emergency room repeatedly. This study tests a non-opioid pain management protocol designed for kids.",
    cost: 4,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // MR_HR
    impact: "Could reduce ER visits and opioid exposure for thousands of children with sickle cell disease.",
  },
  {
    id: "p52",
    title: "Gene Editing for Duchenne Muscular Dystrophy",
    category: "RARE",
    description: "Duchenne MD causes progressive muscle loss starting in early childhood. A new gene editing approach could restore some protein production — but it has never been tested in children.",
    cost: 6,
    risk: "high",
    successRate: 0.45,
    journalWeights: [0.03, 0.07, 0.12, 0.27, 0.33, 0.18], // HR_HR — moonshot
    impact: "Could be the first treatment to slow or stop muscle deterioration in boys with Duchenne MD.",
  },
  {
    id: "p53",
    title: "Newborn Screening for Rare Metabolic Diseases",
    category: "RARE",
    description: "Many rare but treatable conditions are currently missed at birth because newborn screening panels vary by state. This study tests expanding the national screening panel.",
    cost: 3,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // LR_HR — policy impact + rare disease advocacy
    impact: "Could ensure that thousands of newborns with treatable conditions are identified before symptoms cause permanent damage.",
  },

  // ── MORE CHILD MENTAL HEALTH ──────────────────────────────────────────────
  {
    id: "p54",
    title: "Parent Mental Health After a NICU Stay",
    category: "MENTAL_HEALTH",
    description: "Parents of premature babies often leave the NICU with PTSD and severe anxiety. This study tests a peer support program that connects NICU parents with trained parent mentors.",
    cost: 2,
    risk: "medium",
    successRate: 0.72,
    journalWeights: [0.14, 0.20, 0.26, 0.25, 0.11, 0.04], // MR_MR
    impact: "Could improve mental health outcomes for tens of thousands of NICU parents and the babies who depend on them.",
  },
  {
    id: "p55",
    title: "Social Media Use and Teen Depression",
    category: "MENTAL_HEALTH",
    description: "Teen depression rates have risen sharply alongside smartphone use. This study follows 2,000 adolescents over two years to measure the relationship between social media habits and mental health.",
    cost: 4,
    risk: "medium",
    successRate: 0.70,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.25, 0.14], // MR_HR — very high public interest
    impact: "Could provide the evidence base for school social media policies and app design standards that protect teen mental health.",
  },
  {
    id: "p56",
    title: "ADHD Diagnosis and School Support Programs",
    category: "MENTAL_HEALTH",
    description: "Children diagnosed with ADHD get very different support depending on their school district. This study compares which classroom interventions actually improve focus and learning.",
    cost: 2,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.18, 0.25, 0.27, 0.18, 0.09, 0.03], // LR_MR
    impact: "Could standardize school support programs for children with ADHD across the country.",
  },

  // ── MORE INJURY PREVENTION ────────────────────────────────────────────────
  {
    id: "p57",
    title: "Drowning Prevention and Water Safety for Young Children",
    category: "INJURY",
    description: "Drowning is the leading cause of accidental death in children ages 1–4. This study tests a community swimming lesson program in low-income neighborhoods.",
    cost: 1,
    risk: "low",
    successRate: 0.90,
    journalWeights: [0.40, 0.30, 0.17, 0.08, 0.04, 0.01], // LR_LR
    impact: "Could reduce drowning deaths in young children and inform new community pool access programs.",
  },
  {
    id: "p58",
    title: "Medication Poisoning Prevention in Homes with Children",
    category: "INJURY",
    description: "Hundreds of thousands of children are accidentally poisoned by household medications every year. This study tests child-safe packaging and home education programs.",
    cost: 3,
    risk: "low",
    successRate: 0.85,
    journalWeights: [0.05, 0.10, 0.18, 0.29, 0.24, 0.14], // LR_HR
    impact: "Could prevent one of the most common causes of emergency room visits in children under 5.",
  },

  // ── MORE CONGENITAL HEART DISEASE ─────────────────────────────────────────
  {
    id: "p59",
    title: "Remote Monitoring for Children with Repaired Heart Defects",
    category: "CARDIO",
    description: "Children who had heart surgery as infants need lifelong monitoring. A wearable device paired with a smartphone app allows families to track heart rhythms at home.",
    cost: 4,
    risk: "medium",
    successRate: 0.68,
    journalWeights: [0.05, 0.10, 0.18, 0.28, 0.24, 0.15], // MR_HR
    impact: "Could catch dangerous heart rhythm changes earlier in tens of thousands of children living with repaired heart defects.",
  },
];

// Random events — cutPct is the fraction of current budget lost (e.g. 0.15 = 15%)
export const RANDOM_EVENTS = [
  { id: "e1", title: "New Administration Priorities",  description: "The new administration is shifting federal funding away from pediatric research toward other programs.", cutPct: 0.15 },
  { id: "e2", title: "Congressional Budget Cuts",       description: "Congress passed across-the-board spending reductions. Your institute's budget took a hit.", cutPct: 0.12 },
  { id: "e3", title: "Inflation Increases Lab Costs",   description: "Rising costs for equipment and supplies have eaten into your available research dollars.", cutPct: 0.08 },
  { id: "e4", title: "Emergency Reallocation",          description: "An unexpected public health crisis has redirected funds away from your research portfolio this quarter.", cutPct: 0.18 },
  { id: "e5", title: "Grant Review Delays",             description: "Administrative delays in grant processing have frozen a portion of your funds temporarily.", cutPct: 0.07 },
  { id: "e6", title: "Research Priority Shift",         description: "NIH leadership has redirected discretionary funds toward newly identified national health priorities.", cutPct: 0.12 },
  { id: "e7", title: "Facility Maintenance Required",   description: "Critical lab equipment needs urgent repair or replacement, pulling from your research budget.", cutPct: 0.06 },
  { id: "e8", title: "Regulatory Review Costs",         description: "A new compliance requirement means unexpected administrative costs for your active studies.", cutPct: 0.05 },
];

export const LEVEL_THRESHOLDS = {
  1: { title: "Research Scientist",     badge: "🔬", requiredPrestige: 0  },
  2: { title: "Senior Scientist",       badge: "🔭", requiredPrestige: 8  },
  3: { title: "Principal Investigator", badge: "🎓", requiredPrestige: 20 },
  4: { title: "Division Director",      badge: "🏆", requiredPrestige: 45 },
  5: { title: "NIH Director",           badge: "👑", requiredPrestige: 80 },
};
