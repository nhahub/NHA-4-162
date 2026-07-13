
import "../Styles/home.css";
import { useNavigate } from "react-router-dom";

// Home.jsx is intentionally self-contained (no external section files).
// Each page section is split into its own internal component, and all are composed below.

function HeroSection({ navigate }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('../g1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div> {/* dark overlay for readability */}
      <div className="hero-content">
        {/* 🔹 Tagline */}
        <p className="hero-subtitle">EST. 2024 / BROOKLYN NY</p>

        {/* 🔹 Big Headline */}
        <h1 className="hero-title">
          UNLEASH <span>THE IRON</span>
        </h1>

        {/* 🔹 Supporting Text */}
        <p className="hero-text">
          Step into the arena where shadows meet neon. No excuses. No fluff.
          Just raw strength forged in sweat and steel. Discipline beats
          motivation — every single time.
        </p>

        {/* 🔹 Call to Action Buttons */}
        <div className="hero-buttons">
          <button onClick={() => navigate("/signin")} className="btn neon">
            JOIN THE CLUB
          </button>
          <button onClick={() => navigate("/classes")} className="btn outline">
            EXPLORE CLASSES
          </button>
          <button
            onClick={() => navigate("/memberships")}
            className="btn outline"
          >
            VIEW MEMBERSHIPS
          </button>
        </div>

        {/* 🔹 Quick Highlights */}
        <div className="hero-highlights">
          <div className="highlight">
            <h3>500+</h3>
            <p>Members Forged</p>
          </div>
          <div className="highlight">
            <h3>12</h3>
            <p>Elite Coaches</p>
          </div>
          <div className="highlight">
            <h3>24/7</h3>
            <p>Access for Elite Tier</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats">
      <div className="stat">
        <h2>500+</h2>
        <p>ACTIVE MEMBERS</p>
      </div>
      <div className="stat">
        <h2>12</h2>
        <p>ELITE COACHES</p>
      </div>
      <div className="stat">
        <h2>24/7</h2>
        <p>ACCESS FOR ELITE TIER</p>
      </div>
      <div className="stat">
        <h2>18k sqft</h2>
        <p>OF RAW IRON</p>
      </div>
    </section>
  );
}

function ClassesPreviewSection({ classes, navigate }) {
  return (
    <section
      className="classes-preview"
      style={{
        backgroundImage: "url('../g7.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark neon vibe */}
      <div className="classes-overlay"></div>

      <div className="classes-content">
        <h2 className="section-title">TODAY'S FIRE</h2>
        <div className="class-grid">
          {classes.map((c) => (
            <div key={c.title} className="class-card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/classes")}
          className="link"
          style={{ background: "transparent", border: "none" }}
        >
          VIEW FULL SCHEDULE →
        </button>
      </div>
    </section>
  );
}

function MembershipTeaserSection({ memberships, navigate }) {
  return (
    <section className="membership-teaser">
      {/* 🔹 Membership Teaser */}
      <h2>BUILD YOUR CONTRACT</h2>
      <div className="membership-options">
        {memberships.map((m) => (
          <div key={m.name} className="membership-card">
            <h3>{m.name}</h3>
            <p>{m.desc}</p>
            <div className="price">{m.price}</div>
            <button
              onClick={() => navigate("/memberships")}
              className="btn neon"
              style={{ marginTop: "2rem" }}
            >
              {m.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonials }) {
  return (
    <section
      className="testimonials"
      style={{
        backgroundImage: "url('../g10.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Testimonials */}
      <h2>THE IRON SPEAKS</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.author} className="testimonial-card">
            <p>“{t.quote}”</p>
            <div className="author">{t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShopPreviewSection({ products }) {
  return (
    <section className="shop-preview">
      {/* 🔹 Shop Preview */}
      <h2>SHOP THE GRIT</h2>
      <div className="shop-grid">
        {products.map((p) => (
          <div key={p.name} className="product-card">
            <img
              src="/assets/p1.png"
              alt={p.name}
              loading="lazy"
              onError={(e) => {
                // Hide broken images if assets don't exist.
                e.currentTarget.style.display = "none";
              }}
            />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="price">{p.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogPreviewSection({ blogPosts }) {
  return (
    <section
      className="blog-preview"
      style={{
        backgroundImage: "url('../g12.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Blog / Resources */}
      <h2>WAR ROOM NOTES</h2>
      <div className="blog-grid">
        {blogPosts.map((b) => (
          <div key={b.title} className="blog-card">
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <p>READ MORE →</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MembershipCtaSection({ navigate }) {
  return (
    <section className="membership-cta">
      <div className="membership-cta-content">
      {/* 🔹 Membership CTA */}
      <h2>THE IRON IS ALREADY WAITING.</h2>
      <button onClick={() => navigate("/signin")} className="btn neon">
        START YOUR CONTRACT
      </button>
      </div>
    </section>
  );
}

function Home() {
  const navigate = useNavigate();
  const classes = [
    {
      title: "HEAVY METAL FLOW",
      desc: "Olympic lifting foundations for the obsessed.",
    },
    {
      title: "VOID CONDITIONING",
      desc: "High-intensity anaerobic capacity training.",
    },
    {
      title: "IRON ARCHITECTURE",
      desc: "Bodybuilding for symmetry and structural integrity.",
    },
  ];

  const memberships = [
    {
      name: "IRON CORE",
      desc: "Unlimited training + coached progression.",
      price: "$79",
      cta: "JOIN IRON CORE",
    },
    {
      name: "NEON ELITE",
      desc: "24/7 access + priority booking + recovery stack.",
      price: "$149",
      cta: "GO NEON ELITE",
    },
  ];

  const testimonials = [
    {
      quote:
        "I came for strength. I stayed for the discipline. Iron Reign doesn’t play.",
      author: "MAYA R.",
    },
    {
      quote:
        "Every session feels like a contract: show up, work hard, become sharper.",
      author: "JAMES K.",
    },
    {
      quote:
        "Coaches actually correct your form. Progress is measurable and relentless.",
      author: "SARAH L.",
    },
  ];

  const products = [
    {
      name: "IRON REIGN BAND SET",
      desc: "Resistance bands for warm-ups & power.",
      price: "$24",
    },
    {
      name: "NEON GRIP GLOVES",
      desc: "Sweat-proof comfort with heavy-duty grip.",
      price: "$32",
    },
    {
      name: "KINETIC PROTEIN",
      desc: "Recovery fuel—clean, consistent, brutal.",
      price: "$39",
    },
  ];

  const blogPosts = [
    {
      title: "THE DEBT PRINCIPLE",
      desc: "Why consistency beats motivation every single time.",
    },
    {
      title: "FORM IS KING",
      desc: "Three cues to keep your lifts honest and safe.",
    },
    {
      title: "TRAINING VOLUME MYTHS",
      desc: "How to grow without burning out.",
    },
  ];

  return (
    <div className="home">
      {/* 🔹 Hero Section */}
      <HeroSection navigate={navigate} />

      {/* 🔹 Stats Section */}
      <StatsSection />

      {/* 🔹 Classes Preview */}
      <ClassesPreviewSection classes={classes} navigate={navigate} />

      {/* 🔹 Membership Teaser */}
      <MembershipTeaserSection memberships={memberships} navigate={navigate} />

      {/* 🔹 Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 🔹 Shop Preview */}
      <ShopPreviewSection products={products} />

      {/* 🔹 Blog / Resources */}
      <BlogPreviewSection blogPosts={blogPosts} />

      {/* 🔹 Membership CTA */}
      <MembershipCtaSection navigate={navigate} />
    </div>
  );
}

export default Home;
