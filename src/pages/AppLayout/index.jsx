import { Link, Outlet } from "react-router-dom";
import { AppNav } from "../../components/AppNav";
import { Logo } from "../../components/Logo";
import { Map } from "../../components/Map";

export function AppLayout() {
  return (
    <main className=" sm:flex sm:w-full">
      <section className="flex flex-col gap-6 h-[80vh] m-4 bg-gray-900 sm:h-screen sm:w-full">
        <Logo>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Link to="/">
              <img src="/icon.png" className="w-8 h-8" />
            </Link>
            <h2 className="text-2xl text-white">World Wise</h2>
          </div>
        </Logo>
        <AppNav />
        <Outlet />
        <footer className="text-center text-gray-400 mt-auto">
          &copy; Copyright {new Date().getFullYear()} by World Wise.
        </footer>
      </section>
      <Map />
    </main>
  );
}
