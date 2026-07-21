import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.div
            className="preloader-inner"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Hi
            </motion.span>
            <motion.span
              className="wink"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: [0, -8, 0] }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              :)
            </motion.span>
          </motion.div>
          <motion.p
            className="preloader-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            To Corentix 
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

