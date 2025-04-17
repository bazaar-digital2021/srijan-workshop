import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function CategorySection({ categories, sectionTitle }: { categories: HeroSchemaType[], sectionTitle: string }) {
    return (
        <ScrollArea className=" w-full whitespace-nowrap ">
            <h1 className='text-center text-2xl font-bold font-serif my-4 '>{sectionTitle}</h1>
            <div className="px-4 grid grid-cols-3 gap-4 md:grid-cols-6 md:grid-rows-1 md:gap-0  ">
                {categories.map((card) => (
                    <Card key={card.title} className="p-0 flex-shrink-0 bg-transparent">
                        <CardContent className="p-0 flex items-center justify-center overflow-hidden bg-transparent">
                            <div className="relative w-36 h-56 md:h-full md:w-full overflow-hidden rounded-md md:rounded-none">
                                <Image src={card.imageUrl} height={500} width={500} className="w-full h-full object-cover object-top " alt={card.slug} />
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                                <p className="absolute px-1 bottom-4 font-bold text-white font-sans">
                                    {card.title}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ScrollArea>
    )
}