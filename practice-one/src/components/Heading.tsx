export interface HeadingProps {
  headingText: string;
  descriptionText?: string;
  customize?: string;
}

export default function Heading({ headingText, descriptionText, customize }: HeadingProps): JSX.Element {
  let headingClass: string = "";
  let descriptionClass: string = "";

  if (customize) {
    headingClass = `${customize}__heading`;
    descriptionClass = `${customize}__desc`;
  }

  return (
    <>
      <h2 className={`${headingClass} heading`}>
        {headingText}
      </h2>
      {descriptionText ? <p className={`${descriptionClass} desc`}>{descriptionText}</p> : undefined}
    </>
  );
}
