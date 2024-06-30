import { useState } from 'react';

interface APIKeyInputProps {
  onSubmit: (apiKey: string) => void;
}

const APIKeyInput: React.FC<APIKeyInputProps> = ({ onSubmit }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(apiKey);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center space-x-2 w-full">
      <label htmlFor="api-key" className="block text-sm font-medium text-white mr-2">
        OpenAI API Key
      </label>
      <input
        type="text"
        id="api-key"
        className="flex-grow p-2 border rounded-md bg-gray-800"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        required
      />
      <button type="submit" className="p-2 bg-[#32FD6B] text-black rounded-md hover:bg-green-400">
        Save API Key
      </button>
    </form>
  );
};

export default APIKeyInput;