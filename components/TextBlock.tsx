interface TextBlockProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  }
  
  const TextBlock: React.FC<TextBlockProps> = ({ value, onChange, placeholder }) => {
    return (
      <textarea
        className="w-full p-2 border rounded-md mb-4 bg-gray-800"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={10}
      />
    );
  };
  
  export default TextBlock;