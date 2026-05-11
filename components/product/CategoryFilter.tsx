// components/products/CategoryFilter.tsx

type Props = {
  selected: string;
  setSelected: (val: string) => void;
};

const categories = ["All", "Millets & Rice", "Pulses", "Dry Food", "Spices"];

export default function CategoryFilter({ selected, setSelected }: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-full border ${
            selected === cat ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
