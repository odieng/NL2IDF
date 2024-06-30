import { useState } from 'react';
import Image from 'next/image';
import APIKeyInput from '../components/APIKeyInput';
import CodeBlock from '../components/CodeBlock';
import LanguageSelect from '../components/LanguageSelect';
import ModelSelect from '../components/ModelSelect';
import TextBlock from '../components/TextBlock';
import { Bars } from 'react-loader-spinner';

const HomePage = () => {
  const [apiKey, setApiKey] = useState('');
  const [input, setInput] = useState('');
  const [direction, setDirection] = useState<'toIDF' | 'toNaturalLanguage'>('toIDF');
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true); // Set loading to true when the request starts
    setOutput(''); // Clear the output before starting a new request

    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ input, direction, model, key: apiKey }),
    });
    const reader = res.body?.getReader();
    if (reader) {
      const decoder = new TextDecoder();
      let result = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value);
      }
      setOutput(result);
      setLoading(false); // Set loading to false when the request finishes
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-800 p-8 flex items-center justify-center flex-col">
      
      <div  className="max-w-4xl w-full  bg-[#004051] p-6 rounded-md shadow-md flex flex-col items-center">
      <div className="mb-8">
        <Image src="/logo-no-background.png" alt="Logo" width={150} height={150} />
      </div>
      <p className="mb-2 text-center  text-white">A functional and user-friendly tool for translating natural language descriptions to EnergyPlus IDF files and vice versa</p>
        <APIKeyInput onSubmit={setApiKey} />
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <TextBlock value={input} onChange={setInput} placeholder="Enter description or IDF..." />
            <LanguageSelect direction={direction} onChange={setDirection} />
            <ModelSelect model={model} onChange={setModel} />
            <button
              className="w-full p-2 bg-[#32FD6B] text-black rounded-md hover:bg-green-400"
              onClick={handleTranslate}
            >
              Translate
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {loading ? (
              <Bars height="80" width="80" color="#32FD6B" ariaLabel="loading-indicator" />
            ) : (
              <CodeBlock placeholder="The output will display here..." content={output} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;