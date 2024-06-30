interface LanguageSelectProps {
    direction: 'toIDF' | 'toNaturalLanguage';
    onChange: (direction: 'toIDF' | 'toNaturalLanguage') => void;
  }
  
  const LanguageSelect: React.FC<LanguageSelectProps> = ({ direction, onChange }) => {
    return (
      <select
        className="w-full p-2  text-white border rounded-md mb-4 bg-gray-800"
        value={direction}
        onChange={(e) => onChange(e.target.value as 'toIDF' | 'toNaturalLanguage')}
      >
        <option value="toIDF">Natural Language to IDF</option>
        <option value="toNaturalLanguage">IDF to Natural Language</option>
      </select>
    );
  };
  
  export default LanguageSelect;