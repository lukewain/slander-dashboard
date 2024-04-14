import Image from "next/image";
import MEE6 from "../../public/MEE6 Slander web.png";

export default function TopBar() {
  return (
    <div className="flex h-screen mx-auto justify-center items-center">
      <div className="flex text-[#fff]">
        <Image
          className="rounded-md"
          src={MEE6}
          alt="MEE6 Slander"
          width={150}
          height={150}
        />
        <h1 className="ml-[20px] mt-[45px] text-6xl align-items-center">
          MEE6 Slander
        </h1>
      </div>
    </div>
  );
}
