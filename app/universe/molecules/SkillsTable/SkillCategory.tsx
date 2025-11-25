export default function SkillCategory({
  category,
  children,
}: {
  category: string;
  children: React.ReactNode | null;
}) {
  return (
    <li className="flex flex-col gap-2 pt-3 pb-3 border-b border-white first:pt-0 last:border-none md:flex-row md:items-start">
      <h2 className="font-bold text-xl md:text-2xl md:w-52 md:shrink-0 mr-5">
        {category}
      </h2>

      <ul className="grid grid-cols-1 gap-y-1 gap-x-1 sm:grid-cols-[repeat(2,minmax(12rem,1fr))]">
        {children}
      </ul>
    </li>
  );
}
