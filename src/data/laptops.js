import a from "../assets/zahraa/asus-tuf.jpg";
import s from "../assets/zahraa/dell.jpg";
import d from "../assets/zahraa/hp.jpg";
import f from "../assets/zahraa/lenovo.jpg";
const laptops = [
  {
    id: "l1",
    name: "asus tuf gaming",
    description: "لابتوب ألعاب قوي مع تبريد فعال",
    price: 799,
    image: a,
    details:
      "يتميز بمعالج AMD Ryzen 7، بطاقة رسومات NVIDIA GTX 3060، ذاكرة RAM بسعة 16GB، شاشة 15.6 بوصة FHD بمعدل تحديث 144Hz، وتصميم قوي يتحمل الاستخدام الشاق",
  },
  {
    id: "l2",
    name: "dell",
    description: " مناسب للعمل المكتبي والاستخدام اليومي",
    price: 699,
    image: s,
    details:
      "معالج Intel Core i5 الجيل 11، ذاكرة 8GB، قرص SSD بسعة 512GB، شاشة 14 بوصة بدقة FHD، بطارية تدوم حتى 9 ساعات",
  },
  {
    id: "l3",
    name: "hp",
    description: "أداء ممتاز ومتانة عالية",
    price: 499,
    image: d,
    details:
      "مزود بمعالج Intel Core i7، ذاكرة RAM بسعة 16GB، تخزين SSD بسعة 512GB، شاشة 15.6 بوصة عالية الدقة، هيكل معدني أنيق",
  },
  {
    id: "l4",
    name: "lenovo",
    description: "لابتوب خفيف ومثالي للتنقل",
    price: 899,
    image: f,
    details:
      "وزن خفيف، معالج AMD Ryzen 5، ذاكرة 8GB، تخزين SSD بسعة 256GB، شاشة 14 بوصة FHD، بطارية تدوم 12 ساعة",
  },
];
export default laptops;
