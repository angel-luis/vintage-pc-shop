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
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-500 hover:bg-gray-600"
      } text-white transition px-5 py-2.5 rounded-md w-full`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
