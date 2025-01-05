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
        <div>
          <p>¡Sí hay bebidas!</p>
          {/* Renderiza la lista de bebidas, si es necesario */}
          <ul>
            {drinks.drinks.map((drink) => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">No hay bebidas disponibles</p>
      )}
    </>
  );
}
