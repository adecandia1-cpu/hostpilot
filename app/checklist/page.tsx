export default function ChecklistPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-[#203434]">
          La tua checklist
        </h1>

        <p className="mt-4 text-lg text-[#667575]">
          Qui compariranno tutti gli adempimenti personalizzati in base alle
          risposte fornite.
        </p>

        <div className="mt-10 rounded-2xl border bg-white p-6">
          <h2 className="text-xl font-semibold">
            Prossimamente
          </h2>

          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>SCIA o CILA se necessaria</li>
            <li>CIN</li>
            <li>Registrazione al Comune</li>
            <li>Tassa di soggiorno</li>
            <li>Comunicazione degli ospiti</li>
          </ul>
        </div>
      </div>
    </main>
  );
}