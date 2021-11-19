import { React, useContext } from "react";
import { Link } from "react-router-dom"
import CartItem from "../component/cart-book-item";
import { CartContext } from "../context/cart-context";




export function Cart() {
    const { items, onInc, onDec, onDel } = useContext(CartContext);

    console.log(items);

    return (
        <div>
            <h1>Cart</h1>
            <Link to="/">Kembali ke Home</Link>
            {items.map((item) => (
                <CartItem key={item.Id} item={item} onInc={() => onInc(item.book)} onDec={() => onDec(item.book)} onDel={() => onDel(item.book)} />
            ))}
        </div>
    )
}

