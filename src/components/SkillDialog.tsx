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
            <div className="fixed inset-0 flex items-start lg:items-center justify-center p-4 max-w-full">
                <Dialog.Panel className="bg-white shadow overflow-hidden rounded-lg">
                    <div className="flex justify-end p-2">
                        <button onClick={() => setIsOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon width="25" height="25" />
                        </button>
                    </div>
                    <div className="px-3 pb-3">
                        <div className="flex gap-2">
                            <img className="block" width="25" height="25" src={skill.logo} alt="logo" />
                            <Dialog.Title className="text-lg font-medium text-gray-900 pb-2">{skill.name}</Dialog.Title>
                        </div>
                        <Dialog.Description>{skill.description}</Dialog.Description>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}