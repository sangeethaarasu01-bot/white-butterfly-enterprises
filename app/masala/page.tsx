import MasalaCard from "@/components/masala/MasalaCard";

import { masala } from "@/data/masala";

export default function MasalaPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Masala Powder Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {masala.map((masala) => (
            <MasalaCard key={masala.id} masala={masala} />
          ))}
        </div>
      </div>
    </section>
  );
}
