import React from "react";
import "../Styles/Plans.css";

function Hero() {
  return (
    <section className="membership-hero">
      <div className="membership-hero-content">
        {/* 🔹 Big Headline */}
        <h1 className="membership-hero-title">CHOOSE YOUR GEMFIT PATH</h1>

        {/* 🔹 Tagline */}
        <p className="membership-hero-text">
          Strength has levels — find yours.  
          No excuses, no limits, just pure discipline.
        </p>

        {/* 🔹 Call to Action Buttons */}
        <div className="cta-buttons">
          <button className="btn neon">JOIN NOW</button>
          <button className="btn outline">VIEW PLANS</button>
        </div>
      </div>
    </section>
  );
}

function MembershipPlans() {
  return (
    <section className="membership-plans">
      {/* 🔹 Section Title */}
      <h2>MEMBERSHIP PLANS</h2>

      {/* 🔹 Plans Grid */}
      <div className="plans-grid">
        {/* Basic Plan */}
        <div className="plan-card">
          <h3>Basic</h3>
          <p className="plan-price">$29 / month</p>
          <ul className="plan-features">
            <li>Access to gym equipment</li>
            <li>Locker room facilities</li>
            <li>1 guest pass per month</li>
          </ul>
          <button className="btn neon">Choose Basic</button>
        </div>

        {/* Pro Plan */}
        <div className="plan-card">
          <h3>Pro</h3>
          <p className="plan-price">$59 / month</p>
          <ul className="plan-features">
            <li>All Basic features</li>
            <li>Unlimited group classes</li>
            <li>2 personal training sessions</li>
            <li>Recovery suite access</li>
          </ul>
          <button className="btn neon">Choose Pro</button>
        </div>

        {/* Elite Plan */}
        <div className="plan-card">
          <h3>Elite</h3>
          <p className="plan-price">$99 / month</p>
          <ul className="plan-features">
            <li>All Pro features</li>
            <li>Weekly 1-on-1 coaching</li>
            <li>Exclusive competition prep</li>
            <li>Priority booking & VIP lounge</li>
          </ul>
          <button className="btn neon">Choose Elite</button>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="membership-comparison">
      {/* 🔹 Section Title */}
      <h2>COMPARE OUR PLANS</h2>

      {/* 🔹 Comparison Table */}
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Elite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gym Equipment Access</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Group Classes</td>
            <td>Limited</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Personal Training</td>
            <td>—</td>
            <td>2 Sessions</td>
            <td>Weekly Coaching</td>
          </tr>
          <tr>
            <td>Recovery Suite</td>
            <td>—</td>
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Guest Passes</td>
            <td>1 / month</td>
            <td>2 / month</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>VIP Lounge</td>
            <td>—</td>
            <td>—</td>
            <td>✔</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="membership-testimonials">
      {/* 🔹 Section Title */}
      <h2>WHAT OUR MEMBERS SAY</h2>

      {/* 🔹 Testimonials Grid */}
      <div className="testimonials-grid">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <p>
            “Joining GEMFIT was the best decision I’ve made. The Pro plan gave me
            access to classes that keep me motivated every single day.”
          </p>
          <h4>— Sarah M.</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <p>
            “The Elite plan transformed my training. Weekly coaching sessions
            pushed me beyond limits I didn’t think possible.”
          </p>
          <h4>— Ahmed R.</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <p>
            “I started with the Basic plan and quickly upgraded. GEMFIT’s
            community and recovery suite make it more than just a gym.”
          </p>
          <h4>— Lina K.</h4>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="membership-faq">
      {/* 🔹 Section Title */}
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      {/* 🔹 FAQ Items */}
      <div className="faq-item">
        <h3>Can I upgrade my plan later?</h3>
        <p>Yes! You can upgrade at any time and only pay the difference for the current billing cycle.</p>
      </div>

      <div className="faq-item">
        <h3>Do you offer student discounts?</h3>
        <p>Absolutely. Students receive 15% off all plans with valid ID.</p>
      </div>

      <div className="faq-item">
        <h3>Is there a contract?</h3>
        <p>No long-term contracts. All memberships are month-to-month with the freedom to cancel anytime.</p>
      </div>

      <div className="faq-item">
        <h3>Can I bring a guest?</h3>
        <p>Yes. Guest passes are included depending on your plan tier (Basic: 1, Pro: 3, Elite: Unlimited).</p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="membership-cta">
      <div className="membership-cta-content">
        {/* 🔹 Headline */}
        <h2>THE IRON IS WAITING</h2>

        {/* 🔹 Motivational Text */}
        <p>
          No excuses. No limits.  
          Choose your plan today and step into the GEMFIT arena.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn neon">Join GEMFIT Now</button>
          <button className="btn outline">Explore Memberships</button>
        </div>
      </div>
    </section>
  );
}

function Plans(){

    return(
        <>
        <Hero />
        <MembershipPlans />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        </>
    )
}

export default Plans;
