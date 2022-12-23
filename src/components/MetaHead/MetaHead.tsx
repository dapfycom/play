import { defaultMetaTags } from "config/metatags";
import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export interface MetaHeadProps {
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
}

export const MetaHead = memo(
  ({ metaTitle, metaDescription, metaImage }: MetaHeadProps) => {
    const host = process.env.NEXT_PUBLIC_HOST;
    const location = useLocation();
    const canonicalURL = host + location.pathname;
    const title = metaTitle;

    return (
      <Helmet>
        <title key="titleTag">{title || defaultMetaTags.description}</title>
        <meta
          key="description"
          name="description"
          content={metaDescription || defaultMetaTags.description}
        />
        <meta key="author" name="author" content="Eldar and Beskar team"></meta>
        <meta charSet="utf-8" key="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta key="copyright" name="copyright" content="Eldar team" />
        <meta key="robots" name="robots" content="index, follow" />
        <meta
          key="Content-Type"
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        />

        <meta
          key="keywords"
          name="keywords"
          content="newmoon,elrond,egld,nft,nfts,dapp,maiar,marketplace,crypto,bitcoin,eldar,beskar"
        />

        {/*   <!-- Open Graph data --> */}
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content={title || defaultMetaTags.title}
        />
        <meta
          key="og:description"
          property="og:description"
          content={metaDescription || defaultMetaTags.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={metaImage || defaultMetaTags.image}
        />
        <meta key="og:url" property="og:url" content={canonicalURL} />

        {/* <!-- Twitter Card data --> */}
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={title || defaultMetaTags.title}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={metaDescription || defaultMetaTags.description}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={metaImage || defaultMetaTags.image}
        />
        <meta key="twitter:url" name="twitter:url" content={canonicalURL} />
      </Helmet>
    );
  }
);

MetaHead.displayName = "MetaHead";
