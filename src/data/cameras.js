import q from "../assets/zahraa/hkvision1.jpg";
import e from "../assets/zahraa/hkvision2.jpg";
import r from "../assets/zahraa/tplinkcamera.jpg";
import t from "../assets/zahraa/tplinkcamera2.jpg";
import v from "../assets/zahraa/hkvisiondvr1.jpg";
import n from "../assets/zahraa/hkvisionnvr.jpg";

const cameras = [
  {
    id: "c1",
    name: "Hikvision ip",
    description: "كاميرا IP للمراقبة المتقدمة",
    price: 29,
    image: q,
    details: "دقة 4K، اتصال عبر PoE، دعم التخزين الشبكي",
  },
  {
    id: "c2",
    name: "Hikvision DS",
    description: "كاميرا مراقبة ثابتة",
    price: 39,
    image: e,
    details: "دقة 1080p، عدسة واسعة، تصميم متين",
  },
  {
    id: "c3",
    name: "tp-Link Tapo C660 KIT.",
    description: "كاميرا مراقبة بدقة عالية",
    price: 49,
    image: r,
    details: "دقة 2K QHD، صوت ثنائي الاتجاه، كشف الحركة الذكي.",
  },
  {
    id: "c4",
    name: "tp-Link Tapo C400 KIT.",
    description: "كاميرا مراقبة خارجية ذكية",
    price: 79,
    image: t,
    details: "رؤية ليلية ملونة، مقاومة للماء IP66، دعم التخزين السحابي",
  },
  {
    id: "c5",
    name: "Hikvision Dvr",
    description: "تسجيل عالي الدقة لأنظمة الكاميرات",
    price: 399,
    image: v,
    details: "يدعم حتى 16 قناة، تسجيل بدقة 1080p، منافذ HDMI و VGA.",
  },
  {
    id: "c6",
    name: "Hikvision nvr",
    description: "جهاز تسجيل شبكي متطور.",
    price: 499,
    image: n,
    details: "يدعم حتى 8 كاميرات IP، تخزين حتى 6TB، عرض مباشر بجودة 4K",
  },
];
export default cameras;
