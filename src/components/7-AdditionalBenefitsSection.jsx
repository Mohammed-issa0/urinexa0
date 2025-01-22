import { motion } from 'framer-motion';
import {CircleCheckBig} from 'lucide-react';
import inhand from "../../public/images/inHand.png"
const AdditionalBenefitsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          <img src={inhand}/>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl  font-bold mb-4 flex justify-center items-center gap-2"><CircleCheckBig/>منتج معتمد </h3>
            <p>جودة عالية وشهادات ضمان الفاعلية</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4 flex justify-center gap-2"><CircleCheckBig/>توصيل سريع</h3>
            <p>يصل إليك في أقل من 24 ساعة أينما كنت</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalBenefitsSection;