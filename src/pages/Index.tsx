import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FlaskConical } from "lucide-react";

const classes = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
const boards = ["CBSE", "ICSE", "State"];
const subjects = ["Biology", "Physics", "Chemistry", "Mathematics", "English"];

const Index = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const navigate = useNavigate();

  const handleProceed = () => {
    if (selectedClass === "9" && selectedBoard === "CBSE" && selectedSubject === "Biology") {
      navigate("/levels");
    } else {
      navigate("/coming-soon");
    }
  };

  const canProceed = selectedClass && selectedBoard && selectedSubject;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero mb-4"
          >
            <GraduationCap className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            BioLearn
          </h1>
          <p className="text-muted-foreground text-lg font-body">
            Your interactive biology learning companion
          </p>
        </div>

        {/* Selection Card */}
        <div className="bg-card rounded-2xl shadow-elevated p-8 space-y-8">
          {/* Class Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-heading font-semibold text-foreground mb-3">
              <BookOpen className="w-4 h-4 text-primary" />
              Select Your Class
            </label>
            <div className="flex flex-wrap gap-2">
              {classes.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedClass(c)}
                  className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-200 ${
                    selectedClass === c
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Board Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-heading font-semibold text-foreground mb-3">
              <GraduationCap className="w-4 h-4 text-primary" />
              Select Your Board
            </label>
            <div className="flex flex-wrap gap-3">
              {boards.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBoard(b)}
                  className={`px-6 py-3 rounded-xl font-body font-semibold transition-all duration-200 ${
                    selectedBoard === b
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-heading font-semibold text-foreground mb-3">
              <FlaskConical className="w-4 h-4 text-primary" />
              Select Subject
            </label>
            <div className="flex flex-wrap gap-3">
              {subjects.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSubject(s)}
                  className={`px-6 py-3 rounded-xl font-body font-semibold transition-all duration-200 ${
                    selectedSubject === s
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Proceed Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleProceed}
            disabled={!canProceed}
            className={`w-full py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 ${
              canProceed
                ? "gradient-hero text-primary-foreground shadow-elevated cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            Start Learning →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
