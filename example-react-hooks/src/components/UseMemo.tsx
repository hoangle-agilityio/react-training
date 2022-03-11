import { useMemo, useState } from "react";

interface Product {
  name: string;
  price: number;
}

export default function ExampleUseMemo() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [products, setProducts] = useState<Array<Product>>([]);

  const handleSubmit = (): void => {
    setProducts([...products, {
      name,
      price: +price,
    }])
  }

  const total = useMemo(() => {
    return products.reduce((result, product) => {
      console.log("re-render");
      return result + product.price
    }, 0);
  }, [products]);

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="name..." /><br />
      <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder="price..." /><br />
      Total: {total}
      <br /><button onClick={handleSubmit}>Add</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
