import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Membership question",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://gemdashboard-production.up.railway.app/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Your message has been sent!", {
          style: {
            background: "#0b0b0b",
            color: "#fff",
            border: "2px solid #c7ff29",
            padding: "18px",
          },
          iconTheme: {
            primary: "#c7ff29",
            secondary: "#000",
          },
        });

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          subject: "Membership question",
          message: "",
        });

        setErrors({});
      } else {
        toast.error(data.message || "Something went wrong!", {
          style: {
            background: "#0b0b0b",
            color: "#fff",
            border: "2px solid #ff4d4f",
          },
        });
      }
    } catch (error) {
      console.error(error);

      toast.error("Server Error", {
        style: {
          background: "#0b0b0b",
          color: "#fff",
          border: "2px solid #ff4d4f",
        },
      });
    }
  }

  return (
    <section className="contact-form">
      <form onSubmit={handleSubmit}>
        <h5>SEND A MESSAGE</h5>

        <div className="input-row">
          <div className="input-box">
            <label>FIRST NAME</label>

            <input
              className={errors.firstName ? "input-error" : ""}
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <small className="error-text">{errors.firstName}</small>
            )}
          </div>

          <div className="input-box">
            <label>LAST NAME</label>

            <input
              className={errors.lastName ? "input-error" : ""}
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />

            {errors.lastName && (
              <small className="error-text">{errors.lastName}</small>
            )}
          </div>
        </div>

        <div className="input-box">
          <label>EMAIL</label>

          <input
            className={errors.email ? "input-error" : ""}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <small className="error-text">{errors.email}</small>}
        </div>

        <div className="input-box">
          <label>WHAT DO YOU WANT?</label>

          <select name="subject" value={form.subject} onChange={handleChange}>
            <option>Membership question</option>
            <option>Trial pass</option>
            <option>Personal coaching</option>
            <option>Something else</option>
          </select>
        </div>

        <div className="input-box">
          <label>MESSAGE</label>

          <textarea
            className={errors.message ? "textarea-error" : ""}
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && (
            <small className="error-text">{errors.message}</small>
          )}
        </div>

        <button type="submit">SEND MESSAGE</button>
      </form>
    </section>
  );
}

export default ContactForm;
