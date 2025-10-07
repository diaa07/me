import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="home-left-section">
          <div className="left-section-container">
            <div className="hi">Hello</div>
            <div className="hint">
              I'm Diaa Aldin <span className="accent">Drak Alsebai</span>
            </div>
            <div className="hint">
              I'm a <span className="accent"> frontend developer</span>
            </div>
            <div className="hint-third">
              I can help you create a{" "}
              <span className="accent">professional</span> ,{" "}
              <span className="accent">fast</span> , and{" "}
              <span className="accent">visually appealing </span>
              website with{" "}
              <span className="accent">clean UI and smooth UX</span> that
              reflects your brand and keeps users engaged.
            </div>
            <button className="main-cta-button">
              {" "}
              <a href="#contact">Get in touch</a>
            </button>
          </div>
        </div>
        <div className="home-right-section">
          <img
            src="https://i.ibb.co/gbNXf3KV/Picsart-25-10-03-14-34-00-719.png"
            alt="personal image"
            border="0"
          ></img>
        </div>
      </div>
    </>
  );
}
