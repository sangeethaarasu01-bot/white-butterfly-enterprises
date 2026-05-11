import { products } from "@/data/product";
import EnquiryForm from "@/components/product/Enquiry";
import Image from "next/image";

export default async function EnquiryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
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
            {/* <p className="text-gray-500 mt-2">{product.category}</p> */}
          </div>

          <div>
            <EnquiryForm productName={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
