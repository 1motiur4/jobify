import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="jobify" className="logo" />
        </nav>
        {/* info */}
        <div className="container page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim unde amet adipisci veniam expedita delectus distinctio similique eos, modi facere, aut non minus aperiam. Illo rem fugiat quo nihil.</p>
                <button className="btn btn-hero">Login/Register</button>
            </div>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
    </main>
  )
}
export default Landing