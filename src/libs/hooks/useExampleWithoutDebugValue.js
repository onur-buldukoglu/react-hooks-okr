import { useState } from 'react';

export default function useExampleWithoutDebugValue() {
  const [text] = useState('This hook does not use useDebugValue');

  console.log(text);
}
