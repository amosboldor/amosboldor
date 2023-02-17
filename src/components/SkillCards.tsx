import skills from "../skills";
import SkillCard from "../components/SkillCard";

export default function SkillCards() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill)=><SkillCard key={skill.name} skill={skill} />)}
        </ul>
    );
}