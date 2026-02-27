import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sprout, TrendingUp, Rocket } from "lucide-react";

const levels = [
  { id: "beginner", label: "Beginner", description: "Start with basics — fill in the blanks, match the following", icon: Sprout, gradient: "gradient-beginner" },
  { id: "average", label: "Average", description: "Label diagrams, complete flowcharts, and more", icon: TrendingUp, gradient: "gradient-average" },
  { id: "advanced", label: "Advanced", description: "Build flowcharts, assertion-reasoning, multi-select questions", icon: Rocket, gradient: "gradient-advanced" },
];

const LevelSelect = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
        <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors font-body">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Choose Your Level</h1>
          <p className="text-muted-foreground font-body">9th Class • CBSE • Biology</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level, i) => (
            <motion.button
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/level/${level.id}`)}
              className={`${level.gradient} rounded-2xl p-8 text-left shadow-elevated transition-all group cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-xl bg-card/20 backdrop-blur-sm flex items-center justify-center mb-5">
                <level.icon className="w-7 h-7 text-card" />
              </div>
              <h3 className="text-xl font-heading font-bold text-card mb-2">{level.label}</h3>
              <p className="text-card/80 font-body text-sm">{level.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LevelSelect;
