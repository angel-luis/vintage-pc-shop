export default function Button({
  children,
  type = "submit",
  style,
  onClick,
}: {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  style: "primary" | "secondary" | "tertiary";
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
      } antialiased relative font-display font-semibold tracking-wider text-lg transition px-4 py-1.5 rounded-sm w-full`}
      type={type}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center justify-center whitespace-nowrap bg-transparent before:absolute before:box-border before:top-0 before:left-0 before:w-full before:h-full before:border-t-2 before:border-l-2 before:border-white before:border-r-2 before:border-r-gray-500 before:border-b-2 before:border-b-gray-500">
        {children}
      </span>
    </button>
  );
}
