import { motion } from "framer-motion";
import { Play, BookOpen, Palette } from "lucide-react";
import type { Level } from "@/data/content";
import { videoData } from "@/data/content";

const videoTypes = [
  { key: "normal" as const, label: "Normal Lecture", icon: Play, desc: "Standard teaching approach" },
  { key: "story" as const, label: "Story Telling", icon: BookOpen, desc: "Learn through engaging stories" },
  { key: "innovative" as const, label: "Innovative Drawing", icon: Palette, desc: "Visual & creative learning" },
];

const VideoSection = ({ level }: { level: Level }) => {
  const videos = videoData[level];
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">📹 Watch & Learn</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {videoTypes.map((vt, i) => (
          <motion.div key={vt.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl shadow-card overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videos[vt.key]}`}
                title={vt.label}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <vt.icon className="w-4 h-4 text-primary" />
                <h3 className="font-heading font-semibold text-foreground">{vt.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-body">{vt.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
