export const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="box-border flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
      {children}
    </a>
  );
};
