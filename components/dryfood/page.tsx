import { dryfood, type DryFood } from "@/data/dry_food";
import Image from "next/image";
import Link from "next/link";
type Props = {
  dryfood: DryFood;
};
export default function NutsCard({ dryfood }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
      <Image
        src={dryfood.image}
        alt={dryfood.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover hover:scale-105 transition duration-500 "
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 text-center ">
          {dryfood.name}
        </h3>

        <div className="flex justify-center mt-5">
          <Link
            href={`/enquiry/dry_food/${dryfood.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
