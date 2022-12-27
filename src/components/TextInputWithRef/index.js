import { useRef } from 'react';

export default function TextInputWithRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="border w-fit rounded-md p-2 flex flex-col gap-4 items-start bg-white">
      <div className="text-xs border-b w-full text-neutral-400 italic">
        <p>TextInputWithRef.js</p>
      </div>
      <div className="flex gap-2">
        <input ref={inputRef} className="border rounded border-neutral-300" />
        <button
          onClick={handleClick}
          className="bg-neutral-200 border rounded border-neutral-400 px-4 text-xs"
        >
          Focus the input
        </button>
      </div>
    </div>
  );
}
