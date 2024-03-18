export const SkillsBadge = ({ skills }: { skills: string }) => {
  return (
    <div
      className={`w-full h-6 text-xs flex flex-row gap-2 items-center justify-center rounded-full  border-primary border `}
    >
      {skills}
    </div>
  );
};
