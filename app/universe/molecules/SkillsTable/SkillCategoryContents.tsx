export default function SkillCategoryContents({
  skills,
}: {
  skills: string[];
}) {
  return (
    <>
      {skills.sort().map((skill, index) => (
        <li key={index + skill}>{skill}</li>
      ))}
    </>
  );
}
