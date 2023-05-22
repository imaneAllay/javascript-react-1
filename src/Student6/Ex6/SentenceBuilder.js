import React, { useState, useRef } from 'react';

export const SentenceBuilder = () => {
    
  const [sentence, setSentence] = useState('');
  const wordInputRef = useRef(null); 

  const handleAddWord = () => {
    const newWord = wordInputRef.current.value; 
    setSentence(prevSentence => prevSentence + ' ' + newWord); 
    wordInputRef.current.value = ''; 
  };

  const handleReset = () => {
    setSentence(''); 
    wordInputRef.current.value = ''; 
  };

  return (
    //We should wrape everything inside a div
    <div>
        <h1>Sentence Builder</h1>
      <p>Sentence: {sentence}</p>
      <input type="text" ref={wordInputRef} />
      <button onClick={handleAddWord}>Add Word</button>
      <button onClick={handleReset}>Reset</button>
    </div>

  );
};

