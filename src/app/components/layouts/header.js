import Navigation from "./navigation";

export default function Header () {
  return (
    <header className={`w-full`}>
      <div className={`container mx-auto flex flex-row flex-nowrap items-center justify-center`}>
        <Navigation />
      </div>
    </header>
  )
};