import { createContext, useCallback, useEffect, useState } from "react";
import produce from "immer";

const initialItem = []

export const CartContext = createContext(initialItem);

export function CartProvider(props) {
    const [state, setState] = useState(initialItem);

    const handleAddtoCart = (book) => {
        const nextState = produce(state, (copyState) => {
            const id = book.Id;
            const found = copyState.find(item => (item.book.Id == id))
            if (!!found) {
                found.quantity++;
            } else {
                copyState.push(
                    { book: { ...book }, quantity: 1 }
                )
            }
        })
        setState(nextState);
    }

    const handleIncrement = (book) => {
        console.log("Called Inc")
        const nextState = produce(state, (copyState) => {
            const id = book.Id;
            const found = copyState.find(item => (item.book.Id == id))
            if (!!found) {
                found.quantity++;
            }
        })

        console.log(nextState)
        setState(nextState);
    }

    const handleDecrement = (book) => {
        console.log("Called Dec")
        const nextState = produce(state, (copyState) => {
            const id = book.Id;
            const found = copyState.find(item => (item.book.Id == id))
            found.quantity--;
        })
        const finalState = []

        nextState.map((item) => {
            if (item.quantity > 0) finalState.push(item);
        })

        console.log(finalState)

        setState(finalState);
    }

    const handleDelete = (book) => {
        console.log("Called Del")
        const nextState = produce(state, (copyState) => {
            const id = book.Id;
            const found = copyState.find(item => (item.book.Id == id))
            if (!!found) {
                found.quantity = 0;
            }
        })

        const finalState = []

        nextState.map((item) => {
            if (item.quantity > 0) finalState.push(item);
        })

        console.log(finalState)

        setState(finalState);
    }

    const value = {
        items: state,
        onAddToCart: handleAddtoCart,
        onInc: handleIncrement,
        onDec: handleDecrement,
        onDel: handleDelete,
    };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}