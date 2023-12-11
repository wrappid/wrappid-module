import WrappidModuleLayout from "./components/layouts/WrappidModuleStaticLayout";
import ModuleComponent from "./components/ModuleComponent";

export const ComponentsRegistry = {
  ModuleComponent    : { comp: ModuleComponent },
  WrappidModuleLayout: { comp: WrappidModuleLayout, layout: true }
};