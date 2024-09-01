export default function Button({
  children,
  type = "submit",
  style,
  onClick,
}: {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset";
  style: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        style === "primary"
          ? "bg-teal-500 hover:bg-teal-600 text-white"
          : "bg-gray-200 hover:bg-gray-300 text-black"
      } antialiased relative font-display font-semibold tracking-wider text-lg transition px-5 py-2.5 rounded-sm w-full`}
      type={type}
      onClick={onClick}
    >
      <span className="flex gap-2 justify-center whitespace-nowrap bg-transparent before:absolute before:box-border before:top-0 before:left-0 before:w-full before:h-full before:border-t-2 before:border-l-2 before:border-white before:border-r-2 before:border-r-gray-500 before:border-b-2 before:border-b-gray-500">
        {children}
      </span>
    </button>
  );
}
