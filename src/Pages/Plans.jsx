import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Plans.css";

const API_BASE = "https://gemdashboard-production.up.railway.app/api";

function safeString(value) {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  return String(value);
}

function safeNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const n = typeof value === "string" ? Number(value) : NaN;
  return Number.isFinite(n) ? n : null;
}

function formatPrice(price) {
  const n = safeNumber(price);
  if (n === null) return "";
  // Avoid i18n complexity; keep it predictable.
  return `$${n} / month`;
}

function normalizeFeatures(features) {
  // API schema uses PlanFeature[] where each item has { id, feature }
  if (!Array.isArray(features)) return [];
  return features
    .map((f) => {
      if (!f) return null;
      if (typeof f === "string") return f;
      return typeof f.feature === "string" ? f.feature : null;
    })
    .filter(Boolean);
}

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="membership-hero">
      <div className="membership-hero-content">
        <h1 className="membership-hero-title">CHOOSE YOUR GEMFIT PATH</h1>
        <p className="membership-hero-text">
          Strength has levels — find yours. No excuses, no limits, just pure
          discipline.
        </p>
        <div className="cta-buttons">
          <button
            className="btn neon"
            type="button"
            onClick={() => navigate("/signin")}
          >
            JOIN NOW
          </button>
          <button
            className="btn outline"
            type="button"
            onClick={() => {
              const el = document.getElementById("plans-section");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            VIEW PLANS
          </button>
        </div>
      </div>
    </section>
  );
}

function MembershipPlans({ plans, loading, error, onRetry, onChoosePlan }) {
  return (
    <section id="plans-section" className="membership-plans">

      <h2>MEMBERSHIP PLANS</h2>

      {loading && <div style={{ color: "#e0e0e0" }}>Loading plans…</div>}

      {!loading && error && (
        <div
          style={{
            margin: "1.5rem auto",
            maxWidth: 700,
            color: "#ff6b6b",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 700 }}>Failed to load plans.</div>
          <div style={{ opacity: 0.9, marginTop: 8 }}>{error}</div>
          <button
            className="btn outline"
            type="button"
            onClick={onRetry}
            style={{ marginTop: 16 }}
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="plans-grid">
          {plans.length === 0 ? (
            <div style={{ color: "#e0e0e0" }}>No plans available.</div>
          ) : (
            plans.map((plan) => {
              const name = safeString(plan?.plan_name || plan?.name);
              const priceText = formatPrice(plan?.price);
              const features = normalizeFeatures(plan?.features);

              return (
                <div key={plan?.id ?? name} className="plan-card">
                  <h3>{name || "Plan"}</h3>
                  <p className="plan-price">{priceText}</p>
                  <ul className="plan-features">
                    {features.slice(0, 8).map((f, idx) => (
                      <li key={`${idx}-${f}`}>{f}</li>
                    ))}
                    {features.length === 0 && <li>No features listed.</li>}
                  </ul>
                  <button
                    className="btn neon"
                    type="button"
                    onClick={() => onChoosePlan(plan)}
                  >
                    Choose {name || "Plan"}
                  </button>

                </div>
              );
            })
          )}
        </div>
      )}
    </section>
  );
}

function ComparisonTable({ plans }) {
  // Keep the UI stable even if backend changes.
  const columns = plans.slice(0, 3);
  const planNames = columns.map((p) => safeString(p?.plan_name || p?.name) || "");

  const featureRows = [
    { label: "Status", value: (p) => (p?.status ? "✔" : "—") },
    { label: "Popular", value: (p) => (p?.is_popular ? "✔" : "—") },
    { label: "Billing", value: (p) => safeString(p?.billing_period) },
  ];

  return (
    <section className="membership-comparison">
      <h2>COMPARE OUR PLANS</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Features</th>
            {planNames.map((n, i) => (
              <th key={`${n}-${i}`}>{n || `Plan ${i + 1}`}</th>
            ))}
            {columns.length < 3 &&
              Array.from({ length: 3 - columns.length }).map((_, i) => (
                <th key={`empty-${i}`}>—</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {featureRows.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              {columns.map((p, i) => (
                <td key={`${row.label}-${i}`}>{row.value(p)}</td>
              ))}
              {columns.length < 3 &&
                Array.from({ length: 3 - columns.length }).map((_, i) => (
                  <td key={`${row.label}-empty-${i}`}>—</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="membership-testimonials">
      <h2>WHAT OUR MEMBERS SAY</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>
            “Joining GEMFIT was the best decision I’ve made. The Pro plan gave
            me access to classes that keep me motivated every single day.”
          </p>
          <h4>— Sarah M.</h4>
        </div>
        <div className="testimonial-card">
          <p>
            “The Elite plan transformed my training. Weekly coaching sessions
            pushed me beyond limits I didn’t think possible.”
          </p>
          <h4>— Ahmed R.</h4>
        </div>
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
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-item">
        <h3>Can I upgrade my plan later?</h3>
        <p>
          Yes! You can upgrade at any time and only pay the difference for the
          current billing cycle.
        </p>
      </div>
      <div className="faq-item">
        <h3>Do you offer student discounts?</h3>
        <p>Absolutely. Students receive 15% off all plans with valid ID.</p>
      </div>
      <div className="faq-item">
        <h3>Is there a contract?</h3>
        <p>
          No long-term contracts. All memberships are month-to-month with the
          freedom to cancel anytime.
        </p>
      </div>
      <div className="faq-item">
        <h3>Can I bring a guest?</h3>
        <p>
          Yes. Guest passes are included depending on your plan tier (Basic: 1,
          Pro: 3, Elite: Unlimited).
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section className="membership-cta">
      <div className="membership-cta-content">
        <h2>THE IRON IS WAITING</h2>
        <p>
          No excuses. No limits. Choose your plan today and step into the GEMFIT
          arena.
        </p>
        <div className="cta-buttons">
          <button
            className="btn neon"
            type="button"
            onClick={() => navigate("/signin")}
          >
            Join GEMFIT Now
          </button>
          <button
            className="btn outline"
            type="button"
            onClick={() => {
              const el = document.getElementById("plans-section");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Explore Memberships
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Plans() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPlans = async () => {
    setLoading(true);
    setError("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      // Public endpoint: GET /plans?status=active
      const url = new URL(`${API_BASE}/plans`);
      url.searchParams.set("status", "active");
      url.searchParams.set("per_page", "20");

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        signal: controller.signal,
      });

      if (!res.ok) {
        // Do not leak internal details.
        throw new Error(`Request failed (${res.status})`);
      }

      const json = await res.json();

      const data = json?.data;
      // API returns paginated response where `data` is the list.
      const list = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];

      setPlans(list);
    } catch (e) {
      const msg = e?.name === "AbortError" ? "Request timed out." : "Network error.";
      setError(msg);
      setPlans([]);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Wrap in an inner function to avoid lint warnings and keep render pure.
    const run = async () => {
      await fetchPlans();
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const memoPlans = useMemo(() => plans ?? [], [plans]);

  return (
    <>
      <Hero />
      <MembershipPlans
        plans={memoPlans}
        loading={loading}
        error={error}
        onRetry={fetchPlans}
        onChoosePlan={(plan) => {
          // Routes available in navbar/router:
          // - /signin exists.
          // - /shop exists (and is the closest “next step” page).
          const token = localStorage.getItem("token") || sessionStorage.getItem("token");
          const target = token ? "/shop" : "/signin";
          navigate(target, {
            state: { chosenPlanId: plan?.id ?? null },
          });
        }}

      />

      <ComparisonTable plans={memoPlans} />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

