import {NavLink, Outlet} from "react-router-dom";
import { Popover } from '@headlessui/react'
import {XMarkIcon} from "@heroicons/react/24/outline";

interface NavLinkProps {
    to: string
    name: string
}

function PopNavLink(props: NavLinkProps) {
    return <li><NavLink to={props.to}><Popover.Button>{props.name}</Popover.Button></NavLink></li>;
}
function DNavLink(props: NavLinkProps) {
    return <li className="px-3"><NavLink to={props.to}>{props.name}</NavLink></li>;
}
export default function root() {
    return (
        <>
            <div className="flex flex-row justify-end">
                <nav className="hidden md:block">
                    <ul className="flex flex-row items-center justify-center">
                        <DNavLink to="/about" name="About"></DNavLink>
                        <DNavLink to="/skills" name="Skills"></DNavLink>
                        <DNavLink to="/projects" name="Projects"></DNavLink>
                        <DNavLink to="/contact" name="Contact"></DNavLink>
                    </ul>
                </nav>
                <Popover className="md:hidden">
                    <Popover.Button>Menu</Popover.Button>
                    <Popover.Overlay className="fixed inset-0 backdrop-blur-sm bg-white/30" />
                    <Popover.Panel className="absolute inset-x-6 top-4 bg-blue-300 rounded-lg ">
                        <div className="flex flex-row items-center justify-between px-2 pt-2">
                            <p>Pick Your Poison</p>
                            <Popover.Button>
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <nav>
                            <ul className="flex flex-col space-y-1 px-2 pt-2 pb-3">
                                <PopNavLink to="/about" name="About"></PopNavLink>
                                <PopNavLink to="/skills" name="Skills"></PopNavLink>
                                <PopNavLink to="/projects" name="Projects"></PopNavLink>
                                <PopNavLink to="/contact" name="Contact"></PopNavLink>
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Popover>
            </div>
            <Outlet />
        </>
    );
}