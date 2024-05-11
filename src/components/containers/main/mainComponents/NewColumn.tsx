import Heading from "@ui/heading";

export default function NewColumn() {
  return (
    <div
      className="justify-cetner flex h-full w-[280px] items-center rounded"
      style={{
        background: "var(--linear-gradient)",
      }}
    >
      <Heading
        variant="xl"
        className="w-full text-center text-mediumGrey dark:text-mediumGrey"
      >
        + New Column
      </Heading>
    </div>
  );
}
