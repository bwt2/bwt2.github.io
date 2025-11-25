import { skills } from './SkillsData';
import SkillCategory from '~/universe/molecules/SkillsTable/SkillCategory';
import SkillCategoryContents from '~/universe/molecules/SkillsTable/SkillCategoryContents';

export default function Skills() {
  return (
    <>
      <h1 className="text-white font-bold text-5xl mb-10">Skills</h1>
      <p className="text-white mb-10">i.e. the laundry list</p>
      <main>
        <ul className="flex flex-col text-white p-1">
          {skills.map((data) => (
            <SkillCategory key={data.category} category={data.category}>
              <SkillCategoryContents skills={data.skills} />
            </SkillCategory>
          ))}
        </ul>
      </main>
    </>
  );
}
