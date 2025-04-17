import { getCategoryBySectionData, getHeroImageData, getSlideImages } from "@/sanity/queries";
import BrandSlide from "@/section/BrandSlide";
import CategorySection from "@/section/category-section";
import ExclusiveDeal from "@/section/hero-image";
import HeroSlideSection from "@/section/HeroSlide-section";
import MovingMessages from "@/section/MovingMessage";


export default async function Home() {
  const images: SliderShowSchemaType = await getSlideImages();
  const cards: HeroSchemaType[] = await getHeroImageData();
  const sarees: HeroSchemaType[] = await getCategoryBySectionData('saree-category')
  const clothings: HeroSchemaType[] = await getCategoryBySectionData('clothing')
  const collections: HeroSchemaType[] = await getCategoryBySectionData('collection');
  const decors: HeroSchemaType[] = await getCategoryBySectionData('home-decor');
  // console.log('sarees', sarees)
  return (
    <main>
      <MovingMessages />
      <div className="bg-[#f6ffc1] px-3 slider-show md:px-16 py-4">
        <HeroSlideSection images={images.images} />
      </div>
      <div className=" px-3 slider-show md:px-16 py-4">
        <BrandSlide />
      </div>
      <div className=" md:block bg-gradient-to-b from-[#f6ffc1] to-transparent px-3 slider-show md:px-16 py-4">
        <ExclusiveDeal cards={cards} />
      </div>

      <CategorySection categories={sarees} sectionTitle="Shop By Category - Saree" />
      <CategorySection categories={clothings} sectionTitle="Shop By Category- Clothing" />
      <CategorySection categories={collections} sectionTitle="Our Top - Collections" />
      <div className="pb-8 md:hidden">
        <CategorySection categories={decors} sectionTitle="Home Decoration - Styles" />

      </div>
    </main>
  );
}
