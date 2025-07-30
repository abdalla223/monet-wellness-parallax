interface TrustBadgeProps {
  text: string;
  className?: string;
}

export const TrustBadge = ({ text, className = "" }: TrustBadgeProps) => {
  return (
    <div className={`trust-badge float-animation ${className}`}>
      <span className="font-lato font-semibold text-sm text-foreground">
        {text}
      </span>
    </div>
  );
};