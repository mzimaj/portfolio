import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaServer,
} from "react-icons/fa";

const technologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
  },
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    name: "REST APIs",
    icon: FaServer,
  },
];

function TechStack() {
  return (
    <div className="tech-stack">
      <p className="tech-stack-title">Working with</p>

      <ul className="tech-stack-list">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <li className="tech-badge" key={technology.name}>
              <Icon aria-hidden="true" />
              <span>{technology.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TechStack;