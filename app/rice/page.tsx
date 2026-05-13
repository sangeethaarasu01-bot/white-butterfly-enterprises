import RiceCard from "@/components/rice/RiceCard";
import { rices } from "@/data/rice";

export default function RicePage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Rice Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rices.map((rice) => (
            <RiceCard key={rice.id} rices={rice} />
          ))}
        </div>
      </div>
    </section>
  );
}
