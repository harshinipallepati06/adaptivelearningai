import { useState } from "react";
import { motion } from "framer-motion";

interface Props { onComplete: (score: number, total: number) => void }

const AdvancedActivities = ({ onComplete }: Props) => {
  const [topic, setTopic] = useState("");
  const [levels, setLevels] = useState(3);
  const [correctAns, setCorrectAns] = useState("");
  const [started, setStarted] = useState(false);
  const [studentInputs, setStudentInputs] = useState<string[]>([]);
  const [results, setResults] = useState<boolean[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const startActivity = () => {
    if (!topic || !levels || !correctAns) return;
    setStarted(true);
    setStudentInputs(Array(levels).fill(""));
    setResults([]);
    setScore(null);
  };

  const checkAnswers = () => {
    const answers = correctAns.toLowerCase().split(",").map((a) => a.trim());
    let s = 0;
    const r = studentInputs.map((inp, i) => {
      const correct = i < answers.length && inp.trim().toLowerCase() === answers[i];
      if (correct) s++;
      return correct;
    });
    setResults(r);
    setScore(s);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">🎯 Flowchart Practice</h2>
      
      {!started ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h3 className="font-heading font-semibold text-foreground">Teacher Setup</h3>
          <p className="text-sm text-muted-foreground font-body">Set up the flowchart for students to practice</p>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <label className="font-body font-semibold text-foreground w-36">Topic Name:</label>
              <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Cell Division" className="flex-1 px-4 py-2 rounded-lg border border-border bg-card text-foreground font-body" />
            </div>
            <div className="flex items-center gap-4">
              <label className="font-body font-semibold text-foreground w-36">Number of Levels:</label>
              <input type="number" value={levels} onChange={(e) => setLevels(Number(e.target.value))} min={2} max={10} className="w-24 px-4 py-2 rounded-lg border border-border bg-card text-foreground font-body" />
            </div>
            <div className="flex items-center gap-4">
              <label className="font-body font-semibold text-foreground w-36">Correct Answers:</label>
              <input type="password" value={correctAns} onChange={(e) => setCorrectAns(e.target.value)} placeholder="comma separated" className="flex-1 px-4 py-2 rounded-lg border border-border bg-card text-foreground font-body" />
            </div>
          </div>
          <button onClick={startActivity} className="px-6 py-2 rounded-lg gradient-advanced text-advanced-foreground font-heading font-semibold">Start Student Mode</button>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h3 className="font-heading font-bold text-foreground text-center text-xl">{topic}</h3>
          <div className="flex flex-col items-center gap-3">
            {studentInputs.map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <input
                  value={val}
                  onChange={(e) => { const n = [...studentInputs]; n[i] = e.target.value; setStudentInputs(n); }}
                  placeholder={`Level ${i + 1}`}
                  className={`px-4 py-3 border-2 rounded-lg font-body text-foreground bg-card text-center w-56 ${
                    results[i] === true ? "border-success bg-success/10" : results[i] === false ? "border-destructive bg-destructive/10" : "border-foreground/20"
                  }`}
                />
                {i < studentInputs.length - 1 && <span className="text-foreground text-xl">↓</span>}
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={checkAnswers} className="px-5 py-2 rounded-lg gradient-advanced text-advanced-foreground font-heading font-semibold">Submit</button>
            <button onClick={() => { setStarted(false); setScore(null); setResults([]); }} className="px-5 py-2 rounded-lg bg-muted text-muted-foreground font-heading font-semibold">Reset</button>
          </div>
          {score !== null && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
              <p className="font-heading font-bold text-foreground">Score: {score} / {studentInputs.length}</p>
              <button onClick={() => onComplete(score, studentInputs.length)} className="mt-3 px-6 py-2 rounded-lg gradient-hero text-primary-foreground font-heading font-semibold">Proceed to Quiz →</button>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AdvancedActivities;
