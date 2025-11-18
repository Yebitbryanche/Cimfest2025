import React from "react";

interface RevenueItem {
  source: string;
  amount: number;
  color?: string; // Tailwind color classes
}

interface Props {
  data?: RevenueItem[];
}

const defaultData: RevenueItem[] = [
  { source: "Boomplay", amount: 1200.5, color: "bg-purple-500" },
  { source: "YouTube", amount: 850.3, color: "bg-purple-400" },
  { source: "Apple Music", amount: 503, color: "bg-pink-500" },
  { source: "Spotify", amount: 200, color: "bg-indigo-500" },
];

const formatUSD = (value: number) => `$${value.toLocaleString()}`;

const RevenueBreakdown: React.FC<Props> = ({ data = defaultData }) => {
  const maxAmount = Math.max(...data.map((d) => d.amount));

  return (
    <div className="bg-black/30 p-6 rounded-2xl shadow-lg border border-gray-700 text-gray-100 w-full mb-8">
      <h3 className="text-xl font-bold text-purple-400 mb-4">
        Revenue Source Breakdown (USD)
      </h3>
      <div className="space-y-4">
        {data.map((item, idx) => {
          const widthPercent = (item.amount / maxAmount) * 100;
          return (
            <div key={idx}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-200 text-sm font-medium">
                  {item.source}
                </span>
                <span className="text-gray-100 text-sm font-semibold">
                  {formatUSD(item.amount)}
                </span>
              </div>
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`absolute h-full rounded-full ${item.color}`}
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
