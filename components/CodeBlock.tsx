interface CodeBlockProps {
  content: string;
  placeholder: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content , placeholder}) => {
  return (
    <div className="code-block p-4 bg-gray-800 text-gray-500 rounded-md mb-4 overflow-auto max-h-96 w-full">
      <pre className="whitespace-pre-wrap">
        <code>{content + placeholder}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;