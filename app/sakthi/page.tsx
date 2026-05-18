import SakthiCard from "@/components/sakthi/SakthiCard";

import { sakthi } from "@/data/sakthi";

export default function SakthiMasalaPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Sakthi Masala Powder Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sakthi.map((sakthi) => (
            <SakthiCard key={sakthi.id} sakthi={sakthi} />
          ))}
        </div>
      </div>
    </section>
  );
}
