export type Level = "beginner" | "average" | "advanced";

export const videoData: Record<Level, { normal: string; story: string; innovative: string }> = {
  beginner: {
    normal: "2LuSmPp69Ik",
    story: "tbTeeqISUzo",
    innovative: "t5DvF5OVr1Y",
  },
  average: {
    normal: "b0etm8pAfc4",
    story: "TxaIgV0E598",
    innovative: "xtV9mRS3ROU",
  },
  advanced: {
    normal: "eK-NCfvTtIE",
    story: "LFyjJBiltFI",
    innovative: "URUJD5NEXC8",
  },
};

export interface QuizQuestion {
  question: string;
  options: { label: string; value: string }[];
  correct: string | string[];
  type: "single" | "multi";
}

export const quizData: Record<Level, QuizQuestion[]> = {
  beginner: [
    { question: "Why are diagrams important in Biology?", options: [{ label: "Decoration", value: "a" }, { label: "For marks only", value: "b" }, { label: "Better understanding", value: "c" }], correct: "c", type: "single" },
    { question: "Which is rigid in plant cell?", options: [{ label: "Cytoplasm", value: "a" }, { label: "Cell wall", value: "b" }, { label: "Nucleus", value: "c" }], correct: "b", type: "single" },
    { question: "Powerhouse of cell?", options: [{ label: "Mitochondria", value: "a" }, { label: "Ribosome", value: "b" }, { label: "Vacuole", value: "c" }], correct: "a", type: "single" },
    { question: "Which transports water?", options: [{ label: "Phloem", value: "a" }, { label: "Muscle", value: "b" }, { label: "Nerve", value: "c" }, { label: "Xylem", value: "d" }], correct: "d", type: "single" },
    { question: "Chloroplast contains?", options: [{ label: "Protein", value: "a" }, { label: "Fat", value: "b" }, { label: "Chlorophyll", value: "c" }], correct: "c", type: "single" },
    { question: "What improves memory?", options: [{ label: "Diagrams", value: "a" }, { label: "Ignoring", value: "b" }, { label: "Sleeping", value: "c" }], correct: "a", type: "single" },
    { question: "What is meristematic tissue?", options: [{ label: "Dead tissue", value: "a" }, { label: "Growing tissue", value: "b" }, { label: "Blood tissue", value: "c" }], correct: "b", type: "single" },
    { question: "Which tissue helps in movement?", options: [{ label: "Nervous", value: "a" }, { label: "Epithelial", value: "b" }, { label: "Muscular", value: "c" }], correct: "c", type: "single" },
    { question: "Function of phloem?", options: [{ label: "Transport water", value: "a" }, { label: "Protection", value: "b" }, { label: "Movement", value: "c" }, { label: "Transport food", value: "d" }], correct: "d", type: "single" },
    { question: "Which cell has cell wall?", options: [{ label: "Plant cell", value: "a" }, { label: "Animal cell", value: "b" }], correct: "a", type: "single" },
    { question: "Function of nucleus?", options: [{ label: "Energy production", value: "a" }, { label: "Control center", value: "b" }, { label: "Protection", value: "c" }], correct: "b", type: "single" },
    { question: "Why label diagrams?", options: [{ label: "Time waste", value: "a" }, { label: "Decoration", value: "b" }, { label: "Concept clarity", value: "c" }], correct: "c", type: "single" },
    { question: "Which is connective tissue?", options: [{ label: "Blood", value: "a" }, { label: "Skin", value: "b" }], correct: "a", type: "single" },
    { question: "Which tissue sends signals?", options: [{ label: "Muscle", value: "a" }, { label: "Bone", value: "b" }, { label: "Epithelial", value: "c" }, { label: "Nervous", value: "d" }], correct: "d", type: "single" },
    { question: "Why neat diagrams are important?", options: [{ label: "For fun", value: "a" }, { label: "For marks & clarity", value: "b" }], correct: "b", type: "single" },
  ],
  average: [
    { question: "Which tissue is responsible for growth in plants?", options: [{ label: "Permanent tissue", value: "a" }, { label: "Meristematic tissue", value: "b" }, { label: "Connective tissue", value: "c" }, { label: "Muscular tissue", value: "d" }], correct: "b", type: "single" },
    { question: "If xylem is damaged, what will happen?", options: [{ label: "Food transport stops", value: "a" }, { label: "Growth increases", value: "b" }, { label: "Water transport stops", value: "c" }, { label: "Photosynthesis increases", value: "d" }], correct: "c", type: "single" },
    { question: "Which organelle controls cell activities?", options: [{ label: "Nucleus", value: "a" }, { label: "Ribosome", value: "b" }, { label: "Vacuole", value: "c" }, { label: "Cell wall", value: "d" }], correct: "a", type: "single" },
    { question: "Which tissue connects muscles to bones?", options: [{ label: "Ligament", value: "a" }, { label: "Blood", value: "b" }, { label: "Epithelial", value: "c" }, { label: "Tendon", value: "d" }], correct: "d", type: "single" },
    { question: "Why are plant cells rectangular?", options: [{ label: "Due to nucleus", value: "a" }, { label: "Due to cell wall", value: "b" }, { label: "Due to vacuole", value: "c" }, { label: "Due to mitochondria", value: "d" }], correct: "b", type: "single" },
    { question: "Which tissue allows body movement?", options: [{ label: "Epithelial", value: "a" }, { label: "Connective", value: "b" }, { label: "Muscular", value: "c" }, { label: "Nervous", value: "d" }], correct: "c", type: "single" },
    { question: "Phloem transports:", options: [{ label: "Food", value: "a" }, { label: "Water", value: "b" }, { label: "Oxygen", value: "c" }, { label: "Minerals", value: "d" }], correct: "a", type: "single" },
    { question: "Which part stores water in plant cell?", options: [{ label: "Nucleus", value: "a" }, { label: "Ribosome", value: "b" }, { label: "Mitochondria", value: "c" }, { label: "Vacuole", value: "d" }], correct: "d", type: "single" },
    { question: "Which tissue sends signals in body?", options: [{ label: "Muscle", value: "a" }, { label: "Nervous", value: "b" }, { label: "Bone", value: "c" }, { label: "Blood", value: "d" }], correct: "b", type: "single" },
    { question: "Why are diagrams important?", options: [{ label: "Decoration", value: "a" }, { label: "Time waste", value: "b" }, { label: "Concept clarity", value: "c" }, { label: "Entertainment", value: "d" }], correct: "c", type: "single" },
    { question: "Blood is an example of:", options: [{ label: "Connective tissue", value: "a" }, { label: "Muscle tissue", value: "b" }, { label: "Nervous tissue", value: "c" }, { label: "Epithelial tissue", value: "d" }], correct: "a", type: "single" },
    { question: "Chlorophyll is found in:", options: [{ label: "Nucleus", value: "a" }, { label: "Mitochondria", value: "b" }, { label: "Ribosome", value: "c" }, { label: "Chloroplast", value: "d" }], correct: "d", type: "single" },
    { question: "Which cells are dead at maturity?", options: [{ label: "Phloem", value: "a" }, { label: "Xylem", value: "b" }, { label: "Muscle", value: "c" }, { label: "Nerve", value: "d" }], correct: "b", type: "single" },
    { question: "Tendons connect:", options: [{ label: "Bone to bone", value: "a" }, { label: "Blood to muscle", value: "b" }, { label: "Muscle to bone", value: "c" }, { label: "Skin to bone", value: "d" }], correct: "c", type: "single" },
    { question: "Meristematic tissue is found in:", options: [{ label: "Growing tips", value: "a" }, { label: "Leaves only", value: "b" }, { label: "Flowers only", value: "c" }, { label: "Fruits only", value: "d" }], correct: "a", type: "single" },
  ],
  advanced: [
    { question: "Xylem transports water. (Assertion-Reason)", options: [{ label: "Both true & R explains A", value: "a" }, { label: "Both true but not explanation", value: "b" }, { label: "A true, R false", value: "c" }, { label: "A false, R true", value: "d" }], correct: "a", type: "single" },
    { question: "Muscle tissue causes movement. (Assertion-Reason)", options: [{ label: "Both true & R explains A", value: "a" }, { label: "Both true but not explanation", value: "b" }, { label: "A true, R false", value: "c" }, { label: "A false, R true", value: "d" }], correct: "a", type: "single" },
    { question: "Phloem transports water. (Assertion-Reason)", options: [{ label: "Both true & R explains A", value: "a" }, { label: "Both true but not explanation", value: "b" }, { label: "A true, R false", value: "c" }, { label: "A false, R true", value: "d" }], correct: "d", type: "single" },
    { question: "Nervous tissue sends signals. (Assertion-Reason)", options: [{ label: "Both true & R explains A", value: "a" }, { label: "Both true but not explanation", value: "b" }, { label: "A true, R false", value: "c" }, { label: "A false, R true", value: "d" }], correct: "a", type: "single" },
    { question: "Plant cells lack nucleus. (Assertion-Reason)", options: [{ label: "Both true & R explains A", value: "a" }, { label: "Both true but not explanation", value: "b" }, { label: "Both false", value: "c" }, { label: "A false, R true", value: "d" }], correct: "c", type: "single" },
    { question: "Which are connective tissues? (Select all)", options: [{ label: "Blood", value: "a" }, { label: "Muscle", value: "b" }, { label: "Bone", value: "c" }, { label: "Nerve", value: "d" }], correct: ["a", "c"], type: "multi" },
    { question: "Plant cells contain: (Select all)", options: [{ label: "Centrioles", value: "a" }, { label: "Cell wall", value: "b" }, { label: "Lysosome", value: "c" }, { label: "Chloroplast", value: "d" }], correct: ["b", "d"], type: "multi" },
    { question: "Which help in photosynthesis? (Select all)", options: [{ label: "Chloroplast", value: "a" }, { label: "Nucleus", value: "b" }, { label: "Ribosome", value: "c" }, { label: "Chlorophyll", value: "d" }], correct: ["a", "d"], type: "multi" },
    { question: "Which are permanent tissues? (Select all)", options: [{ label: "Meristematic", value: "a" }, { label: "Parenchyma", value: "b" }, { label: "Collenchyma", value: "c" }, { label: "Growing tip", value: "d" }], correct: ["b", "c"], type: "multi" },
    { question: "Functions of nucleus: (Select all)", options: [{ label: "Control cell", value: "a" }, { label: "Store DNA", value: "b" }, { label: "Make food", value: "c" }, { label: "Regulate activities", value: "d" }], correct: ["a", "b", "d"], type: "multi" },
    { question: "If phloem is blocked, plant cannot:", options: [{ label: "Absorb water", value: "a" }, { label: "Respire", value: "b" }, { label: "Transport food", value: "c" }, { label: "Grow roots", value: "d" }], correct: "c", type: "single" },
    { question: "Rapid growth occurs in:", options: [{ label: "Meristematic tissue", value: "a" }, { label: "Permanent tissue", value: "b" }, { label: "Muscle tissue", value: "c" }, { label: "Nervous tissue", value: "d" }], correct: "a", type: "single" },
    { question: "Xylem is mainly composed of:", options: [{ label: "Living cells", value: "a" }, { label: "Muscle cells", value: "b" }, { label: "Blood cells", value: "c" }, { label: "Dead cells", value: "d" }], correct: "d", type: "single" },
    { question: "Tendons connect:", options: [{ label: "Bone to bone", value: "a" }, { label: "Muscle to bone", value: "b" }, { label: "Blood to muscle", value: "c" }, { label: "Skin to bone", value: "d" }], correct: "b", type: "single" },
    { question: "Meristematic tissue found in:", options: [{ label: "Growing tips", value: "a" }, { label: "Leaves only", value: "b" }, { label: "Flowers only", value: "c" }, { label: "Fruits only", value: "d" }], correct: "a", type: "single" },
  ],
};

export const dragDropData = {
  sentences: [
    { text: "The powerhouse of the cell is", answer: "Mitochondria" },
    { text: "The tissue that transports water in plants is", answer: "Xylem" },
    { text: "The control center of the cell is", answer: "Nucleus" },
    { text: "The tissue that transports food in plants is", answer: "Phloem" },
    { text: "The pigment responsible for photosynthesis is found in", answer: "Chloroplast" },
  ],
  options: ["Mitochondria", "Xylem", "Nucleus", "Phloem", "Chloroplast"],
};

export const matchData = {
  items: [
    { term: "Xylem", options: [{ label: "Transport Food", value: "a" }, { label: "Transport Water", value: "b" }, { label: "Control Cell", value: "c" }, { label: "Movement", value: "d" }], correct: "b" },
    { term: "Phloem", options: [{ label: "Transport Food", value: "a" }, { label: "Transport Water", value: "b" }, { label: "Control Cell", value: "c" }, { label: "Movement", value: "d" }], correct: "a" },
    { term: "Nucleus", options: [{ label: "Transport Food", value: "a" }, { label: "Transport Water", value: "b" }, { label: "Control Cell", value: "c" }, { label: "Movement", value: "d" }], correct: "c" },
    { term: "Muscular Tissue", options: [{ label: "Transport Food", value: "a" }, { label: "Transport Water", value: "b" }, { label: "Control Cell", value: "c" }, { label: "Movement", value: "d" }], correct: "d" },
    { term: "Meristematic Tissue", options: [{ label: "Growth", value: "a" }, { label: "Transport Water", value: "b" }, { label: "Control Cell", value: "c" }, { label: "Movement", value: "d" }], correct: "a" },
  ],
};

export const cellLabels = [
  { id: 1, answer: "nucleus" },
  { id: 2, answer: "mitochondria" },
  { id: 3, answer: "vacuole" },
  { id: 4, answer: "cell membrane" },
  { id: 5, answer: "cytoplasm" },
  { id: 6, answer: "ribosome" },
  { id: 7, answer: "golgi apparatus" },
  { id: 8, answer: "endoplasmic reticulum" },
  { id: 9, answer: "lysosome" },
];

export const flowchartData = {
  correctAnswers: { l2b: "cytoplasm", l2c: "nucleus", l4: "controls activities" },
};

export const chatbotResponses: Record<string, string> = {
  "cell": "A cell is the basic structural and functional unit of life. There are two types: Prokaryotic (no nucleus) and Eukaryotic (with nucleus).",
  "mitochondria": "Mitochondria is called the 'Powerhouse of the Cell' because it produces energy (ATP) through cellular respiration.",
  "nucleus": "The Nucleus is the control center of the cell. It contains DNA and controls all cell activities.",
  "xylem": "Xylem is a plant tissue that transports water and minerals from roots to leaves. Xylem cells are dead at maturity.",
  "phloem": "Phloem transports food (sugars) made during photosynthesis from leaves to other parts of the plant.",
  "tissue": "A tissue is a group of cells with similar structure and function. Plant tissues: Meristematic & Permanent. Animal tissues: Epithelial, Connective, Muscular, Nervous.",
  "chloroplast": "Chloroplasts contain chlorophyll, the green pigment that captures sunlight for photosynthesis. Found only in plant cells.",
  "meristematic": "Meristematic tissue is found at growing tips of roots and stems. These cells divide rapidly and are responsible for growth.",
  "muscle": "Muscular tissue is responsible for body movement. It can contract and relax. Three types: Skeletal, Smooth, and Cardiac.",
  "nervous": "Nervous tissue transmits signals (nerve impulses) throughout the body. Neurons are the basic unit of nervous tissue.",
  "vacuole": "Vacuoles are storage organelles. Plant cells have a large central vacuole that stores water and maintains cell turgidity.",
  "hello": "Hello! 👋 I'm your Biology study buddy. Ask me about cells, tissues, or any topic from your lesson!",
  "hi": "Hi there! 🌿 Ready to learn Biology? Ask me anything about cells, tissues, xylem, phloem, and more!",
  "help": "I can help with: Cells, Tissues, Organelles (Nucleus, Mitochondria, Chloroplast), Transport (Xylem, Phloem), and more. Just type a topic!",
};
