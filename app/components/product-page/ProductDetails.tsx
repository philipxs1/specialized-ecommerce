interface ProductDescriptionProps {
  descriptionHtml: string;
}

const ProductDetails = ({ descriptionHtml }: ProductDescriptionProps) => {
  return (
    <div
      className="product-description"
      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
    />
  );
};

export default ProductDetails;
