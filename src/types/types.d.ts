declare module '*.png' {
  const value: any;
  // export = value;
}
// images
declare module '*.jpg'

declare module "jsx:*.svg" {
  import { ComponentType, SVGProps } from "react";
  const SVGComponent: ComponentType<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module '*.mp4' {
  const value: any;
  export = value;
}
