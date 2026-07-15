"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function GuidaPage() {
  const [comune, setComune] = useState("");
  const router = useRouter();

  function continua(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const comunePulito = comune.trim();

    if (!comunePulito) {
      return;
    }

    router.push(`/checklist?comune=${encodeURIComponent(comunePulito)}`);
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] px-6 py-16 text-[#203434]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#356f70]">
          Guida personalizzata
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Iniziamo dal tuo Comune
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#667575]">
          Rispondi a poche domande e HostPilot preparerà un primo percorso con
          gli adempimenti da verificare.
        </p>

        <form
          onSubmit={continua}
          className="mt-10 rounded-3xl border border-[#ded8cd] bg-white p-8 shadow-sm"
        >
          <label
            htmlFor="comune"
            className="block text-sm font-semibold text-[#203434]"
          >
            In quale Comune si trova la struttura?
          </label>

          <input
            id="comune"
            type="text"
            value={comune}
            onChange={(event) => setComune(event.target.value)}
            placeholder="Per esempio: Bari"
            required
            className="mt-3 w-full rounded-2xl border border-[#c9c3b8] px-4 py-3 outline-none focus:border-[#356f70]"
          />

          <button
            type="submit"
            className="mt-6 rounded-full bg-[#356f70] px-6 py-3 font-semibold text-white"
          >
            Continua
          </button>
        </form>
      </div>
    </main>
  );
}