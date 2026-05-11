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
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
          Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className=" sm:p-6 text-center hover:shadow-lg transition duration-300 cursor-not-allowed bg-white"
            >
              {/* <Link href={cat.link}> */}
              <div className="mb-3 ">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={400}
                  height={300}
                  className="w-full h-[220px] sm:h-[250px] md:h-[220px] object-cover rounded-lg cursor-not-allowed"
                />
              </div>
              {/* </Link> */}

              <div className="p-3 sm:p-4">
                {/* <Link href={cat.link}> */}
                <p className="text-sm sm:text-base font-semibold text-gray-800 cursor-not-allowed">
                  {cat.name}
                </p>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
