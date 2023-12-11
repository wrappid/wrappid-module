import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

export default function WMDHeaderSection(props) {
  const { header } = props;

  return (
    <CoreBox styleClasses={[CoreClasses.BG.BG_SECONDARY_LIGHT, CoreClasses.PADDING.P1]}>
      <CoreTypographyBody1>{header.title || "Wrappid Module Header"}</CoreTypographyBody1>
      
      {props.children}
    </CoreBox>
  );
}
