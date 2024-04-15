import "./info.css";

export default function Info() {
  return (
    <div className="flex mb-[30px]" id="info-div">
      {/* Credits for the page */}
      <h1 className="mr-[25px]">Created by Luke W</h1>
      <h1 className="ml-[25px] mr-[25px]">Hosted on <a href="https://vercel.com" className="underline">Vercel</a></h1>
      <h1 className="ml-[25px]">Copyright© 2024</h1>
    </div>
  );
}
