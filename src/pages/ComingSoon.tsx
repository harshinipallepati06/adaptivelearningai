import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20 mb-6">
          <Construction className="w-12 h-12 text-secondary" />
        </motion.div>
        <h1 className="text-3xl font-heading font-bold text-foreground mb-3">Coming Soon!</h1>
        <p className="text-muted-foreground font-body mb-8">
          We're currently building content for <strong>9th Class, CBSE, Biology</strong> only. Other combinations will be available soon!
        </p>
        <button onClick={() => navigate("/")} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-heading font-semibold transition-transform hover:scale-105">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
