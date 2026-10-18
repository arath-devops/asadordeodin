"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { BRANCHES, branchWhatsappHref, type Branch } from "@/lib/config";

type OrderBranchContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const OrderBranchContext = createContext<OrderBranchContextValue | null>(null);

export function OrderBranchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <OrderBranchContext.Provider value={{ open, close, isOpen }}>
      {children}
      <BranchOrderModal />
    </OrderBranchContext.Provider>
  );
}

export function useOrderBranch() {
  const ctx = useContext(OrderBranchContext);
  if (!ctx) {
    throw new Error("useOrderBranch must be used within OrderBranchProvider");
  }
  return ctx;
}

type OrderBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

/** Botón que abre el modal de sucursal (WhatsApp del negocio). */
export function OrderWhatsAppButton({
  children,
  className = "",
  ...rest
}: OrderBtnProps) {
  const { open } = useOrderBranch();
  return (
    <button
      type="button"
      className={className}
      {...rest}
      onClick={(e) => {
        rest.onClick?.(e);
        if (!e.defaultPrevented) open();
      }}
    >
      {children}
    </button>
  );
}

function BranchOrderModal() {
  const { isOpen, close } = useOrderBranch();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 pb-28 sm:items-center sm:pb-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-char/80 backdrop-blur-sm"
        onClick={close}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-sm border border-gold/30 bg-char-elevated shadow-2xl shadow-black/50"
      >
        <div className="flex items-start justify-between gap-3 border-b border-gold/15 px-5 py-4">
          <div>
            <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Pedir
            </p>
            <h2
              id={titleId}
              className="mt-1 font-display text-xl font-bold text-cream md:text-2xl"
            >
              ¿Qué sucursal te queda más cerca?
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            className="shrink-0 rounded-sm border border-gold/25 px-2.5 py-1 font-display text-sm text-ash transition-colors hover:border-gold/50 hover:text-cream"
            aria-label="Cerrar diálogo"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-3 p-4">
          {BRANCHES.map((branch) => (
            <li key={branch.id}>
              <BranchOption branch={branch} onChosen={close} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BranchOption({
  branch,
  onChosen,
}: {
  branch: Branch;
  onChosen: () => void;
}) {
  return (
    <div className="rounded-sm border border-gold/20 bg-char/60 p-4">
      <p className="font-display text-base font-bold text-gold-soft">
        {branch.name}
      </p>
      <p className="mt-0.5 text-sm text-ash">{branch.area}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={branchWhatsappHref(branch)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onChosen}
          className="btn-ember !px-3 !py-2 !text-[0.7rem]"
        >
          Pedir aquí
        </a>
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold/90 underline decoration-gold/30 underline-offset-4 transition-colors hover:text-cream"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
