"use client";

import type { MouseEvent, ReactNode } from "react";

const WHATSAPP_NUMBER = "5519989068692";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const messages = {
  geral: "Olá, Dra. Lígia! Gostaria de agendar uma consulta.",
  dna: "Olá, Dra. Lígia! Gostaria de saber mais sobre a avaliação de DNA e como agendar.",
  lipedema: "Olá, Dra. Lígia! Gostaria de saber mais sobre o acompanhamento nutricional para lipedema e agendar uma consulta.",
  fertilidade: "Olá, Dra. Lígia! Gostaria de saber mais sobre o acompanhamento nutricional para fertilidade e agendar uma consulta.",
} as const;

type MessageKey = keyof typeof messages;

type WhatsAppLinkProps = {
  children: ReactNode;
  messageKey?: MessageKey;
  className?: string;
  eventLocation: string;
  ariaLabel?: string;
};

export default function WhatsAppLink({
  children,
  messageKey = "geral",
  className,
  eventLocation,
  ariaLabel,
}: WhatsAppLinkProps) {
  function openWhatsApp(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const url = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(messages[messageKey])}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <a
      href={WHATSAPP_BASE_URL}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={ariaLabel}
      data-event="whatsapp_agendamento"
      data-event-location={eventLocation}
      onClick={openWhatsApp}
    >
      {children}
    </a>
  );
}
