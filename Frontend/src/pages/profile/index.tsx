import { useState } from "react";
import ArtistHeader from "../../Components/ArtistHeader";
import TabsSwitcher from "../../Components/TabsSwitcher";
import BeatsCard from "../../Components/BeatsCard";
import SongListItem from "../../Components/SongListItem";
import CollaborationCard from "../../Components/CollaborationCard";

export default function ArtistProfilePage() {
  const [activeTab, setActiveTab] = useState("Beats");

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-12">

      <ArtistHeader />

      {/* TABS */}
      <TabsSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* CONTENT */}
      <div className="mt-10">

        {/* BEATS TAB */}
        {activeTab === "Beats" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <BeatsCard image="/cover1.jpg" title="Dark Trap" subtitle="140 BPM • Trap" price="29,999" />
            <BeatsCard image="/cover2.jpg" title="Lo-Fi Dreams" subtitle="85 BPM • Lo-Fi" price="19,999" />
            <BeatsCard image="/cover3.jpg" title="Hard Drill" subtitle="145 BPM • Drill" price="34,999" />
          </div>
        )}

        {/* SONGS TAB */}
        {activeTab === "Songs" && (
          <div className="flex flex-col gap-5">
            <SongListItem title="Midnight Dreams" plays="5,234" likes="432" />
            <SongListItem title="City Lights" plays="3,891" likes="298" />
            <SongListItem title="Summer Vibes" plays="2,156" likes="187" />
          </div>
        )}

        {/* COLLABORATIONS TAB */}
        {activeTab === "Collaborations" && (
          <div className="flex flex-col gap-5">
            <CollaborationCard title="Drill Anthem" artists="You ft. Big Wave" plays="9,542" />
            <CollaborationCard title="Nightfall" artists="You x Dreamlord" plays="6,230" />
            <CollaborationCard title="Vibe Tape" artists="You & Lil Nova" plays="4,115" />
          </div>
        )}

      </div>
    </div>
  );
}
