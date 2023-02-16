import {Skill} from "../models";


export default function SkillCard({ skill }: { skill: Skill }): JSX.Element {
    return (
          <li>
              <h3>{skill.name}</h3>
              <div>
                  <img src={skill.logo} alt="logo" />
              </div>
              <p>{skill.proficiency}</p>
              <p>{skill.description}</p>
          </li>
    );
}