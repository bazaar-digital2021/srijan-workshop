'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/sanity/types/product';

interface ProductCardProps {
    products: Product[];
}

const ProductCard = ({ products }: ProductCardProps) => {
    return (
        <section>
            <h1 className='text-center text-2xl md:text-4xl font-bold font-serif my-4 '>Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {products.map((product) => {


                    const discountedPrice = product.price - (product.price * product.totalDiscount) / 100;

                    return (
                        <div key={product._id} className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                            <Link href={`/${product.category.categorySet}/${product.category.subCategory}/${product._id}`}>
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                                    <Image
                                        src={product.image}
                                        alt={product.productName}
                                        width={500}
                                        height={500}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {product.productName}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className={`w-4 h-4 ${index < Math.floor(4)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">({product.rating})</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            {product.totalDiscount > -1 && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    ₹{product.price.toFixed(2)}
                                                </span>
                                            )}
                                            <span className="text-lg font-bold text-gray-900">
                                                ₹{discountedPrice.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductCard; 