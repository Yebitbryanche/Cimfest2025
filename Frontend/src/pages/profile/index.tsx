import { useState } from "react";
import ArtistHeader from "../../Components/ArtistHeader";
import TabsSwitcher from "../../Components/TabsSwitcher";
import BeatsCard from "../../Components/BeatsCard";
import SongListItem from "../../Components/SongListItem";
import CollaborationCard from "../../Components/CollaborationCard";
import images from "../../types/images";

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
            <BeatsCard
              image={images.beat3}
              title="Summer Vibes"
              subtitle="DJ Neh"
              price="53450"
            />
            <BeatsCard
              image={images.beat1}
              title="Afro Groove"
              subtitle="DJ Nio"
              price="250"
            />
            <BeatsCard
              image={images.beat2}
              title="Romans Flow"
              subtitle="DJ Leo"
              price="250"
            />
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
            <CollaborationCard
              title="Drill Anthem"
              artists="You ft. Big Wave"
              plays="9,542"
            />
            <CollaborationCard
              title="Nightfall"
              artists="You x Dreamlord"
              plays="6,230"
            />
            <CollaborationCard
              title="Vibe Tape"
              artists="You & Lil Nova"
              plays="4,115"
            />
          </div>
        )}
      </div>
    </div>
  );
}
