interface ModelSelectProps {
    model: string;
    onChange: (model: string) => void;
  }
  
  const ModelSelect: React.FC<ModelSelectProps> = ({ model, onChange }) => {
    return (
      <select
        className="w-full p-2 text-white border rounded-md mb-4 bg-gray-800"
        value={model}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4o">GPT-4o</option>
        <option value="BEMGPT-1.0">BEMGPT-1.0</option>
         
        {/* Add more models as needed */}
      </select>
    );
  };
  
  export default ModelSelect;