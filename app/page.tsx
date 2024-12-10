'use client';
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const onClick = () => {
    redirect('/dashboard');
  };
  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <h1 className="text-6xl mb-24 text-main-950 text-center">
          Welcome to the Test Dashboard
        </h1>
      </div>
      <main className="flex flex-col w-full">
        <div className="flex justify-center self-center w-full sm:self-center">
          <Image className="rounded-full" src={'/profile.png'} alt='profile-pic' width={450} height={450}/>
        </div>
        <div className="flex w-full justify-center self-center">
          <button onClick={onClick} className="p-4 mt-[80px] bg-main-700 rounded w-[200px] align-middle text-slate-100 font-semibold text-xl cursor-pointer hover:bg-main-300 hover:text-blue-950">
            Enter
          </button>
        </div>
      </main>
      <footer className="flex h-full w-full self-center justify-center">
        <h2 className="self-end text-sm">
          Austin Baune
        </h2>
      </footer>
    </div>
  );
}
