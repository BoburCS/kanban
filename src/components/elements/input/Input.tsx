import Text from "@ui/text";

interface InputProps {
  name: string;
  type: "text";
  placeholder: string;
  disabled?: boolean;
  defaultValue?: string;
}

export default function Input({
  name,
  type,
  placeholder,
  disabled,
  defaultValue,
}: InputProps) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      {disabled ? (
        <label htmlFor={name}>
          <Text
            variant="medium"
            className="font-bold text-mediumGrey dark:text-mediumGrey"
          >
            {name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase()}
          </Text>
        </label>
      ) : null}

      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded border-[1px] border-solid border-lines px-4 py-2 font-medium text-black dark:text-white"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
