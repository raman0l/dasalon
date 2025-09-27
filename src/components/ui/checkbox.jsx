"use client";

export default function MyCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-2 focus:ring-black"
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}
