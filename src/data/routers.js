import g from "../assets/zahraa/tplink.jpg";
import h from "../assets/zahraa/tplink2.jpg";
import j from "../assets/zahraa/dlink.jpg";
import k from "../assets/zahraa/dlink2.jpg";

const routers = [
  {
    id: "r1",
    name: "tp-Link td",
    description: "راوتر موثوق للإنترنت المنزلي.",
    price: 39,
    image: g,
    details:
      "يدعم سرعات تصل إلى 300Mbps، هوائيان خارجيان، إعداد سهل، ودعم IPv6",
  },
  {
    id: "r2",
    name: "tp-Link archer",
    description: "أداء ثابت مع تغطية جيدة",
    price: 49,
    image: h,
    details:
      "راوتر DSL بسرعة تصل إلى 150Mbps، حماية WPA/WPA2، وواجهة إدارة سهلة.",
  },
  {
    id: "r3",
    name: "D-Link dsl",
    description: "سرعات عالية للشبكات الكبيرة.",
    price: 59,
    image: j,
    details:
      "راوتر AC1200 مع هوائيات مزدوجة، يدعم نطاق 2.4GHz و 5GHz، مثالي للبث والألعاب.",
  },
  {
    id: "r4",
    name: "D-Link 233",
    description: "تصميم صغير وأداء قوي.",
    price: 69,
    image: k,
    details: "يدعم سرعات تصل إلى 750Mbps، منافذ LAN متعددة، ومؤشر إشارة LED",
  },
];
export default routers;
