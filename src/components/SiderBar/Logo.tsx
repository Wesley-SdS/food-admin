import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <section className="flex justify-center">
      <Link href="/">
      
      <Image  src="/images/wills.png" alt="Logo" width={130} height={130} />
       

      </Link>
    </section>
  );
}
