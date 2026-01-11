interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true, light = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className={`h-px w-12 ${light ? "bg-gold-light" : "bg-gold"}`}></span>
        <span className={`text-2xl ${light ? "text-gold-light" : "text-gold"}`}>✦</span>
        <span className={`h-px w-12 ${light ? "bg-gold-light" : "bg-gold"}`}></span>
      </div>
    </div>
  );
};

export default SectionHeader;
