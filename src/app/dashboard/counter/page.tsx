import CartCounter from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart",
  description: "Simple Shopping Cart page",
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in the shopping cart</span>
      <CartCounter value={17}/>
    </div>
  );
}
