interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    <div className={`flex justify-center items-center gap-2 text-foreground list-none ${className}`}>
      <span className="w-3 h-3 rounded-full bg-orange inline-block"></span>
      <span className="text-xl font-medium">{text}</span>
    </div>
  );
};

export default Badge;
