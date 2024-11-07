export default function Input({
  name,
  type,
  value,
  readOnly,
  label,
  onChange,
  minLength,
  required,
  disabled,
  placeholder,
}: {
  name: string;
  type: string;
  value: string | number;
  readOnly?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
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
        className="bg-gray-50 border border-black text-gray-900 text-sm block w-full p-2.5 disabled:bg-gray-200 focus:border-black focus:ring-2 focus:ring-black"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        minLength={minLength}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </>
  );
}
