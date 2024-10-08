import Card from "@/components/card/Card";
import Nav from "@/components/nav/Nav";
import { fetchProducts } from "@/utils/index";

const page = async () => {
  const products = await fetchProducts();

  return (
    <>
      <Nav/>
      <div className="flex flex-wrap justify-center mt-[40px]">
        {products?.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};

export default page;

