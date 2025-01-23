import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/1-Navbar";
import HeroSection from './components/2-HeroSection';
import ProblemsSection from './components/3-ProblemsSection';
import StatisticsSection from './components/4-StatisticsSection';
import HealthRisksSection from './components/5-HealthRisksSection';
import BenefitsSection from './components/6-BenefitsSection';
import AdditionalBenefitsSection from './components/7-AdditionalBenefitsSection';
import FAQSection from './components/9-FAQSection';
import PricingSection from './components/8-PricingSection';
import FinalCTASection from './components/10-FinalCTASection';
import Tork from './components/Tork'
import Tork2 from "./components/Tork2";
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    processed: false,
    method: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // hadnle send
  const handleSend = async () => {
    const { name, phone } = formData;

    if (!name || !phone) {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }
    setLoading(true);
    // try {
    //   // إرسال البيانات إلى Firestore
    //   await addDoc(collection(db, "orders"), {
    //     name,
    //     phone,
    //     timestamp: new Date(),
    //   });

    //   // التنقل إلى صفحة الشكر
    //   navigate("/thank-you");
    // } catch (error) {
    //   console.error("حدث خطأ أثناء إرسال البيانات:", error);
    //   alert("عذرًا، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.");
    // } finally {
    //   setLoading(false); // انتهاء التحميل
    //   setIsModalOpen(false); // غلق النافذة بعد الإرسال
    // }
    navigate("/thank-you");
    setIsModalOpen(false); // غلق النافذة بعد الإرسال
  };

  return (
    <div className="min-h-screen bg-secondary text-center" dir="rtl">
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">طلب جديد</h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  رقم الهاتف
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              {/* Quantity */}
              {/* <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  عدد العبوات المطلوبة
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل العدد"
                />
              </div> */}

              {/* Contact Method
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  طريقة التواصل
                </label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                >
                  <option value="">اختر طريقة التواصل</option>
                  <option value="whatsapp">واتساب</option>
                  <option value="telegram">تلغرام</option>
                  <option value="gmail">Gmail</option>
                </select>
              </div> */}
            </form>

            <div className="flex justify-end mt-6 space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                إلغاء
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                {loading ? "جارٍ الإرسال..." : "إرسال"}{" "}
              </button>
            </div>
          </div>
          {loading && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      )}

      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <HeroSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <ProblemsSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <StatisticsSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      
      <BenefitsSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <HealthRisksSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Tork2/>
      <AdditionalBenefitsSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <PricingSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <FAQSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <FinalCTASection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;