export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="box-border flex gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
      {children}
    </button>
  );
};
