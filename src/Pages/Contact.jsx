import { ContactInfo } from "../components/ContactInfo.jsx";
import { ContactHero } from "../components/ContactHero.jsx";
import { ContactForm } from "../components/ContactForm.jsx";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div>
      <ContactHero />
      <section className="contact-content">
        <ContactInfo />
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
