import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        aria-hidden
        src="/headshot.jpeg"
        alt="Globe icon"
        width={16}
        height={16}
      />
    </div>
  );
}
