import {Dialog} from "@headlessui/react";
import type React from "react";
import {Skill} from "../models";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SkillDialog(
        { skill, isOpen, setIsOpen }: { skill: Skill } & { isOpen: boolean, setIsOpen:  React.Dispatch<React.SetStateAction<boolean>> }
    ) {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 max-w-full">
                <Dialog.Panel className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="flex justify-between items-center p-1">
                        <img className="block" width="25" height="25" src={skill.logo} alt="logo" />
                        <button onClick={() => setIsOpen(false)}>
                            <XMarkIcon width="25" height="25" />
                        </button>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <Dialog.Title className="text-lg leading-6 font-medium text-gray-900">{skill.name}</Dialog.Title>
                        <Dialog.Description>{skill.description}</Dialog.Description>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}