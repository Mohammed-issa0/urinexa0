import { motion } from 'framer-motion';
import { FaChartLine, FaExclamationTriangle, FaUserMd } from 'react-icons/fa';
import tired from '../../public/images/tired.png'
const StatisticsSection = () => {
  const stats = [
    {
      icon: <FaChartLine className="text-4xl  mb-4" />,
      value: '50%',
      text: 'من الرجال فوق 40 يعانون من مشاكل جنسية'
    },
    {
      icon: <FaExclamationTriangle className="text-4xl  mb-4" />,
      value: '25%',
      text: 'من الرجال الذين يعانون من مشاكل البروستاتا معرضون لخطر السرطان'
    },
    {
      icon: <FaUserMd className="text-4xl  mb-4" />,
      value: '80%',
      text: 'من الرجال الذين يعانون من مشاكل صحية يعانون أيضًا من القلق'
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-black"
        >
          إحصائيات مقلقة
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              // viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white text-red-600 flex flex-col items-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1 border border-primary/20"
            >
              {stat.icon}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="text-4xl font-bold text-black mb-4"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600 text-lg">{stat.text}</p>
            </motion.div>
          ))}
        </div>
        <img src={tired} className='mb-[-96px]'/>
      </div>
    </section>
  );
};

export default StatisticsSection;