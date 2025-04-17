import ProductPage from "./_components/product_view"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params
    console.log(slug)
    return (
        <div>
            <ProductPage />
        </div>
    )
}