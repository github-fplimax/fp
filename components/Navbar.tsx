import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="flexBetween sticky border-b-2 bg-white top-0 max-container padding-container z-50 py-3">
      <Link href="/">
        <Image src="/FP GROUP.png" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 capitalize lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="021 587 0525"
          // icon="/user.svg"
          variant="btn_orange"
        />
      </div>

      {/* <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
      <div className="inline-block cursor-pointer lg:hidden">
        <SideBar />
      </div>
    </div>
  );
};

export default Navbar;
