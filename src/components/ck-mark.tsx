import Image from "next/image";

export function CKMark(props: React.ComponentProps<typeof Image>) {
  return (
    <>
      <Image
        src="/mark-light.png"
        alt="Code Icon"
        width={100}
        height={40}
        className="block dark:hidden"
        unoptimized
      />
      <Image
        src="/mark-dark.png"
        alt="Code Icon"
        width={100}
        height={40}
        className="hidden dark:block"
        unoptimized
      />
    </>
  );
}
export function CKMarkSmall(props: React.ComponentProps<typeof Image>) {
  const { src, alt, width, height, ...rest } = props;
  return (
    <>
      <Image
        src="/mark-light.png"
        alt="Code Icon"
        width={16}
        height={16}
        className="block dark:hidden"
        unoptimized
        {...rest}
      />
      <Image
        src="/mark-dark.png"
        alt="Code Icon"
        width={16}
        height={16}
        className="hidden dark:block"
        unoptimized
        {...rest}
      />
    </>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
