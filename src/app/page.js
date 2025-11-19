import ButtonSidebar from "@/components/ButtonSidebar";
import ButtonLogout from "@/components/ButtonLogout";
import HeaderDate from "@/components/HeaderDate";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F6F7FB]">
      {/* Sidebar */}
      <aside className="w-[13%] max-h-screen p-5 bg-white border-r border-gray-400/30 drop-shadow-2xl flex flex-col justify-between">
        {/* Logo */}
        <div className="flex justify-center w-full h-fit">
          <p className="font-bold">To Do List</p>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex flex-col gap-1 w-full h-fit justify-center">
          <ButtonSidebar>Activity</ButtonSidebar>
          <ButtonSidebar>List</ButtonSidebar>
          <ButtonSidebar>Statistik</ButtonSidebar>
          <ButtonSidebar>Setting</ButtonSidebar>
        </nav>

        {/* Logout Button */}
        <div className="flex justify-center w-full h-fit">
          <ButtonLogout>Logout</ButtonLogout>
        </div>
      </aside>

      {/* Main Content */}
      <section className="w-[87%] p-10">
        <HeaderDate />

        {/* Exercise Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold ml-3 mb-5">Exercise</h2>

          <div className="grid grid-rows-1 gap-10">
            {/* Card 1 */}
            <div className="h-52 w-xl p-10 bg-white border border-gray-300 rounded-3xl drop-shadow-xl flex flex-col justify-center gap-3">
              <p className="text-xl font-bold">
                Kelas Offline Doscom University
              </p>
              <p className="text-gray-500">
                Harus ikut kelas DU, dan ga boleh telat
              </p>
              <p className="text-blue-500 font-semibold">08:00 - 11:00</p>
            </div>

            {/* Card 2 & 3 (Kosong) */}
            <div className="h-52 w-xl bg-white border border-gray-300 rounded-3xl drop-shadow-xl"></div>
            <div className="h-52 w-xl bg-white border border-gray-300 rounded-3xl drop-shadow-xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
