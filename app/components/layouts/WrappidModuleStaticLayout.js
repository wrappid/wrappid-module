import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

export default function WrappidModuleStaticLayout(props) {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_SECONDARY]}>
        <CoreTypographyBody1>{"Wrappid Module Header"}</CoreTypographyBody1>
      </CoreBox>

      
      {props.children}

      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_SECONDARY]}>
        <CoreTypographyBody1>{"Wrappid Module Footer"}</CoreTypographyBody1>
      </CoreBox>
    </>
  );
}
