export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-[1.875rem] text-dark-text max-md:text-2xl max-md:leading-9 max-sm:text-xl">
      {children}
    </p>
  );
};
