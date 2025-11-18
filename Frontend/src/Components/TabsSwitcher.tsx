interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabsSwitcher({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="w-full bg-[#1a1a1a] rounded-xl p-1 flex mt-10">

      {["Beats", "Songs", "Collaborations"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-3 text-center rounded-lg transition
            ${activeTab === tab ? "bg-[#0d0d0d] text-white font-semibold" : "text-gray-400"}`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}
