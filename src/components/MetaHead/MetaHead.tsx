import { memo } from "react";
import { Helmet } from "react-helmet-async";

export interface MetaHeadProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
}

export const MetaHead = memo(
  ({ metaTitle, metaDescription, metaImage }: MetaHeadProps) => {
    return (
      <Helmet>
        <title key="titleTag">xBeskar | {metaTitle}</title>
      </Helmet>
    );
  }
);

MetaHead.displayName = "MetaHead";
