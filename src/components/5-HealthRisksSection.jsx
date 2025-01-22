import { motion } from 'framer-motion';
import { FaExclamationCircle, FaHeartbeat, FaBrain, FaUserMd } from 'react-icons/fa';

const HealthRisksSection = () => {
  const risks = [
    {
      icon: <FaExclamationCircle className="text-4xl text-red-500 mb-4" />,
      title: 'تفاقم المشاكل الصحية العامة',
      description: 'تأجيل العلاج أو تجاهل مشاكل القدرة الجنسية يمكن أن يؤدي إلى تفاقم الحالة، مما يجعل العلاج أصعب وأقل فعالية مع مرور الوقت.'
    },
    {
      icon: <FaHeartbeat className="text-4xl text-red-500 mb-4" />,
      title: 'انخفاض مستوى هرمون التستوستيرون',
      description: 'عدم معالجة ضعف القدرة الجنسية قد يؤدي إلى انخفاض مستويات هرمون التستوستيرون، مما يؤثر بشكل كبير على الطاقة والقدرة على الأداء الجنسي.'
    },
    {
      icon: <FaUserMd className="text-4xl text-red-500 mb-4" />,
      title: 'زيادة خطر الإصابة بأمراض البروستاتا',
      description: 'عدم علاج تضخم البروستاتا أو مشاكل التبول قد يؤدي إلى تطور مشاكل أكثر خطورة، مثل التهابات البروستاتا أو حتى خطر الإصابة بسرطان البروستاتا.'
    },
    {
      icon: <FaBrain className="text-4xl text-red-500 mb-4" />,
      title: 'ضعف الصحة النفسية',
      description: 'مشاكل القدرة الجنسية تؤدي إلى القلق المستمر، والاكتئاب، وفقدان الثقة بالنفس، مما يؤثر بشكل مباشر على الصحة النفسية والعلاقات الشخصية.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-[#fef3c7] text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4LTMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          المخاطر الصحية إذا لم تُعالج مشاكل القدرة الجنسية والبروستاتا
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/70 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-center flex flex-col items-center">
                {risk.icon}
                <h3 className="text-2xl font-bold mb-4">{risk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{risk.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HealthRisksSection;