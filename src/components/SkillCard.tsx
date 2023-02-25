import {Skill} from "../models";
import SkillDialog from "./SkillDialog";
import {useState} from "react";

const proficiencyColors = {
    'Novice': 'text-zink-800 bg-orange-500',
    'Intermediate': 'text-zink-600 bg-yellow-300',
    'Advanced': 'text-zink-700 bg-lime-500',
    'Expert': 'text-neutral-500 bg-cyan-400'
}


export default function SkillCard({ skill }: { skill: Skill }): JSX.Element {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <li
            tabIndex={0}
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2 mx-auto m-2 p-2 bg-white rounded-xl shadow-lg cursor-pointer"
        >
            <img width="30" src={skill.logo} alt="logo" />
            <div className="inline-flex flex-col">
                <h3 className="text-md font-medium text-black text-center">{skill.name}</h3>
                <p className={
                    'mx-auto rounded-md px-1 text-xs min-w-0 ' + proficiencyColors[skill.proficiency]
                }>{skill.proficiency}</p>
            </div>
            <SkillDialog skill={skill} isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
    );
}