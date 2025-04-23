import { Star } from "lucide-react";

export const Stats = () => {
  return (
    <section className="container-wrapper pb-28">
      <div className="grid-cat-2 w-full">
        <div className="rounded-xl py-10 bg-gray-100 px-4 gap-4 flex items-center flex-col justify-center">
          <div className="flex items-start gap-2">
            <h1 className="text-4xl text-header font-bold">234</h1>
            <h4 className="text-3xl text-header/80 font-semibold">M</h4>
          </div>
          <p className="font-medium text-paragraph-text text-center">
            Supporting multiple <br /> currencies for users
          </p>
        </div>
        <div className="rounded-xl py-10 bg-primary px-4 gap-4 flex items-center flex-col justify-center">
          <div className="flex items-start gap-2">
            <h1 className="text-4xl text-white font-bold">768</h1>
            <h4 className="text-3xl text-yellow-500 font-semibold">K</h4>
          </div>
          <p className="font-medium text-white/80 text-center">
            Gaining new users <br /> every single month
          </p>
        </div>
        <div className="rounded-xl py-10 bg-gray-100 px-4 gap-4 flex items-center flex-col justify-center">
          <div className="flex items-start gap-2">
            <h1 className="text-4xl text-header font-bold">5.0</h1>
            <h4 className="text-3xl text-header/80 font-semibold">
            <Star /></h4>
          </div>
          <p className="font-medium text-paragraph-text text-center">
            High star rating <br /> from satisfied users
          </p>
        </div>
        <div className="rounded-xl py-10 bg-gray-100 px-4 gap-4 flex items-center flex-col justify-center">
          <div className="flex items-start gap-2">
            <h1 className="text-4xl text-header font-bold">$ 8.8</h1>
            <h4 className="text-3xl text-header/80 font-semibold">B</h4>
          </div>
          <p className="font-medium text-paragraph-text text-center">
            Generating increased  <br /> revenue consistently
          </p>
        </div>
      </div>
    </section>
  );
};
