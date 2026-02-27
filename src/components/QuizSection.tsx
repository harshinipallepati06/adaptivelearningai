import { useState } from "react";
import { motion } from "framer-motion";
import type { Level, QuizQuestion } from "@/data/content";
import { quizData } from "@/data/content";

interface Props { level: Level; onComplete: (score: number, total: number) => void }

const QuizSection = ({ level, onComplete }: Props) => {
  const questions = quizData[level];
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});
  const [score, setScore] = useState<number | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleSingle = (qi: number, value: string) => setAnswers((p) => ({ ...p, [qi]: value }));

  const handleMulti = (qi: number, value: string) => {
    setAnswers((p) => {
      const current = (p[qi] as string[]) || [];
      return { ...p, [qi]: current.includes(value) ? current.filter((v) => v !== value) : [...current, value] };
    });
  };

  const checkQuiz = () => {
    let s = 0;
    const r: Record<number, boolean> = {};
    questions.forEach((q, i) => {
      if (q.type === "multi") {
        const selected = ((answers[i] as string[]) || []).sort();
        const correct = (q.correct as string[]).sort();
        const isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
        r[i] = isCorrect;
        if (isCorrect) s++;
      } else {
        const isCorrect = answers[i] === q.correct;
        r[i] = isCorrect;
        if (isCorrect) s++;
      }
    });
    setResults(r);
    setScore(s);
    setShowCorrect(true);
  };

  const gradientClass = level === "beginner" ? "gradient-beginner" : level === "average" ? "gradient-average" : "gradient-advanced";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">📝 Quiz Time!</h2>
      <div className="space-y-4">
        {questions.map((q, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
            className={`bg-card rounded-xl shadow-card p-5 transition-colors ${results[i] === true ? "ring-2 ring-success" : results[i] === false ? "ring-2 ring-destructive" : ""}`}>
            <p className="font-body font-semibold text-foreground mb-3">{i + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isSelected = q.type === "multi" ? ((answers[i] as string[]) || []).includes(opt.value) : answers[i] === opt.value;
                return (
                  <label key={opt.value} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors font-body text-sm ${isSelected ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                    <input
                      type={q.type === "multi" ? "checkbox" : "radio"}
                      name={`q${i}`}
                      checked={isSelected}
                      onChange={() => q.type === "multi" ? handleMulti(i, opt.value) : handleSingle(i, opt.value)}
                      className="accent-primary"
                    />
                    {opt.label}
                  </label>
                );
              })}
            </div>
            {showCorrect && results[i] === false && (
              <p className="mt-2 text-sm font-body text-success font-semibold">
                Correct: {Array.isArray(q.correct) ? q.correct.map((c) => q.options.find((o) => o.value === c)?.label).join(", ") : q.options.find((o) => o.value === q.correct)?.label}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {score === null ? (
        <button onClick={checkQuiz} className={`px-8 py-3 rounded-xl ${gradientClass} text-primary-foreground font-heading font-bold text-lg`}>Submit Quiz</button>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-xl shadow-elevated p-6 text-center space-y-3">
          <p className="text-3xl font-heading font-bold text-foreground">{score} / {questions.length}</p>
          <p className="text-muted-foreground font-body">{score >= 12 ? "Excellent! 🌟" : score >= 8 ? "Good job! 👍" : "Keep practicing! 💪"}</p>
          <button onClick={() => onComplete(score, questions.length)} className="px-6 py-2 rounded-lg gradient-hero text-primary-foreground font-heading font-semibold">View Performance →</button>
        </motion.div>
      )}
    </div>
  );
};

export default QuizSection;
