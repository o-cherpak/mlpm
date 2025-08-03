import {IoMenu} from "react-icons/io5";

type BurgerMenuProps = {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

export function BurgerMenu({setIsOpen, isOpen}: Readonly<BurgerMenuProps>) {
  return (
    <button
      className="flex"
      onClick={() => setIsOpen(!isOpen)}
    >
      <IoMenu size={34} color="indigo" />
    </button>
  )
}