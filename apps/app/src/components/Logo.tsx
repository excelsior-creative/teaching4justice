import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={className} aria-label="Teaching for Justice">
      <Image
        src="/tfj-logo-orange-500x374.png"
        alt="Teaching for Justice"
        width={500}
        height={374}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
};
