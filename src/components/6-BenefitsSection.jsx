import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf, FaFlask, FaBolt, FaHeartbeat, FaUserMd } from 'react-icons/fa';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaLeaf className="text-3xl text-primary mb-4" />,
      title: 'حل طبيعي وآمن',
      description: 'يعالج الأسباب الجذرية بمكونات طبيعية'
    },
    {
      icon: <FaFlask className="text-3xl text-primary mb-4" />,
      title: 'مكونات مدعومة بالعلم',
      description: 'تركيبة فعالة مثبتة علمياً'
    },
    {
      icon: <FaBolt className="text-3xl text-primary mb-4" />,
      title: 'نتائج سريعة ملحوظة',
      description: 'تحسن ملحوظ خلال فترة قصيرة'
    },
    {
      icon: <FaHeartbeat className="text-3xl text-primary mb-4" />,
      title: 'تحسين صحة البروستاتا',
      description: 'يعزز صحة البروستاتا بشكل طبيعي'
    },
    {
      icon: <FaUserMd className="text-3xl text-primary mb-4" />,
      title: 'دعم الصحة العامة',
      description: 'يحسن الصحة العامة والحيوية'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-t from-secondary to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">مميزات Urinexa</h2>
          <p className="text-xl text-gray-600">حل متكامل <span className='text-primary'>لصحة أفضل</span> وحياة أكثر نشاطاً</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white  p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center flex flex-col items-center">
                {benefit.icon}
                <h3 className="text-xl font-bold mb-3 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-primary font-semibold">
            استعد صحتك وحيويتك مع Urinexa - الحل الطبيعي المتكامل
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;