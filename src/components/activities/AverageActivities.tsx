import { useState } from "react";
import { motion } from "framer-motion";
import { cellLabels, flowchartData } from "@/data/content";
import animalCellImg from "@/assets/animal-cell.jpg";

interface Props { onComplete: (score: number, total: number) => void }

const AverageActivities = ({ onComplete }: Props) => {
  const [tab, setTab] = useState<"label" | "flowchart">("label");
  const [cellAnswers, setCellAnswers] = useState<Record<number, string>>({});
  const [cellResults, setCellResults] = useState<Record<number, boolean | null>>({});
  const [cellScore, setCellScore] = useState<number | null>(null);
  const [flowAnswers, setFlowAnswers] = useState<Record<string, string>>({});
  const [flowResults, setFlowResults] = useState<Record<string, boolean | null>>({});
  const [flowScore, setFlowScore] = useState<number | null>(null);

  const checkCell = () => {
    let s = 0;
    const r: Record<number, boolean> = {};
    cellLabels.forEach((lbl) => {
      const correct = (cellAnswers[lbl.id] || "").trim().toLowerCase() === lbl.answer;
      r[lbl.id] = correct;
      if (correct) s++;
    });
    setCellResults(r);
    setCellScore(s);
  };

  const checkFlow = () => {
    let s = 0;
    const r: Record<string, boolean> = {};
    Object.entries(flowchartData.correctAnswers).forEach(([key, val]) => {
      const correct = (flowAnswers[key] || "").trim().toLowerCase() === val;
      r[key] = correct;
      if (correct) s++;
    });
    setFlowResults(r);
    setFlowScore(s);
  };

  const totalScore = (cellScore ?? 0) + (flowScore ?? 0);
  const totalQ = cellLabels.length + Object.keys(flowchartData.correctAnswers).length;
  const bothDone = cellScore !== null && flowScore !== null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">🎯 Activities</h2>

      <div className="flex gap-3 mb-4">
        <button onClick={() => setTab("label")} className={`px-5 py-2 rounded-lg font-body font-semibold text-sm transition-all ${tab === "label" ? "bg-average text-average-foreground" : "bg-muted text-muted-foreground"}`}>
          Label the Cell
        </button>
        <button onClick={() => setTab("flowchart")} className={`px-5 py-2 rounded-lg font-body font-semibold text-sm transition-all ${tab === "flowchart" ? "bg-average text-average-foreground" : "bg-muted text-muted-foreground"}`}>
          Complete Flowchart
        </button>
      </div>

      {tab === "label" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl shadow-card p-6 space-y-5">
          <h3 className="font-heading font-semibold text-foreground">Label the Animal Cell Structure</h3>
          <div className="flex justify-center">
            <img src={animalCellImg} alt="Animal Cell Diagram" className="rounded-xl max-w-[400px] w-full" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {cellLabels.map((lbl) => (
              <div key={lbl.id} className="flex flex-col gap-1">
                <label className="text-sm font-body font-semibold text-foreground">Part {lbl.id}</label>
                <input
                  value={cellAnswers[lbl.id] || ""}
                  onChange={(e) => setCellAnswers((p) => ({ ...p, [lbl.id]: e.target.value }))}
                  placeholder="Type answer"
                  className={`px-3 py-2 rounded-lg border text-sm font-body text-foreground bg-card transition-colors ${
                    cellResults[lbl.id] === true ? "border-success bg-success/10" : cellResults[lbl.id] === false ? "border-destructive bg-destructive/10" : "border-border"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={checkCell} className="px-5 py-2 rounded-lg gradient-average text-average-foreground font-heading font-semibold">Submit</button>
            <button onClick={() => { setCellAnswers({}); setCellResults({}); setCellScore(null); }} className="px-5 py-2 rounded-lg bg-muted text-muted-foreground font-heading font-semibold">Reset</button>
          </div>
          {cellScore !== null && <p className="font-heading font-bold text-foreground">Score: {cellScore} / {cellLabels.length}</p>}
        </motion.div>
      )}

      {tab === "flowchart" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-xl shadow-card p-6 space-y-4">
          <h3 className="font-heading font-semibold text-foreground">Complete the 5 Level Flowchart</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="px-6 py-3 border-2 border-foreground/20 rounded-lg font-heading font-bold text-foreground">Cell</div>
            <span className="text-foreground text-xl">↓</span>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="px-6 py-3 border-2 border-foreground/20 rounded-lg font-body text-foreground">Cell Membrane</div>
              <input value={flowAnswers["l2b"] || ""} onChange={(e) => setFlowAnswers((p) => ({ ...p, l2b: e.target.value }))} placeholder="Part 2"
                className={`px-4 py-3 border-2 rounded-lg font-body text-foreground bg-card text-center w-40 ${flowResults["l2b"] === true ? "border-success bg-success/10" : flowResults["l2b"] === false ? "border-destructive bg-destructive/10" : "border-foreground/20"}`} />
              <input value={flowAnswers["l2c"] || ""} onChange={(e) => setFlowAnswers((p) => ({ ...p, l2c: e.target.value }))} placeholder="Part 3"
                className={`px-4 py-3 border-2 rounded-lg font-body text-foreground bg-card text-center w-40 ${flowResults["l2c"] === true ? "border-success bg-success/10" : flowResults["l2c"] === false ? "border-destructive bg-destructive/10" : "border-foreground/20"}`} />
            </div>
            <span className="text-foreground text-xl">↓</span>
            <div className="px-6 py-3 border-2 border-foreground/20 rounded-lg font-heading font-bold text-foreground">Nucleus</div>
            <span className="text-foreground text-xl">↓</span>
            <input value={flowAnswers["l4"] || ""} onChange={(e) => setFlowAnswers((p) => ({ ...p, l4: e.target.value }))} placeholder="Function"
              className={`px-4 py-3 border-2 rounded-lg font-body text-foreground bg-card text-center w-48 ${flowResults["l4"] === true ? "border-success bg-success/10" : flowResults["l4"] === false ? "border-destructive bg-destructive/10" : "border-foreground/20"}`} />
            <span className="text-foreground text-xl">↓</span>
            <div className="px-6 py-3 border-2 border-foreground/20 rounded-lg font-heading font-bold text-foreground">Control Centre</div>
          </div>
          <div className="flex gap-3">
            <button onClick={checkFlow} className="px-5 py-2 rounded-lg gradient-average text-average-foreground font-heading font-semibold">Submit</button>
            <button onClick={() => { setFlowAnswers({}); setFlowResults({}); setFlowScore(null); }} className="px-5 py-2 rounded-lg bg-muted text-muted-foreground font-heading font-semibold">Reset</button>
          </div>
          {flowScore !== null && <p className="font-heading font-bold text-foreground">Score: {flowScore} / {Object.keys(flowchartData.correctAnswers).length}</p>}
        </motion.div>
      )}

      {bothDone && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
          <p className="font-heading font-bold text-foreground">Activities Complete! Total: {totalScore}/{totalQ}</p>
          <button onClick={() => onComplete(totalScore, totalQ)} className="mt-3 px-6 py-2 rounded-lg gradient-hero text-primary-foreground font-heading font-semibold">Proceed to Quiz →</button>
        </motion.div>
      )}
    </div>
  );
};

export default AverageActivities;
