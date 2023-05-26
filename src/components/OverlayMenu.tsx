import { jost, noto } from "../app/fonts";
import style from "./Navbar.module.scss";

export default function OverlayMenu({ isOpen, handleClick }: any) {
  return (
    <div
      className={`${style.navBar} ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } fixed flex justify-center inset-0 z-40 bg-ar-navy space-y-4 overflow-y-auto transition-all duration-500 ease-in-out transform`}
    >
      <nav className="flex flex-col items-center justify-center py-16">
        <a href="#about" className="text-2xl text-white" onClick={handleClick}>
          <p className={`text-base`}>About</p>
          <p className={`font-bold`}>ARTISANとは</p>
        </a>
        <a
          href="#capabilities"
          className="text-2xl text-white"
          onClick={handleClick}
        >
          <p className={`text-base`}>What we can do</p>
          <p className={`font-bold`}>ARで可能なこと</p>
        </a>
        <a
          href="#marketing"
          className="text-2xl text-white"
          onClick={handleClick}
        >
          <p className={`text-base`}>Marketing & PR</p>
          <p className={`font-bold`}>マーケティング効果</p>
        </a>
        <a href="#price" className="text-2xl text-white" onClick={handleClick}>
          <p className={`text-base`}>Price</p>
          <p className={`font-bold`}>ご料金</p>
        </a>
        <a href="#faq" className="text-2xl text-white" onClick={handleClick}>
          <p className={`text-base`}>FAQ</p>
          <p className={`font-bold`}>よくあるご質問</p>
        </a>
        <a href="#" className="bg-white py-2 px-4 rounded-full">
          お問合せはこちら
        </a>
      </nav>
    </div>
  );
}
