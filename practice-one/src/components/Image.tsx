interface ImageProps {
  srcImg: string;
  altImg: string;
  classImg?: string;
}

export default function Image({ srcImg, altImg, classImg }: ImageProps) {
  return (<img src={srcImg} alt={altImg} className={classImg} />);
}
