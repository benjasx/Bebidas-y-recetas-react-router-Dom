import { useAppStore } from "../stores/useAppStore";

export default function indexPage() {
  useAppStore((state) => state.categories)
  return (
    <>
      <div>Index</div>
    </>
  );
}
