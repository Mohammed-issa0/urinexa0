import OrderButton from './OrderButton';
import { CircleCheckBig } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
      <div className="flex items-center justify-center mb-6">
          <CircleCheckBig className="h-16 w-16 text-green-700 mr-2" />
        </div>
        <p className="text-xl mb-8">
          لا تدع الوقت يمر وأنت في حالة من القلق أو الإحباط. <span className='text-green-800 font-bold'>استرجع حياتك الجنسية بكل حيوية وأمان، واستعد لاستعادة الشعور بالقوة والمتعة في كل لحظة.</span> صحتك الجنسية جزء من صحتك العامة، وحقك أن تشعر بالقوة والثقة في نفسك.
        </p>
        <OrderButton />
      </div>
    </section>
  );
};

export default FinalCTASection;