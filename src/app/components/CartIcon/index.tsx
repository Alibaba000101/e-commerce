import { useCart } from "@/app/providers/CartProvider";
import Image from "next/image";

const CartIcon = () => {
    return (
        <Image src="/image/shopping-cart.png" alt="cart" width={24} height={24} />

    )
}

export default CartIcon