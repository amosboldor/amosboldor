import {NavLink} from "react-router-dom";
import {Popover} from "@headlessui/react";
import {XMarkIcon, Bars4Icon} from "@heroicons/react/24/outline";

interface NavLinkProps {
    to: string
    name: string
}
function PopNavLink(props: NavLinkProps) {
    return (
        <li>
            <NavLink to={props.to} className="block px-3 py-2 rounded-md text-sm font-medium">
                <Popover.Button as="span" className="block">{props.name}</Popover.Button>
            </NavLink>
        </li>
    );
}
function DNavLink(props: NavLinkProps) {
    return <li className="px-3"><NavLink to={props.to}>{props.name}</NavLink></li>;
}

export default function Nav() {
    return (
        <div className="flex flex-row justify-end">
            <nav className="hidden md:block">
                <ul className="flex items-center">
                    <DNavLink to="/about" name="About"></DNavLink>
                    <DNavLink to="/skills" name="Skills"></DNavLink>
                    <DNavLink to="/projects" name="Projects"></DNavLink>
                    <DNavLink to="/contact" name="Contact"></DNavLink>
                </ul>
            </nav>
            <Popover className="md:hidden">
                <Popover.Button>
                    <span className="sr-only">Navigation</span>
                    <Bars4Icon className="h-6 w-6" aria-hidden="true"></Bars4Icon>
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 backdrop-blur-sm bg-white/30" />
                <Popover.Panel className="fixed inset-x-6 top-4 bg-blue-500 rounded-lg">
                    <div className="flex flex-row items-center justify-between px-2 pt-2">
                        <p>Pick Your Poison</p>
                        <Popover.Button>
                            <span className="sr-only">Close navigation</span>
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <nav>
                        <ul className="flex flex-col space-y-1 py-1">
                            <PopNavLink to="/about" name="About"></PopNavLink>
                            <PopNavLink to="/skills" name="Skills"></PopNavLink>
                            <PopNavLink to="/projects" name="Projects"></PopNavLink>
                            <PopNavLink to="/contact" name="Contact"></PopNavLink>
                        </ul>
                    </nav>
                </Popover.Panel>
            </Popover>
        </div>
    );
}