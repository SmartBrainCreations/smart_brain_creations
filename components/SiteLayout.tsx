import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type Props = {
  children: React.ReactNode;
  overlayHeader?: boolean;
};

export function SiteLayout({ children }: Props) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export default SiteLayout;
