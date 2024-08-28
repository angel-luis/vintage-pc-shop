export default function Input({
  name,
  label,
  type,
  onChange,
  value,
  minLength,
  required,
}: {
  name: string;
  label: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  minLength?: number;
  required: boolean;
}) {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor="{name}"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        minLength={minLength}
        required={required}
      />
    </>
  );
}
