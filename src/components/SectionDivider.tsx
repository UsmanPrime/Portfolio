interface SectionDividerProps {
  label: string;
}

const SectionDivider = ({ label }: SectionDividerProps) => (
  <div className="section-divider container mx-auto px-4">
    <span className="text-[10px] font-mono text-muted-foreground whitespace-nowrap select-none">
      <span className="text-primary/50 mr-1.5">❯</span>
      cd /sections/{label}
    </span>
  </div>
);

export default SectionDivider;
