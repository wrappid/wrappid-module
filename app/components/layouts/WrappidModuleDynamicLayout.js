import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

import WMDHeaderSection from "./WMDHeaderSection";

export default function WrappidModuleDynamicLayout(props) {
  return (
    <>
      <WMDHeaderSection {...props.sections.header} />

      {props.children}

      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_SECONDARY]}>
        <CoreTypographyBody1>{"Wrappid Module Footer"}</CoreTypographyBody1>
      </CoreBox>
    </>
  );
}
