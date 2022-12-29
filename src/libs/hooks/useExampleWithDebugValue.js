import { useDebugValue, useState } from 'react';

export default function useExampleWithDebugValue() {
  const [text] = useState('This hook uses useDebugValue');
  useDebugValue("I'm here thanks to useDebugValue!", (value) => {
    return value + ' Also formatted by it.';
  });

  console.log(text);
}
