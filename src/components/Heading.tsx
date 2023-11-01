export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`mb-7 text-6xl font-semibold text-primary max-md:text-5xl max-sm:text-4xl ${className}`}>
      {children}
    </div>
  );
};
