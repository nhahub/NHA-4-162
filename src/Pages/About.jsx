
import "../Styles/About.css";

function AboutHero() {
 return (
    <section className="about-hero"
    style={{
        backgroundImage: "url('../g19.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      <div className="about-hero-content">
        {/* 🔹 Big Headline */}
        <h1 className="about-hero-title">FORGED IN IRON</h1>

        {/* 🔹 Supporting Text */}
        <p className="about-hero-text">
          Since 2024, GEMFIT has been more than a gym — it’s a movement.  
          Forged in iron and built on discipline, we exist to transform strength  
          into lifestyle and community into family.  
          Step inside GEMFIT, where legends are made.
        </p>

        {/* 🔹 Call to Action */}
        <div className="hero-buttons">
          <button className="btn neon">JOIN THE FAMILY</button>
          <button className="btn outline">OUR STORY</button>
        </div>
      </div>
    </section>
  );
}


function OurStory() {
  return (
    <section className="about-story">
      {/* 🔹 Section Title */}
      <h2>OUR STORY</h2>

      {/* 🔹 Story Content */}
      <p>
        GEMFIT was born in 2024 with a simple mission: to redefine what a gym
        could be. We started as a small training space with a big vision —
        building strength, discipline, and community under one roof.
      </p>

      <p>
        From day one, GEMFIT has been more than weights and machines. It’s a
        culture forged in iron, fueled by neon energy, and driven by the belief
        that discipline beats motivation every time.
      </p>

      <p>
        Today, GEMFIT stands as a home for athletes, dreamers, and everyday
        warriors. Whether you’re chasing your first rep or your next title,
        GEMFIT is where legends are made.
      </p>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="about-philosophy"
    style={{
        backgroundImage: "url('../g20.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      {/* 🔹 Section Title */}
      <h2>OUR PHILOSOPHY</h2>

      {/* 🔹 Values Grid */}
      <div className="values-grid">
        {/* Discipline */}
        <div className="value-card">
          <h3>Discipline</h3>
          <p>
            At GEMFIT, discipline beats motivation. We believe consistency
            builds strength that lasts a lifetime.
          </p>
        </div>

        {/* Strength */}
        <div className="value-card">
          <h3>Strength</h3>
          <p>
            Strength is more than muscle — it’s resilience, focus, and the power
            to push past limits.
          </p>
        </div>

        {/* Community */}
        <div className="value-card">
          <h3>Community</h3>
          <p>
            GEMFIT is a family. Together we train, grow, and support each other
            inside and outside the gym.
          </p>
        </div>

        {/* Recovery */}
        <div className="value-card">
          <h3>Recovery</h3>
          <p>
            True progress comes with balance. Recovery is as vital as training,
            ensuring longevity and peak performance.
          </p>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="about-facilities">
      <div className="facilities-content">
        {/* 🔹 Section Title */}
        <h2>OUR FACILITIES</h2>

        {/* 🔹 Facilities Grid */}
        <div className="facilities-grid">
          {/* Weights Area */}
          <div className="facility-card">
            <h3>Weights Arena</h3>
            <p>
              Heavy iron, Olympic platforms, and racks built for serious lifters.
              The heart of GEMFIT’s strength culture.
            </p>
          </div>

          {/* Conditioning Zone */}
          <div className="facility-card">
            <h3>Conditioning Zone</h3>
            <p>
              High-intensity training space with sleds, ropes, and rigs designed
              to push endurance to the limit.
            </p>
          </div>

          {/* Recovery Suite */}
          <div className="facility-card">
            <h3>Recovery Suite</h3>
            <p>
              Dedicated recovery area with mobility tools, stretching zones, and
              guidance for long-term performance.
            </p>
          </div>

          {/* Functional Training */}
          <div className="facility-card">
            <h3>Functional Training</h3>
            <p>
              Open floor for dynamic movement, kettlebells, and bodyweight
              training — where versatility meets strength.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coaches() {
  return (
    <section className="about-coaches"
    style={{
        backgroundImage: "url('../g21.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      {/* 🔹 Section Title */}
      <h2>MEET OUR COACHES</h2>

      {/* 🔹 Coaches Grid */}
      <div className="coaches-grid">
        {/* Coach 1 */}
        <div className="coach-card">
          <h3>Alex Johnson</h3>
          <p>
            Strength & Conditioning Specialist.  
            Known for pushing athletes beyond their limits with precision training.
          </p>
        </div>

        {/* Coach 2 */}
        <div className="coach-card">
          <h3>Maria Lopez</h3>
          <p>
            Olympic Lifting Expert.  
            Focused on technique, discipline, and building explosive power.
          </p>
        </div>

        {/* Coach 3 */}
        <div className="coach-card">
          <h3>Sam Carter</h3>
          <p>
            Bodybuilding & Aesthetics Coach.  
            Dedicated to symmetry, muscle growth, and stage-ready physiques.
          </p>
        </div>

        {/* Coach 4 */}
        <div className="coach-card">
          <h3>Layla Ahmed</h3>
          <p>
            Functional Training & Mobility Specialist.  
            Helping athletes move better, recover faster, and perform longer.
          </p>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="about-community">
      <div className="community-content">
        {/* 🔹 Section Title */}
        <h2>OUR COMMUNITY</h2>

        {/* 🔹 Testimonials Grid */}
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <p>
              “GEMFIT isn’t just a gym — it’s a family. The energy here pushes
              me to be my best every single day.”
            </p>
            <h4>— Sarah M.</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <p>
              “I came for the weights, but I stayed for the people. GEMFIT’s
              coaches and members make training addictive.”
            </p>
            <h4>— Ahmed K.</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <p>
              “The neon vibe, the discipline, the culture — GEMFIT is where I
              found my strength and my second home.”
            </p>
            <h4>— Lisa R.</h4>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-card">
            <p>
              “Every session feels like stepping into an arena. GEMFIT pushes
              you beyond limits and celebrates every victory.”
            </p>
            <h4>— Omar T.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="about-achievements"
    style={{
        backgroundImage: "url('../g8.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
      {/* 🔹 Section Title */}
      <h2>OUR ACHIEVEMENTS</h2>

      {/* 🔹 Achievements Grid */}
      <div className="achievements-grid">
        {/* Achievement 1 */}
        <div className="achievement-card">
          <h3>500+</h3>
          <p>
            Members transformed through GEMFIT’s training programs since our
            founding in 2024.
          </p>
        </div>

        {/* Achievement 2 */}
        <div className="achievement-card">
          <h3>25</h3>
          <p>
            Certified coaches and specialists guiding athletes across strength,
            conditioning, and recovery.
          </p>
        </div>

        {/* Achievement 3 */}
        <div className="achievement-card">
          <h3>12</h3>
          <p>
            Competitions won by GEMFIT athletes, proving our culture breeds
            champions.
          </p>
        </div>

        {/* Achievement 4 */}
        <div className="achievement-card">
          <h3>18,000</h3>
          <p>
            Square feet of training space designed for discipline, growth, and
            community.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-content">
        {/* 🔹 Section Title */}
        <h2>READY TO JOIN GEMFIT?</h2>

        {/* 🔹 Motivational Text */}
        <p>
          Discipline. Strength. Community. Recovery.  
          GEMFIT is more than a gym — it’s a movement.  
          Step into the neon arena and become part of the legacy.
        </p>

        {/* 🔹 Call to Action Buttons */}
        <div className="cta-buttons">
          <button className="btn neon">BECOME A MEMBER</button>
          <button className="btn outline">BOOK A TOUR</button>
        </div>
      </div>
    </section>
  );
}


function About(){

    return(
    <>
    <AboutHero />
    <OurStory />
    <Philosophy />
    <Facilities/>
    <Coaches />
    <Community />
    <Achievements />
    <CTA />
    </>

    );
}

export default About;
