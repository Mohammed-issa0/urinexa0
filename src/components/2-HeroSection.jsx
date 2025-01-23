import { motion } from 'framer-motion';
import OrderButton from './OrderButton';
import img1 from "../../public/images/دائرة.png";
import img2 from "../../public/images/رجل.png";
// import vd from "../../public/images/vd.mp4"
import vd from "../../public/images/vd2.mp4"
const HeroSection = ({ isModalOpen, setIsModalOpen }) => {
  const listAnimation = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };
  const listAnimation2 = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const highlightVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const gradientOverlayStyle = {
    background: 'linear-gradient(135deg, rgba(19, 113, 49, 0.95) 0%, rgba(19, 113, 49, 0.8) 100%)',
  };

  return (
    <section className="relative bg-gradient-to-r from-[#6cd892] to-[#46b99a] min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
    {/* Background Video */}
    <video 
      src={vd} 
      type="video/mp4" 
      autoPlay 
      muted 
      loop 
      className="absolute inset-0 w-full h-full object-cover" 
    />
  
    {/* Gradient Overlay */}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-[#137131F2] to-[#137131CC] mix-blend-multiply pointer-events-none" 
    />
  
    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-white"
      >
       
  
        <motion.h1
          variants={itemVariants}
          className="text-2xl mb-8 font-bold leading-relaxed"
        >
          هل تشعر بأن العلاقة الحميمة أصبحت أقل إثارة؟ هل تسعى لتحسين <span className='text-green-400'>قدرتك الجنسية</span> و <span className='text-green-400'>تعزيز الرغبة الزوجية؟</span>
        </motion.h1>
        <motion.h1 
          variants={itemVariants}
          className="text-2xl md:text-6xl  mb-8 leading-tight"
        >
          استعد قوتك وثقتك<br/> مع
            <span className='text-green-400 font-bold text-3xl px-2 stroke-white '>Urinexa</span>
          
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="relative"
        >
          <motion.img
            src={img1}
            alt="Urinexa Product"
            className="mx-auto rounded-lg w-[300px] lg:w-[500px] max-w-md mb-4"
            variants={listAnimation}
          />
          {/* <motion.img
            src={img2}
            alt="Urinexa Product"
            className="mx-auto rounded-lg w-[300px] lg:w-[500px] max-w-md absolute bottom-[-50px]  lg:bottom-[-70px]"
            variants={listAnimation}
          /> */}
        </motion.div>
      </motion.div>
      <OrderButton className='mt-5' isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}/>
    </div>
  </section>
  
  );
};

export default HeroSection;