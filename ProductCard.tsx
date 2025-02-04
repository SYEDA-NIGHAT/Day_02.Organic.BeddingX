import Image from 'next/image';

// Define TypeScript type for the product prop
type ProductProps = {
  product: {
    _id: string;
    name: string;
    description?: string;
    price: number;
    image: string; // Ensure image is a valid URL
  };
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border rounded p-4 shadow-lg">
      {/* Image Display */}
      <Image 
        src={product.image} 
        alt={product.name} 
        width={200} 
        height={200} 
        className="rounded-lg"
      />
      
      {/* Product Name */}
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      
      {/* Product Price */}
      <p className="text-green-700 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
