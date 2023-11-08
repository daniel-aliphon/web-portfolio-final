export const Underline = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="underline decoration-1 underline-offset-4">
      {children}
    </span>
  );
};
