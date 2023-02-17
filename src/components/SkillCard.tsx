import {Skill} from "../models";
import {Disclosure} from "@headlessui/react";


export default function SkillCard({ skill }: { skill: Skill }): JSX.Element {
    return (
        <Disclosure as="li">
          <Disclosure.Button className="flex items-center space-x-4 mx-auto p-6 bg-white rounded-xl shadow-lg">
              <img width="30" height="30" src={skill.logo} alt="logo" />
              <div>
                  <div className="text-xl font-medium text-black">{skill.name}</div>
                  <p className="text-lime-100 bg-lime-500 rounded-lg px-1 text-sm">{skill.proficiency}</p>
              </div>
          </Disclosure.Button>
          <Disclosure.Panel>
              {skill.description}
          </Disclosure.Panel>
        </Disclosure>
    );
}