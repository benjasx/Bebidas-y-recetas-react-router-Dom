import type { Drink } from "../types";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  const selectRecipi = useAppStore((state) => state.selectRecipies)
  return (
    <div className="boder shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrinkThumb}`}
          className="hover:scale-110 transition-transform hover:rotate-2"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
      </div>
      <button
        type="button"
        className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
        onClick={()=> selectRecipi(drink.idDrink)}
      >Ver Receta</button>
    </div>
  );
}
