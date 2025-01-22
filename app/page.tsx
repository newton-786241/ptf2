import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
