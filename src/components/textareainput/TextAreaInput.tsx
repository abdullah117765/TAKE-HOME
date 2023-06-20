import React from 'react'

interface SelectInputProps{
  label:string;
  value:string;
  onChange: (Event: React.ChangeEvent<HTMLTextAreaElement>)=> void;
  height: string;
}






const TextAreaInput : React.FC<SelectInputProps>= ({ label, value, onChange, height }) => (
    <div className="mb-4">
      <label htmlFor={label} className="block mb-2 font-semibold">
        {label}
      </label>
      <textarea
        id={label}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border border-gray-300 rounded ${height ? `h-${height}` : ''}`}
      ></textarea>
    </div>
  );
  
  export default TextAreaInput;
  
 