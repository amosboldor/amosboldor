import skills from "../skills";
import SkillCard from "../components/SkillCard";

export default function capabilities() {
    return <div className='grid place-content-center'>
        <ul>
            {skills.map((skill)=><SkillCard key={skill.name} skill={skill} />)}
        </ul>
    </div>
}