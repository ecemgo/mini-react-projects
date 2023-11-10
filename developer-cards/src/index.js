import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const developers = [
  {
    name: "Maggie Thomson",
    description:
      "Frontend developer. When not coding, I like painting watercolor and taking care of my cat.",
    photoName: "images/maggie-thomson.jpg",
    skills: [
      {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#ef4444",
      },
      {
        skill: "JavaScript",
        level: "intermediate",
        color: "#eab308",
      },
      {
        skill: "Web Design",
        level: "advanced",
        color: "#3b82f6",
      },
      {
        skill: "Git and GitHub",
        level: "advanced",
        color: "#16a34a",
      },
      {
        skill: "Bootstrap",
        level: "intermediate",
        color: "#8b5cf6",
      },
      {
        skill: "React",
        level: "beginner",
        color: "#61dbfb",
      },
      {
        skill: "Tailwind CSS",
        level: "beginner",
        color: "#14b8a6",
      },
    ],
  },
  {
    name: "Jonathan Dixon",
    description:
      "Senior frontend developer. I like playing PlayStation and also traveling.",
    photoName: "images/jonathan-dixon.jpg",
    skills: [
      {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#ef4444",
      },
      {
        skill: "JavaScript",
        level: "advanced",
        color: "#eab308",
      },
      {
        skill: "Web Design",
        level: "advanced",
        color: "#3b82f6",
      },
      {
        skill: "Git and GitHub",
        level: "advanced",
        color: "#16a34a",
      },
      {
        skill: "Bootstrap",
        level: "advanced",
        color: "#8b5cf6",
      },
      {
        skill: "Vue",
        level: "advanced",
        color: "#14b8a6",
      },
      {
        skill: "NextJS",
        level: "intermediate",
        color: "#2563eb",
      },
    ],
  },
];

function App() {
  return (
    <div className="container">
      {developers.map((developer) => (
        <Card key={developer.name} developerObj={developer} />
      ))}
    </div>
  );
}

function Card({ developerObj }) {
  const skills = developerObj.skills;

  return (
    <div className="card">
      <img
        className="avatar"
        src={developerObj.photoName}
        alt={developerObj.name}
      />
      <div>
        <h1>{developerObj.name}</h1>
        <p>{developerObj.description}</p>
        <ul className="skill-list">
          {skills.map((skill) => (
            <Skill key={skill.skill} skillObj={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "advanced" && "💪"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "beginner" && "👶"}
      </span>
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
