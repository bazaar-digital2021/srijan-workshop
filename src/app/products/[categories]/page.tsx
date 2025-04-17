

export default async function Page({
    params,
}: {
    params: Promise<{ categories: string }>
}) {
    const { categories } = await params

    return (
        <div>
            <p>Categories: {categories}</p>
        </div>
    )
}