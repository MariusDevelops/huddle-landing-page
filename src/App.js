import "./dist/App.css";
import logo1 from "./images/logo.svg";
import image from "./images/illustration-mockups.svg";

function App() {
  return (
    <main>
      <div className="wrapper">
        <section className="section1">
          <div>
            <Logo />
          </div>
          <div>
            <Illustration />
          </div>
        </section>

        <section className="section2">
          <h1>
            Build The Community <br /> Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
          <div className="icons">
            <div className="fbicon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </section>
      </div>

      <footer className="attribution">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://mariusdevelops.github.io/"
            rel="noreferrer"
            target="_blank"
          >
            Marius
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

const Logo = () => <img className="logo" src={logo1} alt="logo" />;

const Illustration = () => (
  <img className="image" src={image} alt="illustration" />
);

export default App;
