import { motion } from 'framer-motion';
import { ShoppingCart } from "lucide-react";
const OrderButton = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <motion.button
      initial={{scale: 0.9}}
      animate={{scale: [0.9,1.1, 0.9]}}
      transition={{duration:1.4, repeat:Infinity}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary flex items-center mx-auto text-white font-bold py-4 px-8 rounded-full shadow-lg text-xl hover:bg-green-800 transition-colors"
      // onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      onClick={() => setIsModalOpen(true)}
    >
      <ShoppingCart className="ml-2 h-5 w-5" />
      إطلبه الآن
    </motion.button>
  );
};

export default OrderButton;