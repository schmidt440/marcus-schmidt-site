import './app.css';

export default function App() {
  return (
    <main className="main-hero">
      <header className="navbar">
        <h1>IoT Security Hub</h1>
        <nav>
          <a href="#">Blog</a>
          <a href="#">IoT Course</a>
          <a href="#">Security Checklist</a>
        </nav>
      </header>

      <section className="hero-banner">
        <img src="/profile.jpg" alt="Marcus Schmidt" className="avatar" />
        <div className="tagline">THE NETWORK YOU SEE IS ONLY HALF THE STORY…</div>
      </section>

      <h2>IoT Security Consultant & Cellular IoT Advisor helping enterprises implement scalable connected solutions</h2>

      <div className="badges">
        <span>IoT Security</span>
        <span>Cellular IoT</span>
        <span>Enterprise IoT</span>
        <span>Digital Transformation</span>
      </div>

      <div className="cta-buttons">
        <button className="dark-btn">Get Free IoT Security Guide</button>
        <button className="light-btn">LinkedIn Profile</button>
      </div>
    </main>
  );
}
