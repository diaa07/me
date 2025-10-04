import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home">
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
              <span className="accent">professional website </span>
              with <span className="accent">modern UI/UX</span>
            </div>
            <button className="main-cta-button">Get in touch</button>
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
