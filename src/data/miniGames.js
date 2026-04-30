// Peer review — show 3 studies, pick the one with the BIGGEST IMPACT.
// Impact can mean broad reach (many children) OR transformative depth (huge change for fewer children).
export const PEER_REVIEW_ROUNDS = [
  {
    id: "pr1",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "New medicine for a rare disease affecting 200 children in the US",
        impact: "medium",
        desc: "Life-changing for those 200 families — but very few children would benefit overall.",
      },
      {
        title: "Better school lunch program that could reach 30 million kids",
        impact: "large",
        desc: "Healthier meals every single day for tens of millions of children across the country.",
      },
      {
        title: "Study on why some toddlers prefer broccoli over cookies",
        impact: "small",
        desc: "Interesting science, but unlikely to change any health outcomes.",
      },
    ],
    correctIndex: 1,
    explanation: "When a change is meaningful AND reaches 30 million children, the total impact is enormous. Scale matters — even a smaller benefit per child adds up.",
  },
  {
    id: "pr2",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Vaccine that prevents RSV, the #1 cause of infant hospitalization",
        impact: "large",
        desc: "RSV sends hundreds of thousands of babies to the hospital every year — this could prevent serious illness and death.",
      },
      {
        title: "New bottle design that might reduce gas in some infants",
        impact: "small",
        desc: "Affects many babies, but the discomfort is minor and temporary.",
      },
      {
        title: "Better playground equipment for one community park",
        impact: "small",
        desc: "Helps local children, but doesn't reach beyond that one park.",
      },
    ],
    correctIndex: 0,
    explanation: "Preventing the #1 cause of infant hospitalization is both wide-reaching and deeply important — it could save lives and prevent serious illness in hundreds of thousands of babies.",
  },
  {
    id: "pr3",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Classroom anxiety program that could be used in every school in the country",
        impact: "large",
        desc: "1 in 5 children has an anxiety disorder. A scalable program could reach millions of children who struggle every day.",
      },
      {
        title: "Custom therapy app for children who speak a rare language",
        impact: "small",
        desc: "Helpful for that community, but very few children could use it.",
      },
      {
        title: "Sleep study of 20 toddlers over one weekend",
        impact: "small",
        desc: "Too small a study to change any guidelines or practices.",
      },
    ],
    correctIndex: 0,
    explanation: "A program that reaches millions of anxious children — and can be used by every teacher — has far greater total impact than a specialized tool that few can access.",
  },
  {
    id: "pr4",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Incremental improvement to a childhood cancer treatment that already has a 95% cure rate",
        impact: "small",
        desc: "Going from 95% to slightly higher is helpful, but the starting point is already excellent.",
      },
      {
        title: "Iron supplement program for toddlers in low-income families",
        impact: "large",
        desc: "Iron deficiency affects 1 in 5 low-income toddlers and permanently slows brain development.",
      },
      {
        title: "Homework stress study at one private school",
        impact: "small",
        desc: "Limited setting — results can't be applied to most children.",
      },
    ],
    correctIndex: 1,
    explanation: "Iron deficiency causes permanent brain damage in millions of toddlers. Fixing it early — with something cheap and scalable — has enormous, lasting impact on learning and development.",
  },
  {
    id: "pr5",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Making children's medicine taste better",
        impact: "small",
        desc: "A nice improvement, but most children who need medicine take it either way.",
      },
      {
        title: "Telehealth therapy connecting rural children to mental health care they can't otherwise access",
        impact: "large",
        desc: "Millions of rural children have no mental health care available at all — this removes that barrier entirely.",
      },
      {
        title: "Study on whether hospital waiting rooms need better toys",
        impact: "small",
        desc: "More comfortable, but doesn't change health outcomes.",
      },
    ],
    correctIndex: 1,
    explanation: "For rural children with no access, telehealth is the difference between getting care and getting nothing. Even if it reaches fewer children than other programs, the impact per child is enormous.",
  },
  {
    id: "pr6",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Tracking how air pollution near roads damages children's lungs — results could change national law",
        impact: "large",
        desc: "Millions of children live near busy roads. Policy change could protect an entire generation.",
      },
      {
        title: "Comparing two brands of baby wipes",
        impact: "small",
        desc: "Both are already safe — marginal difference with no real health effect.",
      },
      {
        title: "A new therapy for a genetic condition affecting 500 children worldwide",
        impact: "medium",
        desc: "Life-changing for those children — but the disease is very rare.",
      },
    ],
    correctIndex: 0,
    explanation: "Research that drives national policy reaches every child near a busy road — potentially tens of millions. When the outcome is policy change, even one study can transform public health.",
  },
  {
    id: "pr7",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A cooling treatment given right after birth to prevent cerebral palsy in oxygen-deprived newborns",
        impact: "large",
        desc: "For newborns who didn't get enough oxygen, this could prevent a lifelong disability — affecting every aspect of their life.",
      },
      {
        title: "An app reminding 2 million kids to drink more water",
        impact: "small",
        desc: "Reaches many children, but most are already adequately hydrated — tiny benefit per child.",
      },
      {
        title: "A survey of 50 children about their favorite school subjects",
        impact: "small",
        desc: "Interesting, but no health outcomes are changed.",
      },
    ],
    correctIndex: 0,
    explanation: "Preventing a permanent disability transforms a child's entire life — their education, independence, and health. Deep impact for fewer children can outweigh a tiny benefit for many.",
  },
  {
    id: "pr8",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Newborn hearing screening in every hospital nationwide",
        impact: "large",
        desc: "Catching hearing loss at birth allows treatment to start immediately — preventing permanent language delays that affect learning for life.",
      },
      {
        title: "A redesign of baby bottles to make cleaning easier for parents",
        impact: "small",
        desc: "Convenient for parents, but no meaningful health benefit for babies.",
      },
      {
        title: "Play therapy program for 12 children at one clinic",
        impact: "small",
        desc: "Valuable locally, but too small to measure or scale.",
      },
    ],
    correctIndex: 0,
    explanation: "Hearing loss caught at birth can be treated before it causes permanent harm. Universal screening reaches every newborn — about 4 million babies a year — and prevents a lifetime of disability.",
  },
  {
    id: "pr9",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Study on whether children prefer red or blue drinking cups",
        impact: "small",
        desc: "No health relevance at all.",
      },
      {
        title: "Specialized therapy for 30 children with a rare genetic syndrome",
        impact: "medium",
        desc: "Meaningful for those families — but the condition is rare.",
      },
      {
        title: "Childhood diabetes prevention program for at-risk kids across the country",
        impact: "large",
        desc: "Type 2 diabetes is rising fast in children and causes lifelong health problems — prevention could protect tens of millions.",
      },
    ],
    correctIndex: 2,
    explanation: "Childhood diabetes causes decades of health problems — heart disease, kidney damage, nerve damage. A prevention program that starts early and reaches millions has a massive long-term impact.",
  },
  {
    id: "pr10",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "New treatment for a rare childhood brain tumor that currently has almost no survivors",
        impact: "large",
        desc: "For the 2,000 children diagnosed each year, this is the difference between life and death.",
      },
      {
        title: "A campaign encouraging millions of kids to take slightly longer walks",
        impact: "small",
        desc: "Healthy, but each child walks just a little more — tiny per-person change.",
      },
      {
        title: "Better cafeteria menus at one children's hospital",
        impact: "small",
        desc: "Good for patients there, but doesn't scale beyond that one building.",
      },
    ],
    correctIndex: 0,
    explanation: "Going from near-zero survival to a real chance at life is one of the biggest possible impacts in medicine. A transformative treatment matters enormously — even for a smaller number of children.",
  },
  {
    id: "pr11",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Nationwide bullying prevention program for middle school students",
        impact: "large",
        desc: "Up to 1 in 5 students is bullied. The mental health effects are serious and long-lasting — and a scalable program could reach millions.",
      },
      {
        title: "Nap tracking study of 10 toddlers over two nights",
        impact: "small",
        desc: "Far too small to draw conclusions or change any guidance.",
      },
      {
        title: "New formula for infants with one specific rare milk allergy",
        impact: "medium",
        desc: "Important for affected infants — but the condition is uncommon.",
      },
    ],
    correctIndex: 0,
    explanation: "Bullying causes real, lasting harm to mental health, school performance, and future outcomes. A program deployed in every middle school protects millions of students.",
  },
  {
    id: "pr12",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Comparison of two brands of children's sunscreen",
        impact: "small",
        desc: "Both are already safe — marginal difference with minimal health effect.",
      },
      {
        title: "Prenatal smoking cessation program for pregnant mothers",
        impact: "large",
        desc: "Smoking during pregnancy causes premature birth, low birth weight, and brain damage. Helping mothers quit protects babies across many health dimensions.",
      },
      {
        title: "Physical therapy improvement for 20 children with spinal cord injuries",
        impact: "medium",
        desc: "Meaningful for those children — but a small population.",
      },
    ],
    correctIndex: 1,
    explanation: "Smoking during pregnancy harms babies in multiple serious ways. A scalable cessation program protects babies from serious harm before they're even born — broad reach and deep impact.",
  },
  {
    id: "pr13",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Early detection program for pre-diabetes in overweight children across the country",
        impact: "large",
        desc: "Pre-diabetes is rising fast in children. Early lifestyle changes can prevent type 2 diabetes and a lifetime of health problems.",
      },
      {
        title: "A new color scheme for pediatric hospital rooms",
        impact: "small",
        desc: "A more calming environment is nice, but doesn't change health outcomes.",
      },
      {
        title: "Study of whether bedtime stories affect sleep in 15 toddlers",
        impact: "small",
        desc: "Far too small a study to change any guidelines.",
      },
    ],
    correctIndex: 0,
    explanation: "Pre-diabetes in children is a growing crisis. Catching it early and making lifestyle changes prevents type 2 diabetes and decades of serious health problems — and the program can reach millions.",
  },
  {
    id: "pr14",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A new design for pediatric stethoscopes",
        impact: "small",
        desc: "A small equipment improvement that doesn't change diagnoses or outcomes.",
      },
      {
        title: "Slightly updating guidelines to recommend 5 vegetable servings per day instead of 3",
        impact: "small",
        desc: "A marginal change to guidelines that are already widely ignored.",
      },
      {
        title: "A treatment that can cure sickle cell disease in children — currently there is no reliable cure",
        impact: "large",
        desc: "Sickle cell causes a lifetime of severe pain crises, organ damage, and early death. A cure transforms everything for children living with it.",
      },
    ],
    correctIndex: 2,
    explanation: "Sickle cell disease means a lifetime of agony for children born with it. A cure — even for a smaller number of children — is one of the most transformative things medicine can achieve. Depth of impact matters.",
  },
  {
    id: "pr15",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Universal vision screening for all children entering kindergarten",
        impact: "large",
        desc: "Undetected vision problems are a leading cause of reading difficulties. Catching them before school starts protects millions of children's ability to learn.",
      },
      {
        title: "Study of lunchbox food preferences in one school over one year",
        impact: "small",
        desc: "Interesting locally, but can't be applied broadly.",
      },
      {
        title: "Ergonomic redesign of toddler shoes",
        impact: "small",
        desc: "Marginally better fit, but no meaningful health outcome change.",
      },
    ],
    correctIndex: 0,
    explanation: "About 1 in 4 children has a vision problem that goes undetected before school. Catching it at kindergarten entry means treatment starts before reading difficulties pile up — with lasting effects on learning.",
  },
  {
    id: "pr16",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "New flavoring for children's vitamins to make them more appealing",
        impact: "small",
        desc: "Slightly more children might take vitamins — minor health benefit.",
      },
      {
        title: "Replacing lead water pipes in cities so children are no longer exposed to lead",
        impact: "large",
        desc: "Lead permanently damages brain development. Millions of children still drink from pipes with lead.",
      },
      {
        title: "Study of 25 children with a rare enzyme deficiency",
        impact: "medium",
        desc: "Meaningful for those families — but the condition is very rare.",
      },
    ],
    correctIndex: 1,
    explanation: "Lead exposure causes permanent, irreversible brain damage in children. There is no safe level of lead. Replacing pipes protects millions of children from harm that cannot be undone — and it's one of the highest-impact public health investments in history.",
  },
  {
    id: "pr17",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Safe sleep education for new parents nationwide to prevent sudden infant death syndrome",
        impact: "large",
        desc: "SIDS claims thousands of infants every year. Simple changes — like sleeping on the back — are proven to reduce the risk significantly.",
      },
      {
        title: "A lullaby app used by parents with newborns",
        impact: "small",
        desc: "Soothing and pleasant, but no evidence it changes health outcomes.",
      },
      {
        title: "Redesigned hospital gowns that are easier to put on children",
        impact: "small",
        desc: "More comfortable for patients, but doesn't change outcomes.",
      },
    ],
    correctIndex: 0,
    explanation: "SIDS is a leading cause of infant death, and safe sleep practices are proven to reduce the risk. A national education program reaches millions of families with simple, life-saving guidance.",
  },
  {
    id: "pr18",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Improved snack options in one school's cafeteria",
        impact: "small",
        desc: "Good for those students, but limited to one school.",
      },
      {
        title: "Dyslexia screening for every child entering first grade, with support for those identified",
        impact: "large",
        desc: "Dyslexia affects up to 1 in 5 children. Identified early, children get the right support. Missed, they fall further behind every year.",
      },
      {
        title: "Study of nap duration preferences in 20 kindergartners",
        impact: "small",
        desc: "Too small to change any guidelines.",
      },
    ],
    correctIndex: 1,
    explanation: "Dyslexia is one of the most common learning differences — affecting up to 20% of children. Early identification and targeted reading support can completely change a child's school trajectory. Missed early, the gap keeps growing.",
  },
  {
    id: "pr19",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Emergency food allergy treatment protocol in every school in the country",
        impact: "large",
        desc: "Food allergies affect 6 million children. Anaphylaxis can be fatal in minutes — and most schools don't have the right protocols or medication.",
      },
      {
        title: "Study of playground color preferences in 3 schools",
        impact: "small",
        desc: "Interesting for designers, but no health impact.",
      },
      {
        title: "New formulation of a children's vitamin C supplement",
        impact: "small",
        desc: "Marginal nutritional change with no meaningful health outcome.",
      },
    ],
    correctIndex: 0,
    explanation: "Anaphylaxis can kill a child in minutes. Food allergies affect 6 million children in the US, and every school needs the right protocols and medications. A nationwide program could be the difference between life and death.",
  },
  {
    id: "pr20",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A program connecting low-income children to regular pediatric checkups and developmental screenings",
        impact: "large",
        desc: "Millions of children miss key checkups every year. Early screenings catch vision problems, hearing loss, and developmental delays when they are easiest to treat.",
      },
      {
        title: "Improved wheel design for children's wheelchairs",
        impact: "medium",
        desc: "Important for children who use them, but a smaller group.",
      },
      {
        title: "Study of 12 children's athletic performance over one summer",
        impact: "small",
        desc: "Too small to draw any useful conclusions.",
      },
    ],
    correctIndex: 0,
    explanation: "Regular checkups catch vision problems, hearing loss, and developmental delays early — when they're easiest to fix. Millions of children in low-income families miss these visits every year, and the gaps compound over time.",
  },
  {
    id: "pr21",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Treatment to prevent cytomegalovirus from causing deafness and brain damage in newborns",
        impact: "large",
        desc: "CMV is the most common congenital infection and the #1 non-genetic cause of childhood hearing loss and brain damage — affecting thousands of babies each year.",
      },
      {
        title: "New coloring book design for pediatric waiting rooms",
        impact: "small",
        desc: "Pleasant for children, but no health outcome is changed.",
      },
      {
        title: "Study of hospital volunteer program satisfaction scores",
        impact: "small",
        desc: "Useful for management, but no direct effect on child health.",
      },
    ],
    correctIndex: 0,
    explanation: "CMV causes thousands of cases of childhood hearing loss and brain damage every year — it is the leading non-genetic cause. A prevention treatment would protect thousands of babies from permanent disability before they're even born.",
  },
  {
    id: "pr22",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Redesigned hospital gown patterns for children",
        impact: "small",
        desc: "More comfortable, but no change in health outcomes.",
      },
      {
        title: "Study of 15 toddlers' color recognition",
        impact: "small",
        desc: "Interesting developmental science, but too small to matter broadly.",
      },
      {
        title: "Universal newborn screening for congenital hypothyroidism — a simple blood test that prevents severe intellectual disability",
        impact: "large",
        desc: "Hypothyroidism affects 1 in 2,000 newborns. Untreated, it causes profound intellectual disability. A simple blood test and lifelong hormone treatment means completely normal development.",
      },
    ],
    correctIndex: 2,
    explanation: "Congenital hypothyroidism is completely preventable — with a single blood test at birth and inexpensive treatment. Without it, children develop severe intellectual disability. Universal screening costs almost nothing and prevents lifelong disability.",
  },
  {
    id: "pr23",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Teaching CPR to all children starting in 5th grade",
        impact: "large",
        desc: "Cardiac arrest survival doubles when CPR starts immediately. Children who know CPR can save parents, siblings, or strangers — and respond faster than adults.",
      },
      {
        title: "New uniform design for pediatric nurses",
        impact: "small",
        desc: "More comfortable for staff, no direct impact on child health outcomes.",
      },
      {
        title: "Study of 20 children's reactions to different hospital room temperatures",
        impact: "small",
        desc: "Might inform facility management, but doesn't change health outcomes.",
      },
    ],
    correctIndex: 0,
    explanation: "Cardiac arrest survival doubles when CPR starts immediately. Teaching every child CPR creates millions of potential lifesavers — children act fast and can save adults in their lives. Scale meets deep impact.",
  },
  {
    id: "pr24",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Home visiting program for new parents that supports baby brain development and school readiness",
        impact: "large",
        desc: "Trained visitors help new parents learn how to support their baby's brain development through talking, reading, and play — boosting school readiness for thousands of children.",
      },
      {
        title: "A new formula for diaper rash cream",
        impact: "small",
        desc: "Modestly helpful — diaper rash is temporary and not medically serious.",
      },
      {
        title: "Study of sleep positions in 10 healthy infants",
        impact: "small",
        desc: "Too small to change any guidelines.",
      },
    ],
    correctIndex: 0,
    explanation: "Home visiting programs give new parents the tools to support their baby's brain development from the very start. Children in these programs arrive at kindergarten healthier and more ready to learn.",
  },
  {
    id: "pr25",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A treatment that allows children with spinal muscular atrophy to sit, stand, or walk — a disease that previously meant death before age 2",
        impact: "large",
        desc: "SMA was once a death sentence for babies. A gene therapy that allows a child to stand and walk transforms not just their life but their entire family's.",
      },
      {
        title: "A program encouraging 2 million school children to take slightly longer walks",
        impact: "small",
        desc: "Healthy, but the per-child benefit is tiny.",
      },
      {
        title: "Study of classroom noise levels in one school",
        impact: "small",
        desc: "Might help with one building's layout — too narrow to scale.",
      },
    ],
    correctIndex: 0,
    explanation: "Spinal muscular atrophy went from a death sentence to a disease where children can walk — thanks to gene therapy. Going from death to walking is an almost incomprehensible improvement in a child's life. Deep impact matters enormously.",
  },
  {
    id: "pr26",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Study on whether children prefer hardcover or paperback books",
        impact: "small",
        desc: "Interesting but has no effect on health.",
      },
      {
        title: "Addressing racial disparities in pain treatment for Black children in emergency rooms",
        impact: "large",
        desc: "Studies consistently show Black children receive less pain medication than white children with identical injuries. This affects millions of children and shapes their relationship with healthcare for life.",
      },
      {
        title: "New pediatric blood pressure cuff design",
        impact: "small",
        desc: "Incremental equipment improvement with no meaningful change in outcomes.",
      },
    ],
    correctIndex: 1,
    explanation: "Black children are systematically undertreated for pain in emergency rooms. Addressing this disparity improves care for millions of children — and the harm of under-treated pain affects both immediate suffering and long-term trust in medicine.",
  },
  {
    id: "pr27",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Expanding free dental care to all low-income children nationwide",
        impact: "large",
        desc: "Tooth decay is the most common chronic disease in children — more common than asthma. It causes pain, missed school, and poor nutrition when children can't chew.",
      },
      {
        title: "Study on whether children prefer juice or milk at breakfast",
        impact: "small",
        desc: "An interesting preference question with no new health guidance.",
      },
      {
        title: "New ear thermometer technology for pediatric offices",
        impact: "small",
        desc: "A slight improvement to a tool, not to a health outcome.",
      },
    ],
    correctIndex: 0,
    explanation: "Tooth decay is the #1 chronic disease in children — and it's almost entirely preventable. Untreated, it causes pain, missed school, and nutrition problems. Expanding access to dental care reaches millions of children who currently go without.",
  },
  {
    id: "pr28",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A mental health crisis line available to all children under 12, accessible from any school",
        impact: "large",
        desc: "Millions of young children experience mental health crises with nowhere to turn. Schools are often the only safety net, but lack resources.",
      },
      {
        title: "New artwork installed in children's hospital hallways",
        impact: "small",
        desc: "A more healing environment, but no direct change in health outcomes.",
      },
      {
        title: "Study of music preferences in 50 toddlers",
        impact: "small",
        desc: "Interesting, but no health implications.",
      },
    ],
    correctIndex: 0,
    explanation: "Young children in crisis often have nowhere to turn. A school-accessible crisis line reaches millions of children at the moment they need help most — especially those whose parents are the source of their distress.",
  },
  {
    id: "pr29",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Community health worker program helping low-income families access vaccinations and preventive care",
        impact: "large",
        desc: "Millions of children fall through gaps in the healthcare system. Community health workers navigate the system for families who can't do it alone.",
      },
      {
        title: "New ergonomic design for pediatric waiting room chairs",
        impact: "small",
        desc: "More comfortable, but no change in health outcomes.",
      },
      {
        title: "Study of cartoon character preferences among hospitalized children",
        impact: "small",
        desc: "Might improve hospital décor choices — not a health outcome.",
      },
    ],
    correctIndex: 0,
    explanation: "Community health workers bridge the gap between families and the healthcare system — helping millions of children get vaccinations, screenings, and care they would otherwise miss entirely. It's one of the most effective and scalable interventions in public health.",
  },
  {
    id: "pr30",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A program reducing asthma hospitalizations by teaching families to remove triggers at home",
        impact: "large",
        desc: "Asthma is the #1 cause of pediatric hospitalization. Many triggers — dust, mold, cockroach allergen — are fixable at home with the right guidance.",
      },
      {
        title: "New design for children's hospital beds",
        impact: "small",
        desc: "More comfortable, but doesn't change how many children need to be there.",
      },
      {
        title: "Study of 15 children's favorite hospital activities",
        impact: "small",
        desc: "Useful for activity programming, but no effect on health outcomes.",
      },
    ],
    correctIndex: 0,
    explanation: "Asthma causes more pediatric hospitalizations than any other condition. Home trigger removal is proven, affordable, and scalable — keeping millions of children out of the hospital and breathing better every day.",
  },
  {
    id: "pr31",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "After-school mentoring program connecting students in underserved communities with role models and educational support",
        impact: "large",
        desc: "Students with mentors stay in school longer and are healthier as adults. Education is one of the strongest predictors of lifelong health.",
      },
      {
        title: "Fun cartoon graphics on adhesive bandages for children",
        impact: "small",
        desc: "Cheers children up briefly — no health outcome is changed.",
      },
      {
        title: "Study of nap schedules on one pediatric hospital ward",
        impact: "small",
        desc: "Useful for that ward's operations — too narrow to scale.",
      },
    ],
    correctIndex: 0,
    explanation: "Students with mentors are more likely to stay in school, go to college, and live healthier lives as adults. Education is one of the most powerful predictors of long-term health — and mentoring programs make it accessible to more children.",
  },
  {
    id: "pr32",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "A hospital children's gift shop renovation",
        impact: "small",
        desc: "A nice amenity, but no health outcome change.",
      },
      {
        title: "Expanding Medicaid to cover mental health therapy for all children through age 18",
        impact: "large",
        desc: "Mental health conditions affect 1 in 5 children, but most can't afford therapy. Removing the financial barrier unlocks care for millions.",
      },
      {
        title: "Study on hospital cafeteria operating hours for staff",
        impact: "small",
        desc: "Useful for hospital management — no direct impact on children.",
      },
    ],
    correctIndex: 1,
    explanation: "1 in 5 children has a mental health condition, but most never receive treatment — primarily because of cost. Expanding Medicaid to cover mental health removes the biggest barrier and reaches tens of millions of children who currently go without care.",
  },
  {
    id: "pr33",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Universal jaundice screening and treatment for all newborns",
        impact: "large",
        desc: "Jaundice affects 60% of all newborns. Untreated, it causes permanent brain damage. Detected and treated, outcomes are excellent.",
      },
      {
        title: "A new style of hospital bracelet for newborns",
        impact: "small",
        desc: "A slight update to identification — no health outcome change.",
      },
      {
        title: "Study of cry patterns in 20 premature babies",
        impact: "small",
        desc: "Interesting research, but too small to inform clinical practice.",
      },
    ],
    correctIndex: 0,
    explanation: "Jaundice affects the majority of newborns and causes permanent brain damage if missed. Universal screening and treatment costs little and protects millions of babies — making it one of the highest-value interventions in newborn care.",
  },
  {
    id: "pr34",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Vaccination awareness campaign reaching 50 million families to prevent resurgences of measles and whooping cough",
        impact: "large",
        desc: "Vaccine-preventable diseases are coming back as vaccination rates slip. A national campaign could prevent outbreaks that kill and disable children.",
      },
      {
        title: "Redesigning MRI machines to look less scary for children",
        impact: "small",
        desc: "Reduces anxiety during scans — a real benefit, but minor in scale.",
      },
      {
        title: "Study of 30 children's reactions to different hospital foods",
        impact: "small",
        desc: "Might improve menus — not a health outcome.",
      },
    ],
    correctIndex: 0,
    explanation: "Measles and whooping cough can kill babies and cause deafness and brain damage in children. Reaching 50 million families with accurate information protects millions of children from diseases that were nearly eliminated — and are coming back.",
  },
  {
    id: "pr35",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "New room décor guidelines for pediatric hospital wards",
        impact: "small",
        desc: "A more healing environment — but no change in clinical outcomes.",
      },
      {
        title: "Study of toy preferences in 15 hospitalized children",
        impact: "small",
        desc: "Useful for child life programs in one hospital — not broadly applicable.",
      },
      {
        title: "Expanding newborn screening to catch more treatable metabolic disorders before symptoms appear",
        impact: "large",
        desc: "Many rare metabolic diseases cause severe disability or death if not treated at birth — but are completely manageable with early detection.",
      },
    ],
    correctIndex: 2,
    explanation: "Many metabolic disorders in newborns cause severe intellectual disability or death if missed — but are entirely manageable with early treatment. Expanding the screening panel costs little per baby and can transform the lives of thousands of children who would otherwise suffer preventable harm.",
  },
  {
    id: "pr36",
    question: "Which study would have the biggest impact on children's health?",
    options: [
      {
        title: "Genetic screening to identify children at risk for sudden cardiac death during sports",
        impact: "large",
        desc: "Sudden cardiac death in young athletes is rare — but entirely preventable with screening. For those families, it's the difference between life and death.",
      },
      {
        title: "Study comparing two brands of children's athletic shoes",
        impact: "small",
        desc: "Minor product difference with no health outcome change.",
      },
      {
        title: "Tracking how many children eat breakfast before school in one school district",
        impact: "small",
        desc: "Useful locally, but not generalizable — and doesn't change outcomes on its own.",
      },
    ],
    correctIndex: 0,
    explanation: "Sudden cardiac death in a young athlete is rare — but screening can prevent it entirely, and it's completely devastating for the child, family, and community. When a death is 100% preventable, even rare events justify the intervention.",
  },
];

// Grant scramble — player matches each grant title to the correct research category
export const SCRAMBLE_GRANTS = [
  { id: "sg1",  title: "Testing a new RSV vaccine in newborns",                     category: "INFECTIOUS"     },
  { id: "sg2",  title: "Tracking early signs of autism in 6-month-old babies",      category: "DEVELOPMENT"    },
  { id: "sg3",  title: "Designing safer playground surfaces for toddlers",           category: "INJURY"         },
  { id: "sg4",  title: "Improving iron intake in low-income toddlers",              category: "NUTRITION"      },
  { id: "sg5",  title: "Reducing oxygen damage in premature babies",                category: "NEONATAL"       },
  { id: "sg6",  title: "Measuring how screen time affects toddler speech",          category: "DEVELOPMENT"    },
  { id: "sg7",  title: "Testing a classroom anxiety program for 2nd graders",       category: "MENTAL_HEALTH"  },
  { id: "sg8",  title: "Mapping Medicaid coverage gaps for newborns",               category: "HEALTH_SYSTEMS" },
  { id: "sg9",  title: "Gene therapy for children with leukemia",                   category: "RARE"           },
  { id: "sg10", title: "Ear infection prevention in daycare centers",               category: "INFECTIOUS"     },
  { id: "sg11", title: "Skin-to-skin care outcomes in the NICU",                    category: "NEONATAL"       },
  { id: "sg12", title: "Telehealth pediatric visits in rural communities",          category: "HEALTH_SYSTEMS" },
  { id: "sg13", title: "Car seat design for premature infants leaving the NICU",    category: "INJURY"         },
  { id: "sg14", title: "How breastfeeding shapes infant gut bacteria",              category: "NUTRITION"      },
  { id: "sg15", title: "School-based health clinics in high-need neighborhoods",    category: "HEALTH_SYSTEMS" },
  { id: "sg16", title: "Treating cystic fibrosis in young children",                category: "RARE"           },
  { id: "sg17", title: "Cooling therapy to prevent brain injury at birth",          category: "NEONATAL"       },
  { id: "sg18", title: "How stress affects learning and memory in school-age children", category: "MENTAL_HEALTH"  },
  { id: "sg19", title: "Studying antibiotic resistance in pediatric infections",    category: "INFECTIOUS"     },
  { id: "sg20", title: "Value-based payment models for children's hospitals",       category: "HEALTH_SYSTEMS" },
  { id: "sg21", title: "Language development in toddlers with speech delays",       category: "DEVELOPMENT"    },
  { id: "sg22", title: "Racial disparities in NICU care quality",                  category: "HEALTH_SYSTEMS" },
  { id: "sg23", title: "Obesity prevention starting in kindergarten",               category: "NUTRITION"      },
  { id: "sg24", title: "Childhood anxiety linked to family stress",                 category: "MENTAL_HEALTH"  },
  { id: "sg25", title: "Lead paint testing and removal in older housing",           category: "INJURY"         },
  { id: "sg26", title: "Depression and stress in parents after a NICU stay",       category: "MENTAL_HEALTH"  },
  { id: "sg27", title: "Sickle cell disease pain management in children",          category: "RARE"           },
  { id: "sg28", title: "Food desert access and childhood nutrition in cities",     category: "NUTRITION"      },
  { id: "sg29", title: "Asthma prevention in urban elementary schools",            category: "INFECTIOUS"     },
  { id: "sg30", title: "Prenatal smoking cessation for low-income mothers",        category: "NEONATAL"       },
  { id: "sg31", title: "Bullying prevention programs in middle schools nationwide", category: "MENTAL_HEALTH"  },
  { id: "sg32", title: "Newborn hearing screening coverage in all hospitals",      category: "DEVELOPMENT"    },
  { id: "sg33", title: "Water safety and drowning prevention for young children",  category: "INJURY"         },
  { id: "sg34", title: "Gene editing for Duchenne muscular dystrophy in boys",     category: "RARE"           },
  { id: "sg35", title: "Preventing type 2 diabetes in at-risk children",          category: "NUTRITION"      },
  { id: "sg36", title: "Ten-year survival after congenital heart surgery",         category: "CARDIO"         },
  { id: "sg37", title: "Long COVID symptoms in school-age children",               category: "INFECTIOUS"     },
  { id: "sg38", title: "Social media use and depression in teenagers",             category: "MENTAL_HEALTH"  },
  { id: "sg39", title: "ADHD diagnosis rates under Medicaid vs. private insurance",category: "HEALTH_SYSTEMS" },
  { id: "sg40", title: "Racial disparities in neonatal heart surgery survival",    category: "CARDIO"         },

  // ── Additional NEONATAL ───────────────────────────────────────────────────
  { id: "sg41", title: "Preventing premature birth in high-risk pregnancies",        category: "NEONATAL"       },
  { id: "sg42", title: "Hypothyroid screening for all newborns before hospital discharge", category: "NEONATAL"  },
  { id: "sg43", title: "Jaundice detection and treatment protocols in NICUs",        category: "NEONATAL"       },
  { id: "sg44", title: "Long-term outcomes for babies born before 28 weeks",         category: "NEONATAL"       },
  { id: "sg45", title: "Genetic screening for congenital heart defects before birth",category: "NEONATAL"       },
  { id: "sg46", title: "Safe sleep education for parents to prevent SIDS",           category: "NEONATAL"       },
  { id: "sg47", title: "Maternal diet and preterm birth risk",                       category: "NEONATAL"       },
  { id: "sg48", title: "Pain assessment in non-verbal premature infants",            category: "NEONATAL"       },
  { id: "sg49", title: "Breastfeeding support programs in neonatal intensive care",  category: "NEONATAL"       },
  { id: "sg50", title: "Oxygen therapy protocols for very premature babies",         category: "NEONATAL"       },

  // ── Additional DEVELOPMENT ────────────────────────────────────────────────
  { id: "sg51", title: "Early reading program for toddlers in low-income families",  category: "DEVELOPMENT"    },
  { id: "sg52", title: "Autism therapy effectiveness in children under 3",           category: "DEVELOPMENT"    },
  { id: "sg53", title: "Motor skill development in children with cerebral palsy",    category: "DEVELOPMENT"    },
  { id: "sg54", title: "Effects of music education on early brain development",      category: "DEVELOPMENT"    },
  { id: "sg55", title: "Developmental outcomes for children in foster care",         category: "DEVELOPMENT"    },
  { id: "sg56", title: "Vision screening for all children entering kindergarten",    category: "DEVELOPMENT"    },
  { id: "sg57", title: "How poverty affects executive function in young children",   category: "DEVELOPMENT"    },
  { id: "sg58", title: "Early intervention programs for children with Down syndrome",category: "DEVELOPMENT"    },
  { id: "sg59", title: "Bilingual language development in immigrant families",       category: "DEVELOPMENT"    },
  { id: "sg60", title: "Reducing summer learning loss for low-income children",      category: "DEVELOPMENT"    },

  // ── Additional INFECTIOUS ─────────────────────────────────────────────────
  { id: "sg61", title: "COVID-19 vaccination safety and effectiveness in toddlers",  category: "INFECTIOUS"     },
  { id: "sg62", title: "Hand hygiene programs in elementary schools",                category: "INFECTIOUS"     },
  { id: "sg63", title: "HPV vaccination rates among pre-teens",                      category: "INFECTIOUS"     },
  { id: "sg64", title: "Pneumonia treatment in malnourished children",               category: "INFECTIOUS"     },
  { id: "sg65", title: "Sepsis early detection in pediatric emergency rooms",        category: "INFECTIOUS"     },
  { id: "sg66", title: "Strep throat complications and rheumatic fever in children", category: "INFECTIOUS"     },
  { id: "sg67", title: "Universal flu vaccination in elementary schools",            category: "INFECTIOUS"     },
  { id: "sg68", title: "Preventing CMV infection during pregnancy",                  category: "INFECTIOUS"     },
  { id: "sg69", title: "Reducing hospital-acquired infections in pediatric wards",   category: "INFECTIOUS"     },
  { id: "sg70", title: "Tick-borne illness prevention for children in summer camps", category: "INFECTIOUS"     },

  // ── Additional NUTRITION ──────────────────────────────────────────────────
  { id: "sg71", title: "Sugar-sweetened beverage reduction in middle schools",       category: "NUTRITION"      },
  { id: "sg72", title: "School breakfast participation and academic performance",    category: "NUTRITION"      },
  { id: "sg73", title: "Zinc supplementation in toddlers with growth delays",        category: "NUTRITION"      },
  { id: "sg74", title: "Food insecurity and stunted growth in low-income families",  category: "NUTRITION"      },
  { id: "sg75", title: "Eating disorder prevention programs for adolescent girls",   category: "NUTRITION"      },
  { id: "sg76", title: "Omega-3 supplementation and infant brain development",       category: "NUTRITION"      },
  { id: "sg77", title: "Farm-to-school programs and children's vegetable intake",    category: "NUTRITION"      },
  { id: "sg78", title: "Obesity treatment for children with binge eating disorder",  category: "NUTRITION"      },
  { id: "sg79", title: "Vitamin D deficiency and bone health in newborns",           category: "NUTRITION"      },
  { id: "sg80", title: "Reducing childhood exposure to ultra-processed foods",       category: "NUTRITION"      },

  // ── Additional RARE ───────────────────────────────────────────────────────
  { id: "sg81", title: "Bone marrow transplant outcomes for children with sickle cell disease", category: "RARE" },
  { id: "sg82", title: "Enzyme replacement therapy for Gaucher disease in children", category: "RARE"           },
  { id: "sg83", title: "CAR-T cell therapy for pediatric lymphoma",                  category: "RARE"           },
  { id: "sg84", title: "Gene therapy trials for spinal muscular atrophy in infants", category: "RARE"           },
  { id: "sg85", title: "Early diagnosis of Pompe disease in newborns",               category: "RARE"           },
  { id: "sg86", title: "Newborn treatment for phenylketonuria (PKU)",                category: "RARE"           },
  { id: "sg87", title: "Clinical trial for childhood-onset multiple sclerosis",      category: "RARE"           },
  { id: "sg88", title: "New treatment for juvenile idiopathic arthritis",            category: "RARE"           },
  { id: "sg89", title: "Expanded newborn screening for rare metabolic disorders",    category: "RARE"           },
  { id: "sg90", title: "CRISPR gene editing for childhood hemophilia",               category: "RARE"           },

  // ── Additional MENTAL_HEALTH ──────────────────────────────────────────────
  { id: "sg91", title: "School-based therapy for children with PTSD",               category: "MENTAL_HEALTH"  },
  { id: "sg92", title: "Suicide prevention programs for high school students",       category: "MENTAL_HEALTH"  },
  { id: "sg93", title: "Parent-child interaction therapy for toddlers with behavior problems", category: "MENTAL_HEALTH" },
  { id: "sg94", title: "Mindfulness programs for children with ADHD",               category: "MENTAL_HEALTH"  },
  { id: "sg95", title: "Depression screening in pediatric primary care visits",      category: "MENTAL_HEALTH"  },
  { id: "sg96", title: "Substance use prevention programs for middle schoolers",     category: "MENTAL_HEALTH"  },
  { id: "sg97", title: "Anxiety and autism co-occurrence in school-age children",   category: "MENTAL_HEALTH"  },
  { id: "sg98", title: "Grief counseling for children who lost a parent",           category: "MENTAL_HEALTH"  },
  { id: "sg99", title: "Crisis intervention for children in psychiatric emergency",  category: "MENTAL_HEALTH"  },
  { id: "sg100",title: "Screen time limits and sleep quality in teenagers",          category: "MENTAL_HEALTH"  },

  // ── Additional INJURY ─────────────────────────────────────────────────────
  { id: "sg101",title: "Bicycle helmet use and head injury prevention in children",  category: "INJURY"         },
  { id: "sg102",title: "Safe firearm storage in homes with children",                category: "INJURY"         },
  { id: "sg103",title: "Sports concussion protocols in youth athletics",             category: "INJURY"         },
  { id: "sg104",title: "Fall prevention for toddlers in home environments",          category: "INJURY"         },
  { id: "sg105",title: "Teen driver safety and graduated licensing programs",        category: "INJURY"         },
  { id: "sg106",title: "Burn injury prevention in children under 5",                category: "INJURY"         },
  { id: "sg107",title: "Trampoline safety guidelines for children",                  category: "INJURY"         },
  { id: "sg108",title: "Pedestrian safety education for elementary students",        category: "INJURY"         },
  { id: "sg109",title: "Medication lock-box program to prevent child poisoning",     category: "INJURY"         },
  { id: "sg110",title: "Reducing sports injuries in youth soccer players",           category: "INJURY"         },

  // ── Additional HEALTH_SYSTEMS ─────────────────────────────────────────────
  { id: "sg111",title: "Telehealth expansion for pediatric mental health care",      category: "HEALTH_SYSTEMS" },
  { id: "sg112",title: "Reducing wait times in pediatric emergency departments",     category: "HEALTH_SYSTEMS" },
  { id: "sg113",title: "Community health workers in low-income schools",             category: "HEALTH_SYSTEMS" },
  { id: "sg114",title: "Closing insurance gaps in children's dental coverage",       category: "HEALTH_SYSTEMS" },
  { id: "sg115",title: "Language interpreter services in pediatric clinics",         category: "HEALTH_SYSTEMS" },
  { id: "sg116",title: "Medicaid expansion and children's preventive care use",      category: "HEALTH_SYSTEMS" },
  { id: "sg117",title: "Pediatric palliative care access in rural hospitals",        category: "HEALTH_SYSTEMS" },
  { id: "sg118",title: "Care coordination for children with multiple chronic conditions", category: "HEALTH_SYSTEMS" },
  { id: "sg119",title: "Food pharmacy programs for children with diet-sensitive conditions", category: "HEALTH_SYSTEMS" },
  { id: "sg120",title: "Implicit bias training for pediatricians serving diverse communities", category: "HEALTH_SYSTEMS" },

  // ── Additional CARDIO ─────────────────────────────────────────────────────
  { id: "sg121",title: "Cardiac rehabilitation for children after open heart surgery",category: "CARDIO"        },
  { id: "sg122",title: "Exercise guidelines for children with repaired heart defects",category: "CARDIO"        },
  { id: "sg123",title: "Accuracy of prenatal diagnosis for congenital heart disease", category: "CARDIO"        },
  { id: "sg124",title: "Neurodevelopmental outcomes after infant heart surgery",      category: "CARDIO"        },
  { id: "sg125",title: "Quality of life in teenagers born with heart defects",       category: "CARDIO"        },
  { id: "sg126",title: "Genetic causes of congenital heart defects in newborns",     category: "CARDIO"        },
  { id: "sg127",title: "Transition to adult cardiology care for young adults with CHD", category: "CARDIO"     },
  { id: "sg128",title: "Sudden cardiac death screening in young athletes",           category: "CARDIO"        },
];

export const PEER_REVIEW_REWARD = 0.50;      // $M for correct impact pick
export const SCRAMBLE_REWARD_CORRECT = 0.35; // $M per correct match
export const SCRAMBLE_PENALTY_WRONG  = 0.10; // $M lost per wrong match
