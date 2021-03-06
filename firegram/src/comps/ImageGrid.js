import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion/dist/framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className="img-wrap"
            onClick={() => setSelectedImg(doc.url)}
            key={doc.id}
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              alt="Images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
