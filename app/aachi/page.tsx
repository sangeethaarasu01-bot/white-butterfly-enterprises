import AachiCard from "@/components/aachi/AachiCard";

import { aachi } from "@/data/aachi";

export default function MasalaPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Aachi Masala Powder Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aachi.map((aachi) => (
            <AachiCard key={aachi.id} aachi={aachi} />
          ))}
        </div>
      </div>
    </section>
  );
}
