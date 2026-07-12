export function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="info-box">
        <span className="section-title">STUDIO</span>

        <h2>
          1200 INDUSTRIAL AVE
          <br />
          BROOKLYN, NY 11211
        </h2>
      </div>

      <div className="info-box">
        <span className="section-title">HOURS</span>

        <p className="big-text">Monday — Sunday</p>

        <p className="big-text">05:00 → 23:00</p>

        <p className="gray-text">24/7 access for Iron Totality tier</p>
      </div>

      <div className="info-box">
        <span className="section-title">DIRECT</span>

        <p className="big-text">+1 (718) 555-0142</p>

        <p className="big-text">hello@ironreign.gym</p>
      </div>

      <div className="faq">
        <span className="section-title">FAQ</span>

        <div className="faq-item">
          <h3>DO I NEED TO BOOK CLASSES?</h3>

          <p>
            Every class has limited capacity. Reserve your spot through the app.
          </p>
        </div>

        <div className="faq-item">
          <h3>IS THERE A TRIAL?</h3>

          <p>One free class and seven-day trial.</p>
        </div>

        <div className="faq-item">
          <h3>PARKING?</h3>

          <p>Free parking available next to the gym.</p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
