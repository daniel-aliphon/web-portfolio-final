export const SmallText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-lg font-secondary ${className}`}>{children}</div>
  );
};
