export default function Input({
  name,
  label,
  type,
  onChange,
  value,
  minLength,
  required = false,
  disabled,
}: {
  name: string;
  label?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  minLength?: number;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <>
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="{name}"
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-50 border border-black text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 disabled:bg-gray-200"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        minLength={minLength}
        required={required}
        disabled={disabled}
      />
    </>
  );
}
