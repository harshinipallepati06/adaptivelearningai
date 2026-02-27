import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Trophy, Target, BookOpen, ArrowLeft } from "lucide-react";

interface Props {
  level: string;
  activityScore: number;
  activityTotal: number;
  quizScore: number;
  quizTotal: number;
}

const PerformanceAnalysis = ({ level, activityScore, activityTotal, quizScore, quizTotal }: Props) => {
  const navigate = useNavigate();
  const totalScore = activityScore + quizScore;
  const totalPossible = activityTotal + quizTotal;
  const percentage = Math.round((totalScore / totalPossible) * 100);

  const getGrade = () => {
    if (percentage >= 90) return { grade: "A+", emoji: "🏆", message: "Outstanding performance! You've mastered this level!", color: "text-success" };
    if (percentage >= 75) return { grade: "A", emoji: "⭐", message: "Great job! You have a strong understanding.", color: "text-primary" };
    if (percentage >= 60) return { grade: "B", emoji: "👍", message: "Good effort! Review the topics you missed.", color: "text-average" };
    if (percentage >= 40) return { grade: "C", emoji: "📚", message: "Keep practicing! Rewatch the videos for better understanding.", color: "text-secondary" };
    return { grade: "D", emoji: "💪", message: "Don't give up! Go through the lessons again and try once more.", color: "text-destructive" };
  };

  const g = getGrade();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">📊 Performance Analysis</h2>

      <div className="bg-card rounded-2xl shadow-elevated p-8 text-center space-y-6">
        <div className="text-6xl">{g.emoji}</div>
        <div>
          <p className={`text-5xl font-heading font-bold ${g.color}`}>{g.grade}</p>
          <p className="text-muted-foreground font-body mt-2">{percentage}% Overall Score</p>
        </div>
        <p className="text-foreground font-body text-lg">{g.message}</p>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-muted rounded-xl p-4">
            <Target className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-heading font-bold text-foreground">{activityScore}/{activityTotal}</p>
            <p className="text-sm text-muted-foreground font-body">Activities</p>
          </div>
          <div className="bg-muted rounded-xl p-4">
            <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-heading font-bold text-foreground">{quizScore}/{quizTotal}</p>
            <p className="text-sm text-muted-foreground font-body">Quiz</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1, delay: 0.3 }} className="h-full gradient-hero rounded-full" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <button onClick={() => navigate("/levels")} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-heading font-semibold">
            <ArrowLeft className="w-4 h-4" /> Try Another Level
          </button>
          <button onClick={() => navigate("/")} className="px-6 py-3 rounded-xl bg-muted text-muted-foreground font-heading font-semibold hover:bg-muted/80">
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceAnalysis;
