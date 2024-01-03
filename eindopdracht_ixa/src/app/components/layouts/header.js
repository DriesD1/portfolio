import Navigation from "./navigation";

export default function Header () {
  return (
    <header className={`w-full bg-zinc-50 border-b-2 border-zinc-100`}>
      <div className={`container mx-auto flex flex-row flex-nowrap items-center justify-between`}>
        <Navigation />
      </div>
    </header>
  )
};