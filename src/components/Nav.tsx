import {NavLink} from "react-router-dom";
import {Popover} from "@headlessui/react";
import {XMarkIcon, Bars4Icon} from "@heroicons/react/24/outline";

interface NavLinkProps {
    to: string
    name: string
}
function PopNavLink(props: NavLinkProps) {
    return (
        <li className="bg-slate-700 px-3 rounded-lg">
            <NavLink to={props.to} className="block py-2">
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
        <nav className="p-7">
            <ul className="sm:flex justify-center md:justify-end hidden">
                <DNavLink to="/about" name="About"></DNavLink>
                <DNavLink to="/skills" name="Skills"></DNavLink>
                <DNavLink to="/projects" name="Projects"></DNavLink>
                <DNavLink to="/contact" name="Contact"></DNavLink>
            </ul>
            <Popover className="flex flex-row-reverse sm:hidden text-white">
                <Popover.Button className="relative z-10 bg-blue-600 p-1 rounded-lg">
                    {(props)=> (props.open ? (<>
                        <span className="sr-only">Close navigation</span>
                        <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    </>) : (<>
                        <span className="sr-only">Navigation</span>
                        <Bars4Icon className="block h-8 w-8" aria-hidden="true" />
                    </>))}
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 backdrop-blur-sm bg-white/30" />
                <Popover.Panel className="fixed inset-x-6 top-20 bg-slate-900 rounded-lg p-2 sm:hidden">
                    <ul className="flex flex-col space-y-2">
                        <PopNavLink to="/about" name="About"></PopNavLink>
                        <PopNavLink to="/skills" name="Skills"></PopNavLink>
                        <PopNavLink to="/projects" name="Projects"></PopNavLink>
                        <PopNavLink to="/contact" name="Contact"></PopNavLink>
                    </ul>
                </Popover.Panel>
            </Popover>
        </nav>
    );
}