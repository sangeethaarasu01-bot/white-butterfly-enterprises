import { products } from "@/data/product";
import { rices } from "@/data/rice";
import { pulses } from "@/data/pulses";
import { spices } from "@/data/spicies";
import { dryfood } from "@/data/dry_food";
import { coconut } from "@/data/coconut";
import { millets } from "@/data/millets";
import { herbals } from "@/data/herbal";
import { masala } from "@/data/masala";
import EnquiryForm from "@/components/product/Enquiry";
import Image from "next/image";
type Params = Promise<{ category: string; id: string }>;
export default async function EnquiryPage({ params }: { params: Params }) {
  const { category, id } = await params;
  let data: any[] = [];

  switch (category) {
    case "products":
      data = products;
      break;

    case "rice":
      data = rices;
      break;

    case "pulses":
      data = pulses;
      break;

    case "spicies":
      data = spices;
      break;

    case "dry_food":
      data = dryfood;
      break;

    case "masala":
      data = masala;
      break;

    case "millets":
      data = millets;
      break;

    case "herbal":
      data = herbals;
      break;

    case "coconut":
      data = coconut;
      break;

    default:
      data = [];
  }
  const product = data.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-[400px] object-cover rounded-xl"
            />

            <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
            <p className="text-gray-500 mt-2">{product.description}</p>
          </div>

          <div>
            <EnquiryForm productName={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
