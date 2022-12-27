import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeSnippet({ children }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={a11yDark}
      customStyle={{
        overflowX: 'none',
        fontSize: '14px',
        borderRadius: '4px',
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;
