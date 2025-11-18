const geoData = [
  { region: 'Douala, CM', streams: 350000, growth: 12, color: 'bg-purple-500' },
  { region: 'Yaoundé, CM', streams: 280000, growth: 8, color: 'bg-purple-400' },
  { region: 'Lagos, NG', streams: 150000, growth: 5, color: 'bg-purple-300' },
  { region: 'Paris, FR (Diaspora)', streams: 100000, growth: 25, color: 'bg-pink-500' },
  { region: 'Bamenda, CM', streams: 80000, growth: 15, color: 'bg-indigo-500' },
];

const formatStreams = (value: number) => value.toLocaleString();

export default function AudienceGeoDistribution() {
  const maxStreams = Math.max(...geoData.map(d => d.streams));

  return (
    <div className="bg-black/30 p-6 rounded-xl shadow-lg border border-gray-700 text-gray-100">
      <h3 className="text-xl font-bold text-purple-400 mb-4">Audience Geo-Distribution (Streams)</h3>
      <div className="space-y-4">
        {geoData.map((item, index) => {
          const widthPercent = (item.streams / maxStreams) * 100;
          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-200 text-sm font-medium">{item.region}</span>
                <span className="text-gray-100 text-sm font-semibold">{formatStreams(item.streams)}</span>
              </div>
              <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`absolute h-full rounded-full transition-all duration-700 ease-out ${item.color}`}
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
              {item.growth && (
                <p className={`text-xs mt-1 ${item.growth > 10 ? 'text-green-500' : 'text-yellow-400'}`}>
                  +{item.growth}% MoM Growth
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
