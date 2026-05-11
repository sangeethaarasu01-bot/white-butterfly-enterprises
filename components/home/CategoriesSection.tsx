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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left">
          Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className=" p-4 sm:p-6 text-center hover:shadow-md transition cursor-not-allowed bg-white"
            >
              <Link href={cat.link}>
                <div className="mb-3 flex justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={200}
                    height={200}
                    className="w-[200px] h-[200px] object-cover rounded-lg cursor-not-allowed"
                  />
                </div>
              </Link>
              <Link href={cat.link}>
                <p className="text-sm sm:text-base font-medium text-gray-700 cursor-not-allowed">
                  {cat.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
