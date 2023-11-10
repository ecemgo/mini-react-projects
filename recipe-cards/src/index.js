import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const saladData = [
  {
    photo: "images/salad.jpg",
    title: "The Salad One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus idnunc quis aliquet. Pellentesque molestie, eros a cursus scelerisque, ligula ex porttitor orci, et eleifend augue arcu et urna.",
  },
  {
    photo: "images/fruit-salad.jpg",
    title: "The Salad Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus idnunc quis aliquet. Pellentesque molestie, eros a cursus scelerisque, ligula ex porttitor orci, et eleifend augue arcu et urna.",
  },
  {
    photo: "images/vegatable-salad.jpg",
    title: "The Salad Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus idnunc quis aliquet. Pellentesque molestie, eros a cursus scelerisque, ligula ex porttitor orci, et eleifend augue arcu et urna.",
  },
];

function App() {
  return (
    <>
      <Recipes />
    </>
  );
}

function Recipes() {
  const salads = saladData;

  return (
    <ul className="container">
      {salads.map((salad) => (
        <Card key={salad.title} saladObj={salad} />
      ))}
    </ul>
  );
}

function Card({ saladObj }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={saladObj.photo} alt={saladObj.title} />
        <h2 className="card-title">{saladObj.title}</h2>
        <p className="card-description">{saladObj.description}</p>
      </div>
      <button className="card-btn">View Recipe</button>
    </div>
  );
}

export default App;

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
