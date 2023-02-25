import skills from "../skills";
import SkillCard from "../components/SkillCard";

export default function SkillCards() {
    return (
        <ul role="list" className="flex flex-wrap items-start gap-2">
            {skills.map((skill)=><SkillCard key={skill.name} skill={skill} />)}
        </ul>
    );
}
