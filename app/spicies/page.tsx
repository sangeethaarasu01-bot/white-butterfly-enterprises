import SpicieCard from "@/components/spicies/SpicieCard";
import { spices } from "@/data/spicies";

export default function SpicePage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Spice Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spices.map((spices) => (
            <SpicieCard key={spices.id} spices={spices} />
          ))}
        </div>
      </div>
    </section>
  );
}
