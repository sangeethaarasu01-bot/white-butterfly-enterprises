import Image from "next/image";
import Link from "next/link";
export default function CategoriesSection() {
  const categories = [
    {
      name: "Millets & Rice",
      image: "/images/millets_rice/Sorgum.jpg",
      link: "/millets",
    },
    {
      name: "Pulses",
      image: "/images/pulses/brown-gram.png",
      link: "/pulses",
    },
    {
      name: "Dry Food",
      image: "/images/dry_food/cashew.jpeg",
      link: "/dry_food",
    },
    {
      name: "Spices",
      image: "/images/spices/Pepper.png",
      link: "/spicies",
    },
  ];
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
          Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.link}
              className=" sm:p-6 text-center hover:shadow-lg transition duration-300 cursor-not-allowed bg-white"
            >
              <div className="mb-3 flex justify-center">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-cover rounded-lg cursor-not-allowed"
                />
              </div>

              <div className="p-3 sm:p-4">
                <p className="text-sm sm:text-base font-semibold text-gray-800 cursor-not-allowed">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
