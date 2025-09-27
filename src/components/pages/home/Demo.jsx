import React from "react";

export default function ScrollExample() {
  return (
    <div className="p-4">
      <h2 className="mb-4 font-semibold text-lg">Horizontal Scroll Table</h2>

      {/* Scrollable container */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg p-2">
        <table className="min-w-[600px] border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Column 4</th>
              <th className="border p-2">Column 2</th>
              <th className="border p-2">Column 3</th>
              <th className="border p-2">Column 4</th>
              <th className="border p-2">Column 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Data 1</td>
              <td className="border p-2">Data 2</td>
              <td className="border p-2">Data 3</td>
              <td className="border p-2">Data 4</td>
              <td className="border p-2">Data 5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
