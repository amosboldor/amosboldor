import {Skill} from "../models";
import SkillDialog from "./SkillDialog";
import {useState} from "react";


export default function SkillCard({ skill }: { skill: Skill }): JSX.Element {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <li
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2 mx-auto p-3 bg-white rounded-xl shadow-lg"
        >
            <img width="30" height="30" src={skill.logo} alt="logo" />
            <div className="inline-flex flex-col">
                <h3 className="text-md font-medium text-black">{skill.name}</h3>
                <p className="mx-auto text-lime-100 bg-lime-500 rounded-md px-1 text-xs min-w-0">{skill.proficiency}</p>
            </div>
            <SkillDialog skill={skill} isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
    );
}