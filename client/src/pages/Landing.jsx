import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        {/* info */}
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus enim unde amet adipisci veniam expedita delectus
              distinctio similique eos, modi facere, aut non minus aperiam. Illo
              rem fugiat quo nihil.
            </p>
            <Link to="/register" className="btn btn-hero">Login/Register</Link>
          </div>
          <img
            src={main}
            alt="job hunt"
            className="img main-img"
          />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
