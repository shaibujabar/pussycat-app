import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const cats = [
  {
    name: "Mochi",
    breed: "Ragdoll · 12 weeks",
    color: "Cream & seal",
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=85",
    tag: "Gentle soul",
  },
  {
    name: "Pepper",
    breed: "British Shorthair · 16 weeks",
    color: "Silver tabby",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85",
    tag: "Little explorer",
  },
  {
    name: "Clover",
    breed: "Maine Coon · 14 weeks",
    color: "Tortoiseshell",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85",
    tag: "Loves a cuddle",
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="The Purrfect Home home">
          <span className="brand-icon">✳</span> the purrfect home
        </a>
        <nav aria-label="Main navigation">
          <a href="#cats">Our cats</a>
          <a href="#about">Our promise</a>
          <a href="#contact">Get in touch</a>
        </nav>
        <a className="header-cta" href="#cats">Meet your match <span>↗</span></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> GOOD CATS. GOOD PEOPLE.</span>
            <h1>A little more<br /> <em>love</em> in your life.</h1>
            <p>Big personalities, tiny paws. Meet the healthy, happy cats looking for a place to call home.</p>
            <a className="button button-dark" href="#cats">Find your feline <span>↗</span></a>
            <div className="happy-note">
              <div className="avatar-stack" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=90&q=75" alt="" />
                <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=90&q=75" alt="" />
                <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=90&q=75" alt="" />
              </div>
              <span><strong>240+ happy homes</strong><br />and counting <span className="tiny-heart">♥</span></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo" role="img" aria-label="A curious ginger cat relaxing at home" />
            <div className="photo-label"><span>✳</span><span>FIND YOUR<br />FOREVER FRIEND</span></div>
            <span className="floating-heart" aria-hidden="true">♡</span>
          </div>
          <span className="side-note">RAISED WITH CARE, ALWAYS</span>
        </section>

        <section className="cats-section" id="cats">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR NEW ROOMMATE</span>
              <h2>Meet the <em>sweethearts.</em></h2>
            </div>
            <a className="text-link" href="#contact">See all cats <span>↗</span></a>
          </div>
          <div className="cat-grid">
            {cats.map((cat) => (
              <article className="cat-card" key={cat.name}>
                <div className="cat-image-wrap">
                  <img className="cat-image" src={cat.image} alt={`${cat.name}, a ${cat.color.toLowerCase()} cat`} />
                  <span className="cat-tag">{cat.tag}</span>
                  <span className="favorite" aria-hidden="true">♡</span>
                </div>
                <div className="cat-info">
                  <div><h3>{cat.name}</h3><p>{cat.breed}</p></div>
                  <span className="cat-color">{cat.color}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promise" id="about">
          <span className="promise-mark">✳</span>
          <p>More than cute faces. We raise confident, healthy companions with <em>care, patience, and lots of play.</em></p>
          <a href="#contact" className="promise-link">Here's what makes us different <span>↗</span></a>
        </section>

        <section className="contact" id="contact">
          <div>
            <span className="eyebrow">THE FIRST HELLO</span>
            <h2>Ready for a little <em>purr</em> in your life?</h2>
          </div>
          <a className="button button-dark" href="mailto:hello@thepurrfecthome.example">Say hello <span>↗</span></a>
        </section>
      </main>

      <footer><a className="brand" href="#"><span className="brand-icon">✳</span> the purrfect home</a><span>Small paws, big love. © 2025</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
