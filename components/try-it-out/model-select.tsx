import { useState, useCallback } from 'react';
import { ModelType } from '@/types';

export type Option = {
  value: ModelType;
  label: string;
  description: string;
};

type ModelSelectProps = {
  options: Option[];
  selectedOption: Option;
  onChange: (value: Option) => void;
};

export function ModelSelect({
  options,
  selectedOption,
  onChange,
}: ModelSelectProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleOptionClick = useCallback(
    (option: Option) => {
      setIsOpen(false);
      onChange(option);
    },
    [onChange]
  );

  return (
    <div className="">
      <button
        className="grow pl-2.5 py-2 pr-2 flex flex-wrap gap-1 text-base items-center justify-center btn btn-ghost "
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="model-select-label"
      >
        {selectedOption.label}
        <span aria-hidden="true">▼</span>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700 max-h-72 overflow-y-auto"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`p-2 cursor-pointer hover:bg-gray-200 ${option.value === selectedOption.value ? `bg-gray-200` : ``}`}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={option.value === selectedOption.value}
            >
              <span
                className="text-bold text-lg text-sky-600"
                aria-hidden="true"
              >
                {option.value === selectedOption.value ? '✓ ' : ''}
              </span>
              <span className="text-base font-semibold">{option.label}</span>
              <p className="text-sm">{option.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
