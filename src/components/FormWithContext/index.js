import { createContext, useContext } from 'react';

const TextColorContext = createContext(null);

export default function FormWithContext() {
  return (
    <TextColorContext.Provider value="red">
      <Form />
    </TextColorContext.Provider>
  );
}

function Form() {
  return (
    <FormElements title="Heading">
      <Button>First Button</Button>
      <Button>Second Button</Button>
    </FormElements>
  );
}

function FormElements({ title, children }) {
  const textColor = useContext(TextColorContext);
  return (
    <div className="bg-white w-fit flex flex-col gap-4 items-start p-4 rounded border border-neutral-200">
      <div className="text-xs border-b w-full text-neutral-400 italic">
        <p>FormWithContext.js</p>
      </div>
      <h3 className={`text-${textColor}-700`}>{title}</h3>
      <div className="flex gap-4">{children}</div>
    </div>
  );
}

function Button({ children }) {
  const textColor = useContext(TextColorContext);
  return (
    <button
      className={`text-${textColor}-700 bg-neutral-200 border rounded border-neutral-400 px-4 py-1 text-xs`}
    >
      {children}
    </button>
  );
}
