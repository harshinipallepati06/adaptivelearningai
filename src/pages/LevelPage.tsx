import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Puzzle, ClipboardCheck, BarChart3 } from "lucide-react";
import type { Level } from "@/data/content";
import VideoSection from "@/components/VideoSection";
import BeginnerActivities from "@/components/activities/BeginnerActivities";
import AverageActivities from "@/components/activities/AverageActivities";
import AdvancedActivities from "@/components/activities/AdvancedActivities";
import QuizSection from "@/components/QuizSection";
import PerformanceAnalysis from "@/components/PerformanceAnalysis";

type Step = "videos" | "activities" | "quiz" | "performance";

const steps: { id: Step; label: string; icon: typeof Play }[] = [
  { id: "videos", label: "Videos", icon: Play },
  { id: "activities", label: "Activities", icon: Puzzle },
  { id: "quiz", label: "Quiz", icon: ClipboardCheck },
  { id: "performance", label: "Results", icon: BarChart3 },
];

const LevelPage = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const level = levelId as Level;
  const [currentStep, setCurrentStep] = useState<Step>("videos");
  const [activityScore, setActivityScore] = useState(0);
  const [activityTotal, setActivityTotal] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);

  if (!["beginner", "average", "advanced"].includes(level)) {
    navigate("/levels");
    return null;
  }

  const gradientClass = level === "beginner" ? "gradient-beginner" : level === "average" ? "gradient-average" : "gradient-advanced";
  const levelLabel = level.charAt(0).toUpperCase() + level.slice(1);

  const handleActivityComplete = (score: number, total: number) => {
    setActivityScore(score);
    setActivityTotal(total);
    setCurrentStep("quiz");
  };

  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore(score);
    setQuizTotal(total);
    setCurrentStep("performance");
  };

  const stepIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${gradientClass} px-4 py-6`}>
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate("/levels")} className="inline-flex items-center gap-2 text-card/80 hover:text-card transition-colors font-body mb-3">
            <ArrowLeft className="w-4 h-4" /> Back to Levels
          </button>
          <h1 className="text-2xl font-heading font-bold text-card">{levelLabel} Level</h1>
          <p className="text-card/80 font-body text-sm">9th Class • CBSE • Biology</p>
        </div>
      </div>

      {/* Step Progress */}
      <div className="max-w-4xl mx-auto px-4 -mt-4">
        <div className="bg-card rounded-xl shadow-card p-3 flex gap-1">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => { if (i <= stepIndex) setCurrentStep(step.id); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-body font-semibold transition-all ${
                step.id === currentStep ? `${gradientClass} text-card` : i < stepIndex ? "bg-success/10 text-success" : "text-muted-foreground"
              }`}
            >
              <step.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{step.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {currentStep === "videos" && (
          <div className="space-y-6">
            <VideoSection level={level} />
            <div className="text-center">
              <button onClick={() => setCurrentStep("activities")} className={`px-8 py-3 rounded-xl ${gradientClass} text-card font-heading font-bold text-lg`}>
                Continue to Activities →
              </button>
            </div>
          </div>
        )}
        {currentStep === "activities" && (
          <>
            {level === "beginner" && <BeginnerActivities onComplete={handleActivityComplete} />}
            {level === "average" && <AverageActivities onComplete={handleActivityComplete} />}
            {level === "advanced" && <AdvancedActivities onComplete={handleActivityComplete} />}
          </>
        )}
        {currentStep === "quiz" && <QuizSection level={level} onComplete={handleQuizComplete} />}
        {currentStep === "performance" && (
          <PerformanceAnalysis level={level} activityScore={activityScore} activityTotal={activityTotal} quizScore={quizScore} quizTotal={quizTotal} />
        )}
      </div>
    </div>
  );
};

export default LevelPage;
