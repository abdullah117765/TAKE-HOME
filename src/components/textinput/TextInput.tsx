import React from 'react'
interface SelectInputProps{
  label:string;
  value:string;
  onChange: (Event: React.ChangeEvent<HTMLInputElement>)=> void;
}



const TextInput: React.FC<SelectInputProps> = ({ label, value, onChange }) => (
    <div className="mb-4">
      <label htmlFor={label} className="block mb-2 font-semibold">
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );

  export default TextInput;