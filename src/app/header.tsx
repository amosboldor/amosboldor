import { IconBrandGithub, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';

export default function Header() {
    return (
        <header>
            <div>
                <h1 className="text-4xl font-bold text-cyan-500">Amos Boldor</h1>
                <h2 className="text-xl font-bold text-cyan-600 pt-3">Software Developer</h2>
                <p className="text-lg font-semibold text-cyan-700 pt-3 max-w-sm">Turning coffee ☕ into pixel-perfect paradises 🌴✨ and ensuring no sneaky bugs 🐛🚫 tag along the way.</p>
            </div>
            <ul className="flex items-center space-x-3 pt-3 text-cyan-500">
                <li>
                    <a href="https://github.com/amosboldor">
                        <IconBrandGithub className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/amosboldor">
                        <IconBrandX className="h-10 w-10" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/amosboldor">
                        <IconBrandLinkedin className="h-10 w-10" />
                    </a>
                </li>
            </ul>
        </header>
    )
}
