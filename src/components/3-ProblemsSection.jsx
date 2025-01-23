import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Frown,ThumbsDown,CircleX,ShieldX,PowerOff } from "lucide-react";
const ProblemsSection = ({ isModalOpen, setIsModalOpen }) => {
  const problems = [
    {
      icon: <Frown  className=" text-2xl" />,
      title: 'ضعف الانتصاب',
      description: 'صعوبة في تحقيق أو الحفاظ على الانتصاب'
    },
    {
      icon: <PowerOff className=" text-2xl" />,
      title: 'فقدان الرغبة الجنسية',
      description: 'انخفاض ملحوظ في الرغبة والدافع الجنسي'
    },
    {
      icon: <FaExclamationTriangle className=" text-2xl" />,
      title: 'مشاكل البروستاتا',
      description: 'صعوبة في التبول وشعور مستمر بعدم الراحة'
    },
    {
      icon: <CircleX  className=" text-2xl" />,
      title: 'سرعة القذف',
      description: 'صعوبة في التحكم وعدم القدرة على الاستمتاع'
    },
    {
      icon: <ShieldX  className=" text-2xl" />,
      title: 'ضعف الطاقة',
      description: 'الشعور المستمر بالإرهاق وقلة الحيوية'
    },
    {
      icon: <ThumbsDown className=" text-2xl" />,
      title: 'القلق النفسي',
      description: 'انخفاض الثقة بالنفس والشعور بالإحباط'
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
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
            مشاكل وأعراض <span className='text-black'>الضعف الجنسي والبروستاتا</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            تعرف على <span className='text-red-600'>المشاكل الشائعة</span> التي يمكن أن تؤثر على صحتك وحياتك الزوجية
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col  items-center space-x-4 space-x-reverse">
                <div className="bg-red-50 p-3 rounded-full text-primary">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-black py-1">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 text-lg font-medium">
            لا تدع هذه المشاكل تؤثر على حياتك! <br/>الحل موجود مع <span className='text-primary font-bold'>Urinexa</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;