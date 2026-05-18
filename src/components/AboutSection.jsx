import React from 'react'
import { BUSINESS } from '../config/business'

export default function AboutSection() {
  return (
    <section id="onas" className="w-full bg-paper text-black py-fluid-md">
      <div className="max-w-[1800px] mx-auto px-fluid-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-accent-cyan text-xs font-semibold tracking-[0.22em] uppercase">O nas</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight">
              {BUSINESS.name}
            </h2>
            <p className="mt-5 text-black/70 leading-relaxed max-w-2xl">
              Sklep z e-papierosami i akcesoriami na Ursynowie w Warszawie. Na miejscu znajdziesz też dział Chinese Market.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold">
              <span className="px-3 py-2 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-100">
                Przyjazne dla osób LGBTQ+
              </span>
              <span className="px-3 py-2 rounded-full bg-slate-100 text-slate-900 border border-slate-200">
                Firma należąca do kobiety
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-xs tracking-[0.22em] uppercase text-black/50">Asortyment</div>
                <div className="mt-2 font-black text-lg">E-papierosy i liquidy</div>
                <div className="mt-2 text-sm text-black/70">Sprzęt, smaki i akcesoria dobrane pod potrzeby.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-xs tracking-[0.22em] uppercase text-black/50">Chinese Market</div>
                <div className="mt-2 font-black text-lg">Drobiazgi na miejscu</div>
                <div className="mt-2 text-sm text-black/70">Wpadnij po dodatki i szybkie zakupy przy okazji.</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs tracking-[0.22em] uppercase text-black/50">Opinie</div>
                  <div className="mt-2 font-black text-2xl tracking-tight">
                    {BUSINESS.googleRating.rating.toFixed(1)}/5
                  </div>
                  <div className="mt-1 text-sm text-black/60">
                    na podstawie {BUSINESS.googleRating.reviewsCount} opinii w Google
                  </div>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent-deep/15 to-accent-cyan/20 border border-black/5" />
              </div>

              <div className="mt-8 grid gap-4">
                {BUSINESS.featuredReviews.map((r) => (
                  <div key={r.author} className="rounded-2xl border border-black/10 bg-paper p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-black">{r.author}</div>
                      <div className="text-xs tracking-[0.18em] uppercase text-accent-cyan font-semibold">
                        {'★'.repeat(r.stars)}
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-black/70 leading-relaxed">{r.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/shop"
                  className="h-12 inline-flex items-center justify-center px-7 rounded-2xl bg-ink text-white font-semibold tracking-[0.18em] uppercase text-[12px] hover:bg-accent-deep transition-colors shadow-cyan-glow"
                >
                  Przejdź do sklepu
                </a>
                <a
                  href="/#kontakt"
                  className="h-12 inline-flex items-center justify-center px-7 rounded-2xl border border-black/10 bg-white font-semibold tracking-[0.18em] uppercase text-[12px] hover:border-accent-cyan/60 transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
