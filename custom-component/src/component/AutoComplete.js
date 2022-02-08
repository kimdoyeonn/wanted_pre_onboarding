import React, { useEffect, useState } from 'react';

const AutoComplete = ({ data = [] }) => {
  const [isShow, setIsShow] = useState(false);
  const [text, setText] = useState('');
  const [wordList, setWordList] = useState([]);
  const [selectItem, setSelectItem] = useState(-1);

  useEffect(() => {
    const searchWord = () => {
      const words = data.filter(
        (word) =>
          word.includes(text.toUpperCase()) || word.includes(text.toLowerCase())
      );
      setWordList(words);
      setSelectItem(-1);
    };
    if (text === '') {
      setIsShow(false);
    } else {
      setIsShow(true);
      searchWord();
    }
  }, [text, data]);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const handleUpDown = (e) => {
    let nextItem = selectItem;
    if (e.key === 'ArrowDown') {
      nextItem = (nextItem + 1) % wordList.length;
    } else if (e.key === 'ArrowUp') {
      nextItem = nextItem < 0 ? wordList.length : nextItem;
      nextItem = (nextItem - 1) % wordList.length;
      nextItem = nextItem === -1 ? wordList.length - 1 : nextItem;
    }
    setSelectItem(nextItem);
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-full flex flex-col focus-within:shadow-md rounded-xl'>
        <div
          className={`h-12 flex py-2 px-3 border-neutral-300 border-2 rounded-xl ${
            text.length > 0 && wordList.length > 0 ? 'rounded-b-none' : ''
          }`}
        >
          <input
            type='text'
            className='flex flex-grow outline-none'
            value={text}
            onChange={changeText}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                setText(wordList[selectItem]);
              } else {
                handleUpDown(e);
              }
            }}
          />
          <span
            className='font-semibold cursor-pointer'
            onClick={() => setText('')}
          >
            x
          </span>
        </div>
        <div className='relative'>
          {isShow && wordList.length > 0 ? (
            <ul className='absolute w-full bg-white border-neutral-300 border-t-0 border-2 rounded-b-xl shadow-md'>
              {wordList.map((word, idx) => (
                <li
                  key={idx}
                  className={`px-3 my-2 hover:bg-neutral-200 ${
                    idx === selectItem ? 'bg-neutral-200' : ''
                  }`}
                  onClick={() => setText(word)}
                >
                  {word}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
