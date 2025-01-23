import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import man from "../../public/images/green.jpg"
const FAQSection = ({ isModalOpen, setIsModalOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'كيف يعمل هذا المنتج؟',
      a: 'يعمل هذا المنتج بشكل طبيعي على تحسين تدفق الدم إلى الأعضاء التناسلية، مما يساعد على تقوية الانتصاب وزيادة القدرة الجنسية. كما يساهم في تعزيز صحة البروستات وتحسين التوازن الهرموني.'
    },
    {
      q: 'هل المنتج آمن للاستخدام؟',
      a: 'نعم، هذا المنتج طبيعي وآمن تمامًا للاستخدام، حيث يحتوي على مكونات طبيعية لا تسبب أي تأثيرات جانبية ضارة. تم اختباره بشكل دقيق لضمان سلامته وفعاليته.'
    },
    {
      q: 'هل هناك دراسات علمية تدعم فعالية المنتج؟',
      a: 'نعم، هناك العديد من الدراسات العلمية التي تدعم فعالية المكونات الطبيعية المستخدمة في هذا المنتج في تحسين القدرة الجنسية وصحة البروستات. المكونات التي يحتوي عليها المنتج تمت دراستها بشكل موسع في العديد من الأبحاث العلمية.'
    },
    {
      q: 'هل هناك أي آثار جانبية؟',
      a: 'المنتج طبيعي تمامًا ولا يسبب أي آثار جانبية معروفة. بما أنه خالٍ من المواد الكيميائية الضارة أو المكونات الاصطناعية، فإن تأثيراته إيجابية. ومع ذلك، يجب على الأشخاص الذين يعانون من حساسية تجاه بعض الأعشاب استشارة الطبيب قبل الاستخدام.'
    },
    {
      q: 'هل يمكنني استخدامه مع أدوية أخرى؟',
      a: 'نظرًا لأن المنتج طبيعي وآمن، فإنه لا يتداخل مع الأدوية الأخرى عادةً. ومع ذلك، إذا كنت تتناول أدوية معينة لأمراض مزمنة أو مشاكل صحية أخرى، يفضل استشارة الطبيب قبل البدء في استخدامه.'
    },
    {
      q: 'كم من الوقت سيستغرق المنتج لإظهار نتائج؟',
      a: 'النتائج قد تختلف من شخص لآخر، ولكن العديد من المستخدمين يلاحظون تحسنًا في القدرة الجنسية وصحة البروستات بدءًا من الأسبوع الأول. للحصول على أفضل النتائج، يوصى بالاستمرار في استخدام المنتج لفترة لا تقل عن 20 jours'
    }
    ,
    {
      q: 'هل هذا المنتج معتمد من قبل الهيئات الصحية؟',
      a: ' نعم، هذا المنتج معتمد من قبل الهيئات الصحية المعترف بها لضمان جودته وسلامته. يتم إنتاجه وفقًا للمعايير الدولية وبموافقة الجهات المختصة.'
    },
    {
      q: 'هل يوجد ضمان أو سياسة عدم الرضا؟',
      a: 'نعم، نحن نؤمن بجودة منتجاتنا ونقدم سياسة ضمان رضا العملاء'
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
          // viewport={{ once: true }}
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