import Text from "@ui/text";

interface TextareaProps {
    name: string;
    placeholder: string;
}

export default function Textarea({ name, placeholder }: TextareaProps) {
    return (
        <div className="flex w-full flex-col items-start gap-2">
            <label htmlFor={name}>
                <Text
                    variant="medium"
                    className="font-bold text-mediumGrey dark:text-mediumGrey"
                >
                    {name.charAt(0).toUpperCase() +
                        name.slice(1).toLocaleLowerCase()}
                </Text>
            </label>

            <textarea
                name={name}
                id={name}
                required
                className="w-full resize-none rounded border-[1px] border-solid border-lines px-4 py-2 font-medium"
                placeholder={placeholder}
            ></textarea>
        </div>
    );
}
