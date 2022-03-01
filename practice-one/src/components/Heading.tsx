export interface HeadingProps {
  headingText: string;
  subHeadingText?: string;
  descriptionText?: string;
  customize?: string;
}

export default function Heading({ headingText, subHeadingText, descriptionText, customize }: HeadingProps): JSX.Element {
  let headingClass: string = "";
  let subHeadingClass: string = "";
  let descriptionClass: string = "";

  if (customize) {
    headingClass = `${customize}__heading`;
    subHeadingClass = `${customize}__sub-heading`;
    descriptionClass = `${customize}__desc`;
  }

  return (
    <>
      {subHeadingText ? <h3 className={`${subHeadingClass} font--xl`}>{subHeadingText}</h3> : undefined}
      <h2 className={`${headingClass} heading`}>
        {headingText}
      </h2>
      {descriptionText ? <p className={`${descriptionClass} desc`}>{descriptionText}</p> : undefined}
    </>
  );
}
