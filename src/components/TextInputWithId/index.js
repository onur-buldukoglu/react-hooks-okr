import { useId } from 'react';

export default function TextInputWithId() {
  const textInputId = useId();

  return (
    <>
      <label className="flex gap-2">
        Text Input:
        <input
          type={'text'}
          aria-describedby={textInputId}
          className="border rounded border-neutral-300"
        />
      </label>
      <p className="text-xs" id={textInputId}>
        This text input component uses useId hook. Unique id given to each text
        input can be seen in Dev Tools
      </p>
    </>
  );
}
