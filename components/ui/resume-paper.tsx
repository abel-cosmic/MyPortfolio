export const ResumePaper = ({ onClick }: { onClick: () => void }) => (
    <div
        onClick={(e) => {
            e.stopPropagation();
            onClick();
        }}
        className="cursor-target w-full h-full p-2 flex flex-col gap-1.5 cursor-pointer hover:bg-black/5 transition-colors group/paper rounded-[4px] bg-white shadow-sm"
    >
        {/* Header */}
        <div className="flex items-center gap-1.5 mb-1">
            <div className="w-3 h-3 rounded-full bg-gray-400 group-hover/paper:bg-[var(--primary)] transition-colors" />
            <div className="flex-1 flex flex-col gap-[2px]">
                <div className="h-[3px] w-full bg-gray-400 group-hover/paper:bg-[var(--primary)]/80 transition-colors rounded-full" />
                <div className="h-[3px] w-2/3 bg-gray-300 group-hover/paper:bg-[var(--primary)]/50 transition-colors rounded-full" />
            </div>
        </div>
        {/* Body lines */}
        <div className="h-[3px] w-full bg-gray-200 group-hover/paper:bg-[var(--primary)]/40 transition-colors rounded-full" />
        <div className="h-[3px] w-[90%] bg-gray-200 group-hover/paper:bg-[var(--primary)]/40 transition-colors rounded-full" />
        <div className="h-[3px] w-full bg-gray-200 group-hover/paper:bg-[var(--primary)]/40 transition-colors rounded-full" />
        <div className="h-[3px] w-[70%] bg-gray-200 group-hover/paper:bg-[var(--primary)]/40 transition-colors rounded-full mt-1" />
    </div>
);