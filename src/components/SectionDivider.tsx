interface SectionDividerProps {
  label: string;
}

const SectionDivider = ({ label }: SectionDividerProps) => (
  <div className="section-divider layout-container">
    <a href={`#${label}`} aria-label={`Go to ${label}`} className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">
      <span className="text-muted-foreground mr-1.5">❯</span>
      cd /sections/{label}
    </a>
  </div>
);

export default SectionDivider;
