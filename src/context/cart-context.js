"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "jsfw_shop_cart_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: {}, lastOrder: null };
    const parsed = JSON.parse(raw);
    return {
      items: parsed.items ?? {},
      lastOrder: parsed.lastOrder ?? null,
    };
  } catch {
    return { items: {}, lastOrder: null };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ items: state.items, lastOrder: state.lastOrder }),
    );
  } catch {
    // ignore
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.state;

    case "ADD": {
      const { product } = action;
      const existing = state.items[product.id];
      const quantity = existing ? existing.quantity + 1 : 1;

      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: { product, quantity },
        },
      };
    }

    case "REMOVE": {
      const id = action.id;
      const existing = state.items[id];
      if (!existing) return state;

      const nextQty = existing.quantity - 1;

      if (nextQty <= 0) {
        const next = { ...state.items };
        delete next[id];
        return { ...state, items: next };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [id]: { ...existing, quantity: nextQty },
        },
      };
    }

    case "SET_QTY": {
      const item = state.items[action.id];
      if (!item) return state;

      if (action.quantity <= 0) {
        const next = { ...state.items };
        delete next[action.id];
        return { ...state, items: next };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: { ...item, quantity: action.quantity },
        },
      };
    }

    case "CHECKOUT": {
      return {
        ...state,
        lastOrder: action.order,
        items: {},
      };
    }

    case "CLEAR":
      return { ...state, items: {} };

    default:
      return state;
  }
}

const initialState = { items: {}, lastOrder: null };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: "INIT", state: loadState() });
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const value = useMemo(() => {
    const itemsArray = Object.values(state.items);
    const totalItems = itemsArray.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = itemsArray.reduce(
      (sum, i) => sum + i.quantity * Number(i.product.price ?? 0),
      0,
    );

    return {
      items: state.items,
      itemsArray,
      totalItems,
      totalPrice,
      lastOrder: state.lastOrder,

      add: (product) => dispatch({ type: "ADD", product }),
      remove: (id) => dispatch({ type: "REMOVE", id }),
      setQty: (id, quantity) => dispatch({ type: "SET_QTY", id, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),

      checkout: () =>
        dispatch({
          type: "CHECKOUT",
          order: {
            items: itemsArray,
            totalPrice,
            createdAt: new Date().toISOString(),
          },
        }),
    };
  }, [state.items, state.lastOrder]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
