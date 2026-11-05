import type { Metadata } from "next";
import Script from "next/script";
import ConsentBanner from "./ConsentBanner";
import "./globals.css";

const GTM_ID = "GTM-TDVD42ML";

export const metadata: Metadata = {
  title: "Lígia Moreira | Nutricionista da Mulher",
  description: "Nutrição funcional integrativa e cuidado especializado na saúde da mulher, em Campinas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Script id="google-consent-and-tag-manager" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            var storedConsent = null;
            try { storedConsent = localStorage.getItem('ligiakelly_google_consent'); } catch (e) {}
            var consentValue = storedConsent === 'granted' ? 'granted' : 'denied';
            gtag('consent', 'default', {
              ad_storage: consentValue,
              ad_user_data: consentValue,
              ad_personalization: consentValue,
              analytics_storage: consentValue,
              wait_for_update: 500
            });
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
