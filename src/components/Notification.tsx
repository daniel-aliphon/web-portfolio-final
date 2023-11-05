import { Bell, X } from "lucide-react";

export const Notification = ({
  children,
  visibility,
  handleVisibility,
}: {
  children: React.ReactNode;
  visibility: boolean;
  handleVisibility: Function;
}) => {
  return (
    <div
      className={`group/notif fixed box max-md:top-[10%] top-[50%] flex max-w-[300px] items-center rounded-e-full  bg-dark-foreground p-4 text-dark-text transition-transform ${
        visibility ? " translate-x-0" : " -translate-x-80"
      }`}>
      <div className="space-y-1">{children}</div>
      <Bell
        size={50}
        className="text-green-500 group-hover/notif:hidden"
      />
      <X
        onClick={() => handleVisibility(!visibility)}
        size={50}
        className="hidden cursor-pointer text-primary hover:text-red-500 group-hover/notif:block"
      />
    </div>
  );
};
