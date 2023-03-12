import "./App.css";
import Profile from "./profile/Profile";
import image from "./assets/profile.png";

function App() {
  return (
    <div>
      <Profile
        fullName="Soufiane KORCHI"
        biographie="Mr Soufiane Korchi est un biologiste d'origine . Il se spécialise dans la microbiologie et management qualité. dans l'année 2021 il a choisi de reconvoquer le domaine de travail. il devient un developpeur fullstack il a creer plusieur application et site web interessant, interactive et dynamique qui..."
        profession="il a travailler dans un centre d'appel dans leur debut apres il a antrer dans le monde d'usine pour pratiqué le domaine qualité et pour l'instant il est un freelancer en developpement web..."
      >
        <img
          src={image}
          alt="soufiane"
          style={{
            clipPath: "circle(50%)",
            width: "10rem"
          }}
        />{" "}
      </Profile>
    </div>
  );
}

export default App;
