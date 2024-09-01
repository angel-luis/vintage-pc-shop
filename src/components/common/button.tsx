export default function Button({
  title,
  type = "submit",
  style,
  onClick,
}: {
  title: string;
  type?: "submit" | "button" | "reset";
  style: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      className={`${
        style === "primary"
          ? "bg-teal-500 hover:bg-teal-600"
          : "bg-gray-500 hover:bg-gray-600"
      } relative font-display tracking-normal text-white transition px-5 py-2.5 rounded-sm w-full `}
      type={type}
      onClick={onClick}
    >
      <span className="bg-transparent before:absolute before:box-border before:top-0 before:left-0 before:w-full before:h-full before:border-t-2 before:border-l-2 before:border-white before:border-r-2 before:border-r-gray-500 before:border-b-2 before:border-b-gray-500">
        {title}
      </span>
    </button>
  );
}
