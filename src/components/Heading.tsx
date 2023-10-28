export const Heading = ({ children }: { children: string }) => {
  return (
    <div className="text-6xl font-semibold text-primary max-md:text-5xl max-sm:text-4xl">
      {children}
    </div>
  );
};
