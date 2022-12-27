import { useDebugValue, useState } from 'react';

export default function useExampleWithDebugValue() {
  const [text] = useState(
    'Open React Dev Tools to see the value returned from useDebugValue'
  );
  useDebugValue("I'm here thanks to useDebugValue!");

  console.log(text);
}
