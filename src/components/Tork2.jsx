
import { CircleAlert } from "lucide-react";

import OrderButton from "./OrderButton";
export default function Tork2({ isModalOpen, setIsModalOpen }) {
  return (
    <div className="bg-gray-400 py-16 background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <CircleAlert className="h-16 w-16 text-red-600 mr-2" />
        </div>
        <p className="text2xl sm:text-3xl text-white font-semibold mb-4">
القدرة الجنسية هي جزء أساسي من حياتك، ولا يجب أن تُهمل أو تُترك دون علاج. فكلما تأخرت في معالجة مشاكل القدرة الجنسية، كلما أصبحت الأمور أكثر تعقيدًا. إذا كنت تواجه صعوبة في الحفاظ على الانتصاب أو فقدت جزءًا من رغبتك الجنسية، فقد حان الوقت لاتخاذ خطوة نحو الافضل.
</p>

        <OrderButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
}
