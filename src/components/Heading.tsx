export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-7 text-6xl font-semibold text-primary max-md:text-5xl max-sm:text-4xl">
      {children}
    </div>
  );
};
