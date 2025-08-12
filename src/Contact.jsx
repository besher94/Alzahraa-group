const Contact = () => {
  return (
    <>
      <main className="contact-main">
        <h1 id="head">اتصل بنا</h1>
        <h1 id="zahraa"> مجموعة الزهراء</h1>
        <h2>
          هاتف: <span>098777878</span>
        </h2>
        <h2>
          {" "}
          مبيعات: <span>5362</span>
        </h2>
        <h2>
          صيانة: <span>02898976</span>
        </h2>
        <h2>
          شكاوي: <span>097654554</span>
        </h2>
        <h2>
          البريد الالكتروني:
          <a href="mailto:masri-m@alzahraa-it.com" target="_blank">
            masri-m@alzahraa-it.com
          </a>
        </h2>
        <h1>الموقع</h1>
        <h2>سوريا-حلب-الجميلية -امام فطائر الذواق</h2>

        <div id="iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.7141531701278!2d37.1425785283184!3d36.20743939772151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff813dd572ad7%3A0x5280d1ae77d22096!2s644V%2BX2J%2C%20Isekenderun%20St%2C%20Aleppo%2C%20Syria!5e0!3m2!1sen!2sus!4v1754966889493!5m2!1sen!2sus"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default Contact;
