import Link from "next/link";
const features = [
  {
    icon: "🧭",
    title: "Un percorso su misura",
    description:
      "Ricevi una checklist personalizzata in base alla Regione, al Comune e al tipo di attività.",
  },
  {
    icon: "✓",
    title: "Adempimenti spiegati",
    description:
      "Scopri cosa devi fare, quali documenti servono e dove trovare la fonte ufficiale.",
  },
  {
    icon: "⚖",
    title: "Fai da te o delega",
    description:
      "Confronta gestione autonoma e servizi esterni, con costi, difficoltà e responsabilità.",
  },
  {
    icon: "📖",
    title: "Impara mentre gestisci",
    description:
      "Guide semplici su check-in, pulizie, prezzi, ospiti, fiscalità e sicurezza.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#203434]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#356f70] font-semibold text-white">
            HP
          </div>

          <span className="text-xl font-semibold">HostPilot</span>
        </div>

        <nav className="flex items-center gap-5">
          <button className="text-sm font-medium">Accedi</button>

          <button className="rounded-full bg-[#356f70] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285b5c]">
            Inizia gratis
          </button>
        </nav>
      </header>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-24 text-center">
        <div className="mb-6 rounded-full border border-[#d8d2c7] bg-white px-4 py-2 text-sm text-[#667575]">
          Contenuti dimostrativi, non sostituiscono consulenza professionale
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Apri e gestisci il tuo affitto breve, un passo alla volta.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667575]">
          HostPilot ti guida tra normativa, adempimenti e gestione quotidiana,
          mostrandoti cosa fare, quando farlo e dove trovare la fonte ufficiale.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-[#356f70] px-7 py-4 font-semibold text-white transition hover:bg-[#285b5c]">
            Inizia gratis
          </button>

          <Link
  href="/guida"
  className="rounded-full border border-[#c9c3b8] bg-white px-7 py-4 font-semibold transition hover:bg-[#feee9d]"
>
  Scopri come funziona
</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
          
            className="rounded-3xl border border-[#ded8cd] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dceceb] text-xl">
              {feature.icon}
            </div>

            <h2 className="text-xl font-semibold">{feature.title}</h2>

            <p className="mt-3 leading-7 text-[#667575]">
              {feature.description}
            </p>
          </article>
        ))}
      </section>
<section className="mx-auto max-w-6xl px-6 pb-24">
  <div className="mb-10 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#356f70]">
      Tutto in un unico posto
    </p>

    <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
      Dalla normativa alla gestione quotidiana
    </h2>

    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#667575]">
      HostPilot raccoglie le informazioni essenziali e ti mostra sempre il
      prossimo passo da compiere.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-3">
    <article className="rounded-3xl border border-[#ded8cd] bg-white p-7 shadow-sm cursor-pointer hover:shadow-lg transition">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dceceb] text-xl font-semibold text-[#356f70]">
        N
      </div>

      <h3 className="text-xl font-semibold">Normativa guidata</h3>

      <p className="mt-3 leading-7 text-[#667575]">
        Scopri quali pratiche possono essere necessarie in base alla Regione,
        al Comune e al tipo di struttura.
      </p>

      <p className="mt-5 text-sm font-semibold text-[#356f70]">
        Con fonti ufficiali e data di verifica
      </p>
    </article>

    <article className="rounded-3xl border border-[#ded8cd] bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dceceb] text-xl font-semibold text-[#356f70]">
        AI
      </div>

      <h3 className="text-xl font-semibold">Assistente semplice</h3>

      <p className="mt-3 leading-7 text-[#667575]">
        Fai domande su CIN, SUAP, tassa di soggiorno, ospiti e gestione. Ricevi
        spiegazioni chiare, senza linguaggio burocratico.
      </p>

      <p className="mt-5 text-sm font-semibold text-[#356f70]">
        Risposte da controllare sulla fonte
      </p>
    </article>

    <article className="rounded-3xl border border-[#ded8cd] bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dceceb] text-xl font-semibold text-[#356f70]">
        ✓
      </div>

      <h3 className="text-xl font-semibold">Checklist e scadenze</h3>

      <p className="mt-3 leading-7 text-[#667575]">
        Tieni sotto controllo ciò che hai completato, quello che manca e le
        attività da svolgere nei prossimi giorni.
      </p>

      <p className="mt-5 text-sm font-semibold text-[#356f70]">
        Un passo alla volta, senza dimenticare nulla
      </p>
    </article>
  </div>
</section>
      
      <footer className="border-t border-[#ded8cd] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#667575] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 HostPilot</span>

          <div className="flex gap-5">
            <button>Privacy</button>
            <button>Termini</button>
          </div>
        </div>
      </footer>
    </main>
  );
}