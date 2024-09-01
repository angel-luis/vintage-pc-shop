export default function Button({
  children,
  type = "submit",
  style,
  widthFull = false,
  onClick,
}: {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  style: "primary" | "secondary" | "tertiary";
  widthFull?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        style === "primary"
          ? "bg-teal-500 hover:bg-teal-600 text-white"
          : style === "secondary"
          ? "bg-gray-200 hover:bg-gray-300 text-black"
          : "bg-navy-500 hover:bg-navy-600 text-white"
      } ${
        widthFull && "w-full"
      } antialiased relative font-display font-semibold tracking-wider text-lg transition px-4 py-1.5 rounded-sm`}
      type={type}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center justify-center whitespace-nowrap w95-border">
        {children}
      </span>
    </button>
  );
}
