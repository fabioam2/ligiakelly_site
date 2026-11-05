"use client";

import { useEffect, useState } from "react";

type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "ligiakelly_google_consent";

function updateGoogleConsent(value: ConsentValue) {
  window.gtag?.("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent_state: value,
  });
}

export default function ConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(localStorage.getItem(STORAGE_KEY) === null);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function saveChoice(value: ConsentValue) {
    localStorage.setItem(STORAGE_KEY, value);
    updateGoogleConsent(value);
    setIsOpen(false);
  }

  if (!isOpen) {
    return (
      <button className="privacyPreferences" type="button" onClick={() => setIsOpen(true)}>
        Privacidade
      </button>
    );
  }

  return (
    <aside className="consentBanner" aria-label="Preferências de privacidade" role="dialog" aria-live="polite">
      <div>
        <strong>Privacidade e medição</strong>
        <p>
          Usamos cookies opcionais para entender o uso do site e medir campanhas. Nenhum nome, telefone ou dado de saúde é enviado. Você pode alterar sua escolha quando quiser.
        </p>
      </div>
      <div className="consentActions">
        <button type="button" className="consentReject" onClick={() => saveChoice("denied")}>Recusar</button>
        <button type="button" className="consentAccept" onClick={() => saveChoice("granted")}>Aceitar</button>
      </div>
    </aside>
  );
}
