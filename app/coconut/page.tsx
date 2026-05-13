import CoconutCard from "@/components/coconut/CoconutCard";

import { coconut } from "@/data/coconut";

export default function CoconutPage() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Coconut Coir Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coconut.map((coconut) => (
            <CoconutCard key={coconut.id} coconut={coconut} />
          ))}
        </div>
      </div>
    </section>
  );
}
