type BurgerMenuProps = {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

export function BurgerMenu({setIsOpen, isOpen}: Readonly<BurgerMenuProps>) {
  return (
    <button
      className="md:hidden flex flex-col gap-1.5"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="w-6 h-0.5 bg-blue-700"></span>
      <span className="w-6 h-0.5 bg-blue-700"></span>
      <span className="w-6 h-0.5 bg-blue-700"></span>
    </button>
  )
}