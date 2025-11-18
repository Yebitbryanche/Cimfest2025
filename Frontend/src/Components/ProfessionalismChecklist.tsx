const checklistItems = [
  'ISRC Codes Assigned?',
  'Optimized Meta-Data (Genre Tags)?',
  'Hi-Res Album Art Uploaded?',
  'Local Radio Station Pitch Templates Ready?',
];

export default function ProfessionalismChecklist() {
  return (
    <div className="bg-black/30 p-6 rounded-xl shadow-lg border border-gray-700 mb-6 text-gray-100">
      <p className="text-md font-semibold mb-4 text-purple-400">Launch Professionalism Checklist</p>
      <ul className="text-sm space-y-2">
        {checklistItems.map((item, i) => (
          <li key={i} className="flex items-center justify-between">
            <span>{item}</span>
            <span className="text-gray-400">{'>'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
