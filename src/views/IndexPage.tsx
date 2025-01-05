import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  // Verificar si hay bebidas
  const hasDrinks = drinks?.drinks?.length > 0;

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {/* Renderiza la lista de bebidas, si es necesario */}
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">No hay bebidas disponibles</p>
      )}
    </>
  );
}
