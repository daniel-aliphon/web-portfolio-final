export const Button = ({
  children,
  href,
  blank,
}: {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
}) => {
  return (
    <a
      target={blank ? "_blank" : undefined}
      href={href}
      className="box-border flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-primary px-3 py-2 duration-300 hover:bg-primary hover:text-dark-text">
      {children}
    </a>
  );
};
