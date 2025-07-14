import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-14">
      {/* list img */}
      <img
        src="list.webp"
        alt="list"
        loading="eager"
        className="w-full mt-1.5 md:h-4 sm:h-3 h-2"
      />
      <div className="bg-[url('../public/footer.webp')] bg-cover bg-center h-[80vh] w-full bg-black text-white flex flex-col items-end gap-10 justify-center px-[6%]">
        <p className="sm:w-[70%] lg:w-[50%] lg:text-2xl md:text-xl sm:text-lg text-base">
          نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر. في
          مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت وروح الفلاحين، مع
          لمسة من الإبداع والتجديد في كل طبق
        </p>
        <div className="flex items-center gap-2">
          <p>
            حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف
            ٤ ونص مساكن
          </p>
          <MapPin className="w-9" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
