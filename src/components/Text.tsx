export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`text-[1.875rem] font-secondary  text-dark-text max-md:text-2xl max-md:leading-9 max-sm:text-xl ${className}`}>
      {children}
    </p>
  );
};
