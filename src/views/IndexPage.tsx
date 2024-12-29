/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function indexPage() {
  const drinks = useAppStore((state) => state.drinks)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hasDrinks = useMemo(() => drinks.drinks.length,[])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <>
          <p>Si hay bebidas</p>
        </>
      ): (
        <p className="my-10 text-center text-2xl">No hay</p>
      )}
    </>
  );
}
