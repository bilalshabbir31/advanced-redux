import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ProductS = [
  { id: "p1", price: 6, title: "My first book", description: "MY book" },
  { id: "p2", price: 7, title: "My second book", description: "MY book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ProductS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
