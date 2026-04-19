# javascript
const academyIcons = [
  "language",
  "school",
  "handshake",
  "workspace_premium",
  "diversity_3",
  "fact_check",
  "flight_takeoff",
  "construction"
];


    <div className="academy-module-showcase">
    <div className="academy-module-grid">
        {academyModules.map((module, index) => (
        <article
            className={`academy-module-card ${
            index === 0 ? "academy-module-card--featured" : ""
            }`}
            key={module}
        >
            <span className="academy-module-icon material-symbols-outlined" aria-hidden="true">
            {academyIcons[index % academyIcons.length]}
            </span>

            <div className="academy-module-content">
            <span className="academy-module-label">Training Module</span>
            <h3>{module}</h3>
            </div>

            <span className="academy-module-glow" aria-hidden="true" />
        </article>
        ))}
    </div>
    </div>

# CSS
 .academy-module-showcase {
  position: relative;
}

.academy-module-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.academy-module-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  min-height: 104px;
  padding: 1.1rem 1.1rem 1.1rem 1rem;
  border-radius: 22px;
  background:
    linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03)),
    rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    background 0.28s ease;
}

.academy-module-card:hover {
  transform: translateY(-4px);
  border-color: rgba(243, 200, 105, 0.45);
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.24);
  background:
    linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05)),
    rgba(255,255,255,0.07);
}

.academy-module-card--featured {
  background:
    linear-gradient(135deg, rgba(193, 18, 31, 0.24), rgba(243, 200, 105, 0.12)),
    rgba(255,255,255,0.06);
  border-color: rgba(243, 200, 105, 0.28);
}

.academy-module-icon {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: linear-gradient(135deg, #f3c869, #fff1bc);
  color: #7a1620;
  font-size: 1.65rem;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.65),
    0 10px 22px rgba(243, 200, 105, 0.25);
}

.academy-module-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.academy-module-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 247, 214, 0.72);
}

.academy-module-content h3 {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.45;
  font-weight: 700;
  color: #fffdf7;
}

.academy-module-glow {
  position: absolute;
  top: -28px;
  right: -28px;
  width: 96px;
  height: 96px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(243, 200, 105, 0.22), transparent 68%);
  pointer-events: none;
}

@media (max-width: 720px) {
  .academy-module-grid {
    grid-template-columns: 1fr;
  }

  .academy-module-card {
    min-height: 92px;
    padding: 1rem;
    border-radius: 18px;
  }

  .academy-module-icon {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 1.45rem;
  }

  .academy-module-content h3 {
    font-size: 0.96rem;
  }
}