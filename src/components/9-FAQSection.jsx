import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import man from "../../public/images/green.jpg"
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'كيف يعمل هذا المنتج؟',
      a: 'يعمل بشكل طبيعي على تحسين تدفق الدم وتعزيز صحة البروستات وتحسين التوازن الهرموني.'
    },
    {
      q: 'هل المنتج آمن للاستخدام؟',
      a: 'نعم، المنتج طبيعي وآمن تماماً، مكون من مواد طبيعية مختبرة علمياً.'
    },
    {
      q: 'هل هناك دراسات علمية تدعم فعالية المنتج؟',
      a: 'نعم، هناك العديد من الدراسات العلمية التي تدعم فعالية المكونات الطبيعية المستخدمة في هذا المنتج.'
    },
    {
      q: 'هل هناك أي آثار جانبية؟',
      a: 'المنتج طبيعي تماماً ولا يسبب أي آثار جانبية معروفة.'
    },
    {
      q: 'كم من الوقت سيستغرق المنتج لإظهار نتائج؟',
      a: 'معظم المستخدمين يلاحظون تحسناً خلال الأسبوع الأول من الاستخدام.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          الأسئلة الشائعة
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-right p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex flex-row-reverse items-center justify-between ">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-primary"
                  >
                    <FaChevronDown />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary">{faq.q}</h3>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-right font-semibold text-gray-600 bg-white border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <img src={man}/>
      </div>
    </section>
  );
};

export default FAQSection;