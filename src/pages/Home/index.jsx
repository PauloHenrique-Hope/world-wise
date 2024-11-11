import { NavLink } from "react-router-dom";
import { PageNav } from "../../components/PageNav";

export function Home() {
  return (
    <main className="relative h-screen m-4">
      <PageNav />
      <div className="absolute inset-0 bg-hero-pattern bg-center bg-cover"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="relative z-10 flex flex-col px-4 mt-[100px] mx-auto gap-5 lg:w-[700px] xl:w-[1216px]">
        <h1 className="text-white text-3xl text-center font-semibold md:text-4xl lg:text-5xl xl:w-[900px] xl:mx-auto">
          You travel the world. WorldWise keeps track of your adventures.
        </h1>
        <p className="text-gray-300 text-center md:text-xl lg:text-2xl">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <NavLink to="/app" className="mx-auto">
          <button
            type="button"
            className="bg-green-500 rounded-xl p-3 hover:bg-green-600"
          >
            START TRACKING NOW
          </button>
        </NavLink>
      </section>
    </main>
  );
}
