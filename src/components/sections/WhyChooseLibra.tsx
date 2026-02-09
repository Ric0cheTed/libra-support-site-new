'use client';

export default function WhyChooseLibra() {
  const items = [
    {
      title: 'Continuity & reliability',
      body:
        'Managed rotas with consistent carers where possible, plus cover for sickness and holidays so visits stay dependable.',
    },
    {
      title: 'Professional & regulated',
      body:
        'CQC-regulated care with trained, DBS-checked staff, medication support, care planning and management oversight.',
    },
    {
      title: 'Local & community-led',
      body:
        'A local team focused on person-centred support, inclusivity and strong community connections across our areas.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Why Choose Libra</h2>
          <p className="mt-2 text-gray-700">
            Trusted, relationship-based care designed to keep people safe, independent and supported at home.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-black/10 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{it.title}</h3>
              <p className="text-gray-700 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
