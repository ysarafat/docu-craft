import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          className="h-6 w-auto"
        />
      </Link>
    </div>
  );
}
