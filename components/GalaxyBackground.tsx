import { StarField } from "@/components/StarField";


export function GalaxyBackground() {
  return (
    <div aria-hidden className="galaxy-bg">
      <div className="galaxy-nebula galaxy-nebula--top-right" />
      <div className="galaxy-nebula galaxy-nebula--mid-left" />
      <div className="galaxy-nebula galaxy-nebula--bottom-left" />
      <div className="galaxy-lines">
      </div>
      <StarField />
    </div>
  );
}
