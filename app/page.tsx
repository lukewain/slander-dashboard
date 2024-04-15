import TopBar from "./components/topbar";
import Info from "./components/info";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-screen mx-auto">
        <TopBar />
      </div>
      {/* The webpage for MEE6 Slander */}
      <hr className="mx-auto mt-[10px] w-[100%]" />
      {/* <div className="flex mx-auto mt-[20px]" id="welcome">
        <h1 className="justify-center items-center place-items-center text-3xl font-bold underline underline-offset-2">
          Welcome!
        </h1>
      </div> */}
      <div className="flex" id="question-wrap">
        <div className="ml-8 mt-5" id="what-is">
          <h1 className="text-xl font-bold text-center">What is MEE6 Slander?</h1>
          <p className="text-[14px] mt-[2px] ml-[6px]">
            MEE6 Slander is a bot which insults the extremely popular MEE6 bot.
            <br />
          </p>
        </div>
        <div className="ml-8 mt-5" id="whats-needed">
          <h1 className="text-xl font-bold text-center">What is needed for MEE6 Slander to work?</h1>
          <p className="text-[14px] mt-[2px] ml-[6px]">
            MEE6 Slander requires MEE6 to work properly. It can't slander MEE6 if MEE6 is not there!
          </p>
        </div>
      </div>
      <Info />
    </main>
  );
}
 