/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay .",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with sdf sdfsdf.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task sdfdsf sdfsdf.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel sdfdsf.",
  },
  // More products...
];

export default function QuickItemLists(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-2 sm:px-6 sm:pt-16 sm:pb-2 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group bg-primary500 p-6 rounded-lg"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-white">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                {product.price}
              </p>
              <p className="mt-1 text-md text-white">{product.imageAlt}</p>
              <button className="mt-4 rounded-md border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-primary500 shadow-sm hover:border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Add
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
