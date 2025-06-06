"use client";
import React from "react";
// importing framer-motion
import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Popup({ onClose, children }: Props) {

  return (
    <section className="fixed inset-0 z-[9999] pointer-events-auto">
      <div
        className="absolute inset-0 bg-[#000] opacity-75 backdrop-blur-lg"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
