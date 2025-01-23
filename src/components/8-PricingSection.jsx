import { motion } from 'framer-motion';
import OrderButton from './OrderButton';

const PricingSection = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <section className="py-16 px-4 bg-red-500 text-white">
      <div className="container mx-auto max-w-4xl text-center drop-shadow-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          className="bg-white text-primary p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">العرض الذي لا يقاوم!</h2>
          <p className="text-2xl mb-4">استفد من تخفيض 50% الآن!</p>
          <div className="text-4xl font-bold mb-6 bg-primary rounded-md py-3">
            <span className="line-through text-gray-300 font-sans text-base">249 دينار</span>
            <span className="text-white mr-3">120 دينار</span>
          </div>
          <p className="mb-6 text-primary">اغتنم الفرصة قبل نفاد الكمية!</p>
          <OrderButton isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}/>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;