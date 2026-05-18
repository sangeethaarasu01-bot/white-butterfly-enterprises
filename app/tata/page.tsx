import TataCard from "@/components/tata/TataCard";

import { tata } from "@/data/tata";

export default function TataPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Tata Powder Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tata.map((tata) => (
            <TataCard key={tata.id} tata={tata} />
          ))}
        </div>
      </div>
    </section>
  );
}
