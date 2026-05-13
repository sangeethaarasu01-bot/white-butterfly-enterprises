import HerbalCard from "@/components/herbal/page";
import { herbals } from "@/data/herbal";

export default function HerbalPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Herbal Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {herbals.map((herbal) => (
            <HerbalCard key={herbal.id} herbals={herbal} />
          ))}
        </div>
      </div>
    </section>
  );
}
