import { PageNav } from "../../components/PageNav";

export function Product() {
  return (
    <section className="relative h-screen m-4 bg-gray-900">
      <PageNav />
      <article className="flex flex-col px-8 mt-8 mx-auto gap-2 md:flex-row xl:w-[1216px] lg:gap-5">
        <img
          src="/img-1.jpg"
          alt="A man with two dogs looking at the horizon."
          className="rounded-md w-[350px] mx-auto lg:w-[500px]"
        />
        <div className="flex flex-col gap-2 text-gray-400 lg:text-xl lg:gap-6">
          <h2 className="text-2xl text-white font-semibold lg:text-4xl">
            About World Wide
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            magnam expedita sed, sunt aliquid assumenda recusandae voluptatum.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            magnam expedita sed, sunt aliquid assumenda recusandae voluptatum.
          </p>
        </div>
      </article>
    </section>
  );
}
