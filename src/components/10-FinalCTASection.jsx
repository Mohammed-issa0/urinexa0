import OrderButton from './OrderButton';
import { CircleCheckBig } from "lucide-react";
import {motion} from 'framer-motion'
const FinalCTASection = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
      <div className="flex items-center justify-center mb-6">
      <motion.div initial={{scale: 0.9}}
        animate={{scale: [1,0.9, 1]}}
         transition={{duration:1.4, repeat:Infinity}}>
<CircleCheckBig className="h-16 w-16 text-green-700 mr-2" />

         </motion.div>
          
        </div>
        <motion.p 
        initial={{scale: 0.8, opacity: 0}}
        whileInView={{scale:1, opacity: 1 }}
         transition={{duration:1.4}}  className="text-xl mb-8">
          لا تدع الوقت يمر وأنت في حالة من القلق أو الإحباط. <span className='text-green-800 font-bold'>استرجع حياتك الجنسية بكل حيوية وأمان، واستعد لاستعادة الشعور بالقوة والمتعة في كل لحظة.</span> صحتك الجنسية جزء من صحتك العامة، وحقك أن تشعر بالقوة والثقة في نفسك.
        </motion.p>
       
        <OrderButton isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}/>
      </div>
    </section>
  );
};

export default FinalCTASection;