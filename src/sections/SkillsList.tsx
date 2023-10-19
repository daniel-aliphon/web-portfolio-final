import "./SkillsList.css";
//
export const SkillsList = () => {
  const skills = [
    { name: "html", description: "HTML5" },
    { name: "css3", description: "CSS3" },
    { name: "javascript", description: "JAVASCRIPT" },
    { name: "typescript", description: "TYPESCRIPT" },
    { name: "react", description: "REACT" },
    { name: "vitejs", description: "VITE" },
    { name: "github", description: "GITHUB" },
    { name: "tailwind", description: "TAILWIND-CSS" },
    { name: "bootstrap", description: "BOOTSTRAP" },
    { name: "git", description: "GIT-VERSION CONTROL" },
    { name: "mongodb", description: "MONGODB" },
    { name: "node", description: "NODE" },
    { name: "jquery", description: "JQUERY" },
    { name: "npm", description: "NPM" },
  ];

  return (
    <>
      <div className="skills-container">
        <h1>MY TECHNOLOGIES</h1>
        <div className="list">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item`}
              placeholder={skill.description}>
              <img
                className={"skill-icon"}
                src={`${skill.name}.svg`} // Assuming the SVG files are named after the skills without the count
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
