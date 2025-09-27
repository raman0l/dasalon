"use client";

export default function PerformanceOverview() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm font-medium">
              <span>{item.title}</span>
              <span
                className={`${
                  item.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}{" "}
                {item.value}/{item.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: `${(item.value / item.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
