import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRoutes from "./AppRoutes.jsx";
import ReactPixel from "react-facebook-pixel";
// إعداد Facebook Pixel
const pixelId = 1397523221626934; // ضع هنا رقم الـ Pixel ID الخاص بك
ReactPixel.init(pixelId); // تهيئة Facebook Pixel
ReactPixel.pageView(); // تتبع أول زيارة للصفحة


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
