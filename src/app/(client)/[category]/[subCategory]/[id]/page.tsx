import { getProductByIdQuery } from "@/sanity/product-queries";
import ProductViewPage from "./_components/product-view";


export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await getProductByIdQuery(id);
    console.log('product', product)
    return (
        <div>
            <ProductViewPage product={product} />
        </div>
    )
}
