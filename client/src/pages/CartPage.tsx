import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateCount, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  if (cartItems.length === 0) {
    return <div className="text-center text-xl py-10">🛒 Your cart is empty — time to spice it up! 🌶️</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price} x {item.count} = ₹{item.price * item.count}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateCount(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.count}</span>
                <button onClick={() => updateCount(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-xl">❌</button>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ₹{total}</p>
        <button className="bg-green-600 text-white px-6 py-2 mt-2 rounded">Buy</button>
      </div>
    </div>
  );
}
