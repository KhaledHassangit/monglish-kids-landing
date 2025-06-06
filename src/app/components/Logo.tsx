// importing React components
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src={"/logo.svg"}
        width={100}
        height={100}
        alt="Monglish"
        loading="lazy"
        className="xl:w-full lg:w-20 w-15"
      />
    </Link>
  );
};

export default Logo;
