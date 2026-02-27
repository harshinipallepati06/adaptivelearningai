import { useState } from "react";
import { motion } from "framer-motion";
import { dragDropData, matchData } from "@/data/content";

interface Props { onComplete: (score: number, total: number) => void }

const BeginnerActivities = ({ onComplete }: Props) => {
  const [tab, setTab] = useState<"drag" | "match">("drag");
  const [blanks, setBlanks] = useState<Record<number, string>>({});
  const [dragResults, setDragResults] = useState<Record<number, boolean | null>>({});
  const [dragScore, setDragScore] = useState<number | null>(null);
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [matchResults, setMatchResults] = useState<Record<number, boolean | null>>({});
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [dragItem, setDragItem] = useState<string | null>(null);

  const checkDrag = () => {
    let s = 0;
    const r: Record<number, boolean> = {};
    dragDropData.sentences.forEach((item, i) => {
      const correct = (blanks[i] || "").trim() === item.answer;
      r[i] = correct;
      if (correct) s++;
    });
    setDragResults(r);
    setDragScore(s);
  };

  const checkMatch = () => {
    let s = 0;
    const r: Record<number, boolean> = {};
    matchData.items.forEach((item, i) => {
      const correct = matchAnswers[i] === item.correct;
      r[i] = correct;
      if (correct) s++;
    });
    setMatchResults(r);
    setMatchScore(s);
  };

  const totalScore = (dragScore ?? 0) + (matchScore ?? 0);
  const totalQuestions = dragDropData.sentences.length + matchData.items.length;
  const bothDone = dragScore !== null && matchScore !== null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">🎯 Activities</h2>
      
      <div className="flex gap-3 mb-4">
        <button onClick={() => setTab("drag")} className={`px-5 py-2 rounded-lg font-body font-semibold text-sm transition-all ${tab === "drag" ? "bg-beginner text-beginner-foreground" : "bg-muted text-muted-foreground"}`}>
          Drag & Drop
        </button>
        <button onClick={() => setTab("match")} className={`px-5 py-2 rounded-lg font-body font-semibold text-sm transition-all ${tab === "match" ? "bg-beginner text-beginner-foreground" : "bg-muted text-muted-foreground"}`}>
          Match the Following
        </button>
      </div>

      {tab === "drag" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h3 className="font-heading font-semibold text-foreground">Drag the correct word into each blank</h3>
          {dragDropData.sentences.map((item, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2 text-foreground font-body">
              <span>{i + 1}. {item.text}</span>
              <span
                className={`inline-block min-w-[140px] px-3 py-1 border-b-2 text-center font-semibold rounded transition-colors ${
                  dragResults[i] === true ? "bg-success/20 border-success" : dragResults[i] === false ? "bg-destructive/20 border-destructive" : "border-foreground/30"
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => { if (dragItem) setBlanks((p) => ({ ...p, [i]: dragItem })); }}
              >
                {blanks[i] || "___"}
              </span>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {dragDropData.options.map((opt) => (
              <span key={opt} draggable className="px-4 py-2 bg-beginner text-beginner-foreground rounded-lg cursor-grab font-body font-semibold text-sm select-none"
                onDragStart={() => setDragItem(opt)}
                onClick={() => {
                  const emptyIdx = dragDropData.sentences.findIndex((_, i) => !blanks[i]);
                  if (emptyIdx >= 0) setBlanks((p) => ({ ...p, [emptyIdx]: opt }));
                }}
              >
                {opt}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={checkDrag} className="px-5 py-2 rounded-lg gradient-beginner text-beginner-foreground font-heading font-semibold">Check Answers</button>
            <button onClick={() => { setBlanks({}); setDragResults({}); setDragScore(null); }} className="px-5 py-2 rounded-lg bg-muted text-muted-foreground font-heading font-semibold">Reset</button>
          </div>
          {dragScore !== null && <p className="font-heading font-bold text-foreground">Score: {dragScore} / {dragDropData.sentences.length}</p>}
        </motion.div>
      )}

      {tab === "match" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h3 className="font-heading font-semibold text-foreground">Match the Following – Plant & Animal Tissues</h3>
          {matchData.items.map((item, i) => (
            <div key={i} className={`flex items-center justify-between gap-4 p-3 rounded-lg transition-colors ${
              matchResults[i] === true ? "bg-success/10" : matchResults[i] === false ? "bg-destructive/10" : "bg-muted/50"
            }`}>
              <span className="font-body font-semibold text-foreground">{i + 1}. {item.term}</span>
              <select value={matchAnswers[i] || ""} onChange={(e) => setMatchAnswers((p) => ({ ...p, [i]: e.target.value }))}
                className="px-3 py-2 rounded-lg border border-border bg-card text-foreground font-body">
                <option value="">Select</option>
                {item.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          ))}
          <div className="flex gap-3">
            <button onClick={checkMatch} className="px-5 py-2 rounded-lg gradient-beginner text-beginner-foreground font-heading font-semibold">Check</button>
            <button onClick={() => { setMatchAnswers({}); setMatchResults({}); setMatchScore(null); }} className="px-5 py-2 rounded-lg bg-muted text-muted-foreground font-heading font-semibold">Reset</button>
          </div>
          {matchScore !== null && <p className="font-heading font-bold text-foreground">Score: {matchScore} / {matchData.items.length}</p>}
        </motion.div>
      )}

      {bothDone && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
          <p className="font-heading font-bold text-foreground">Activities Complete! Total: {totalScore}/{totalQuestions}</p>
          <button onClick={() => onComplete(totalScore, totalQuestions)} className="mt-3 px-6 py-2 rounded-lg gradient-hero text-primary-foreground font-heading font-semibold">
            Proceed to Quiz →
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BeginnerActivities;
