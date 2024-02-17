import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Input } from "./components/forms/input.jsx";
import { Checkbox } from "./components/forms/checkbox.jsx";
import { ProductCategoryRow } from "./components/products/produitCategoryRow.jsx";
import { ProductRow } from "./components/products/productRow.jsx";
import { useIncrement } from "./components/hooks/useIncrement.js";
import { createBrowserRouter } from "react-router-dom";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const title = "Bonjor les genres, ça roule bien ?";
const id_title = "mt-1";
const btn = "btn btn-primary";
const style = { color: "white", backgroundColor: "black" };
const showTitle = true;
const showTitle2 = true;
const todos = ["Naruto", "One peace", "Jujutsu kaisen", "Demon slayer"];

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "DragonFruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "PassionFruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Punpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Pass" },
];

function App() {
  const [showStockOnly, setShowStockOnly] = useState(false);
  const [search, setsearch] = useState("");

  const visibleProduct = PRODUCTS.filter((product) => {
    if (showStockOnly && !product.stocked) {
      return false;
    }

    if (search && !product.name.includes(search)) {
      return false;
    }
    return true;
  });

  const handleClick = () => {
    alert("j'ai cliquer sur le titre");
  };

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const [count2, setCount2] = useState(0);

  const increment2 = () => {
    setCount2((count2) => count2 + 1);
  };

  const [person, setPerson] = useState({
    firstName: "John",
    LastName: "Doe",
    age: 18,
  });

  const gagne = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const [checker, setchecker] = useState(true);
  const controlcheck = () => {
    setchecker(!checker);
  };

  return (
    <div className="container">
      <SearchBar
        search={search}
        onSearchChange={setsearch}
        showStockOnly={showStockOnly}
        onStockOnlyChange={setShowStockOnly}
      />
      <ProductTable products={visibleProduct} />
      <h1 onClick={handleClick} id="title" className={id_title} style={style}>
        {title}
      </h1>
      <p>Compteur: {count}</p>
      <button onClick={increment} className={btn}>
        Increment
      </button>
      <p>Compteur2: {count2}</p>
      <button onClick={increment2} className={btn}>
        Increment
      </button>
      <p>
        Age de {person.firstName} : {person.age}
      </p>
      <button onClick={gagne} className={btn}>
        gagné une anneé
      </button>
      <Title color="green"></Title>
      <Title3></Title3>
      <input type="text" placeholder="tape dedans" />
      <p style={{ color: "red", backgroundColor: "yellow" }}>
        Amir Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
        dolorum officiis a expedita eveniet laboriosam, est dfhu hf eghr
        fehgfryehjgfr je suis pas comme toi desolé
        <span
          onClick={() => alert("tu viens de me cliquer")}
          style={{ color: "white", backgroundColor: "black" }}
        >
          click me
        </span>
        blanditiis qui, yguk gkhgh impedit architecto natus non facilis, vel
        quas cum ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quis, quaerat libero incidunt saepe rerum porro, non ad deleniti
        consectetur, asperiores dolor obcaecati exercitationem dicta repudiandae
        velit minus similique aperiam rem?
      </p>
      <MonComposant backgroundColor="green">
        Je suis le petit frere, le children{" "}
      </MonComposant>
      <PlusieurOperateur color="green">
        Je suis le transporteur de propriete, j'ai des proprietés dans la
        fonction qui me declare et il s'affiche içi dans la balise personnalisé{" "}
      </PlusieurOperateur>
      <PlusieurOperateur2 color="pink" id="monid2" className="operateur2">
        Je suis le transporteur de propriete sans definition de variable dans la
        fonction, donc je peut declarer dans ma balise personnalisé içi des
        proprietés qui serons ajouter a mon chilren et a la balise au complet{" "}
      </PlusieurOperateur2>

      <input
        type="checkbox"
        id="box"
        checked={checker}
        onChange={controlcheck}
      />
      <label htmlFor="box">Afficher le formulaire</label>
      {checker ? <EditTitle></EditTitle> : undefined}

      <h1>les affichages conditionnelles</h1>
      {showTitle && <p>je m'affiche si showTitle est egale à true</p>}
      {showTitle2 ? <p> showTitle2 = true</p> : <span>showTitle2 = false</span>}
      <ul>
        {todos.map((todo) => (
          <li key={todo}> {todo} </li>
        ))}
      </ul>
      <Formulaire></Formulaire>

      <Timer></Timer>

      <Lememo></Lememo>

      <Laref></Laref>

      <Hookperso></Hookperso>

      <Hookperso2></Hookperso2>
    </div>
  );
}

function SearchBar({
  showStockOnly,
  onStockOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <div>
      <div className="my-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Rechercher..."
        />
        <Checkbox
          id="stocked"
          checked={showStockOnly}
          onChange={onStockOnlyChange}
          label="N afficher que les produits en stock"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function Title({ color }) {
  return <h2 style={{ color: color }}>2 Je sui le deuxieme titre svp</h2>;
}

function Title3() {
  return <h2>3 Je sui le troisème titre svp</h2>;
}

function MonComposant({ backgroundColor, children }) {
  return <h2 style={{ backgroundColor: backgroundColor }}> {children}</h2>;
}

function PlusieurOperateur({ color, children }) {
  const props = {
    id: "monid",
    className: "operateur",
  };
  return (
    <h2 style={{ color: color }} {...props}>
      {" "}
      {children}
    </h2>
  );
}

function PlusieurOperateur2({ color, children, ...props }) {
  return (
    <h2 style={{ color: color }} {...props}>
      {" "}
      {children}
    </h2>
  );
}

function Formulaire() {
  const [value, setValue] = useState("");

  const handlechange = (e) => {
    setValue(e.target.value);
  };

  const [checked, setchecked] = useState(false);

  const toogleCheck = () => {
    setchecked(!checked);
  };

  return (
    <>
      <form action="">
        {" "}
        <input
          type="text"
          name="firstname"
          value={value}
          onChange={handlechange}
        />
        <input type="checkbox" checked={checked} onChange={toogleCheck} />
        <button disabled={!checked}>Envoyé</button>
      </form>
    </>
  );
}

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");

  useEffect(() => {
    const originalTitle = document.title;
    return () => {
      document.Title = originalTitle;
    };
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="vstack gap-2 my-4">
      <input
        placeholder="Modifier le titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Prénom"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
    </div>
  );
}
function Timer() {
  const [duration, setDuration] = useState(5);
  const [SecondsLeft, setSecondsLeft] = useState(duration);

  const handlechange = (e) => {
    setDuration(e.target.value);
    setSecondsLeft(e.target.value);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((y) => {
        if (y <= 1) {
          clearInterval(timer);
          return 0;
        }
        return y - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div className="vstack gap-2 my-4">
      <input
        placeholder="Modifier le timer"
        value={duration}
        onChange={handlechange}
      />
      <p>Decompte: {SecondsLeft}</p>
    </div>
  );
}

function passwordSecurity(password) {
  if (password.length < 3) {
    return "faible";
  } else if (password.length < 6) {
    return "moyen";
  }
  return "fort";
}

function Lememo() {
  const [firstName, setFirstname] = useState("john");
  const [password, setPassword] = useState("MotDePasse");
  const security = passwordSecurity(password);

  const handlechange1 = (e) => {
    setFirstname(e.target.value);
  };
  const handlechange2 = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container my-3 vstack gap-2">
      <h2>USE MEMO</h2>
      <input
        type="text"
        label="Nom d'utilisateur"
        value={firstName}
        onChange={handlechange1}
      />
      <input
        type="text"
        label="Password"
        value={password}
        onChange={handlechange2}
      />
      securité : {security}
    </div>
  );
}

function Laref() {
  let ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  };

  return (
    <div>
      <h2>USE REF</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem
      earum nesciunt unde, cumque alias at eveniet velit magni recusandae ipsum
      ullam expedita consequuntur doloremque voluptatum ipsam reiciendis
      cupiditate quae.
      <button className="btn btn-danger" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
}

function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState((y) => !y);
  return [state, toggle];
}

function Hookperso() {
  const [checked, toogleCheck] = useToggle();
  return (
    <div className="mt-3">
      <h2>HOOK PERSONALISE</h2>
      <p>Click moi le checkbox en dessous</p>
      <div>
        <input type="checkbox" checked={checked} onChange={toogleCheck} />
        {checked && "je suis coché"}
      </div>
    </div>
  );
}
function Hookperso2() {
  const { count, increment, decrement } = useIncrement({
    base: 0,
    max: 10,
    min: 0,
  });

  return (
    <div className="mt-3">
      <h2>HOOK PERSONALISE 2</h2>
      <p>
        ce hook personnalisé se trouve dans un dossier hooks et importé içi, ce
        hook ne renvoie pas un tableaux de taille 2 mais un objet avec plusieur
        propriété au cas ou on aura besoin de beaucoup de valeur a retourner
      </p>
      <p>
        compteur: {count}
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-primary" onClick={decrement}>
          Décrement
        </button>
      </p>
    </div>
  );
}

export default App;
