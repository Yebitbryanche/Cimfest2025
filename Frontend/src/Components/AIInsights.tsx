interface Insight {
  id: number;
  theme: string;
  insight: string;
}

const insights: Insight[] = [
  {
    id: 1,
    theme: 'Marketing Strategy',
    insight: "Your new song 'People (Bikutsi Remix)' is trending in the Paris Diaspora. Best day to release your next single is Friday for maximum engagement. Consider a localized campaign via WhatsApp/Telegram.",
  },
  {
    id: 2,
    theme: 'Monetization Opportunity',
    insight: "Direct Mobile Money sales are outperforming streaming revenue. Suggest promoting your pre-save link for loyal local fans to maximize immediate revenue.",
  },
  {
    id: 3,
    theme: 'Live Engagement',
    insight: "High stream numbers in Douala and Yaoundé suggest a live event or mini-concert could drive engagement and merchandise sales. Plan an event in Douala next weekend.",
  },
  {
    id: 4,
    theme: 'Content Optimization',
    insight: "The 15-second hook at 0:45 is the most shared on TikTok. Generate a short asset of this hook and use across social media for the next 48 hours.",
  },
  {
    id: 5,
    theme: 'Release Timing',
    insight: "Streams are highest on Fridays and Saturdays. Schedule releases around this peak for maximum reach and charting potential.",
  },
];

export default function AIInsights() {
  return (
    <div className="bg-black/30 p-6 rounded-2xl shadow-lg border border-gray-700 text-gray-100 mb-6">
      <h3 className="text-xl font-bold text-purple-400 mb-4">AI Actionable Insights</h3>
      <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
        {insights.map(insight => (
          <div key={insight.id} className="bg-gray-900/70 p-4 rounded-xl border-l-4 border-purple-400 hover:bg-gray-800 transition-colors">
            <p className="text-xs font-semibold uppercase text-purple-300 mb-1">{insight.theme}</p>
            <p className="text-gray-200 text-sm">{insight.insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
