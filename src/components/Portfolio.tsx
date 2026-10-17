import Image from "next/image";
import Link from "next/link";
import {
  about, awards, career, contact, developer, numbers, performances, profile, publications, ui, video,
  type Lang, type T,
} from "@/content/portfolio";
import Ornament from "./Ornament";
import ListenButton from "./ListenButton";
import VideoEmbed from "./VideoEmbed";
import TypingChip from "./TypingChip";
import { Icon, type IconName } from "./Icons";
import { Instrument, INSTRUMENTS } from "./Instruments";

const isDev = process.env.NODE_ENV === "development";
const wa = (msg: string) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;

function Heading({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 sm:mb-8">
      {eyebrow && <p className="smallcaps mb-2 text-sm font-semibold text-gold">{eyebrow}</p>}
      <h2 className="text-2xl text-ink sm:text-4xl">{children}</h2>
      <Ornament className="ml-0 mt-3" />
    </div>
  );
}

function DevNote({ text }: { text: string }) {
  if (!isDev) return null;
  return <p className="rounded-2xl border border-dashed border-gold bg-white/60 p-5 text-sm text-muted">{text}</p>;
}

export default function Portfolio({ lang }: { lang: Lang }) {
  const t = (x: T) => x[lang];
  const other: Lang = lang === "ta" ? "en" : "ta";
  const switchHref = lang === "ta" ? "/en" : "/";
  const showAwards = awards.length > 0 || isDev;
  // Sinniah is his father's name; Thurairajah is his own name
  const [first, ...rest] = t(profile.name).split(" ");
  const own = rest.join(" ");

  const nav: { id: string; label: T; icon: IconName }[] = [
    { id: "about", label: ui.nav.about, icon: "user" },
    { id: "career", label: ui.nav.career, icon: "briefcase" },
    ...(showAwards ? [{ id: "awards", label: ui.nav.awards, icon: "award" as IconName }] : []),
    { id: "performances", label: ui.nav.performances, icon: "music" },
    { id: "publications", label: ui.nav.publications, icon: "book" },
  ];

  const contactRows: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: "phone", label: t(ui.call), value: contact.phone, href: `tel:+${contact.whatsapp}` },
    { icon: "pin", label: lang === "ta" ? "முகவரி" : "Address", value: t(contact.address) },
    { icon: "drum", label: t(ui.visitSchool), value: t(contact.school.name), href: contact.school.url },
    { icon: "play", label: "YouTube", value: "@nallaikuruksheththiram", href: contact.youtube },
    { icon: "user", label: "Facebook", value: t(profile.name), href: contact.facebook },
  ];

  return (
    <>
      {/* ───────── Floating pill menu ───────── */}
      <header className="sticky top-3 z-40 px-3 sm:top-4 sm:px-6">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 overflow-hidden rounded-full border border-gold/40 bg-gradient-to-r from-[#f3e8cc] via-[#ead7a8] to-[#f3e8cc] p-2 shadow-lg shadow-gold/20 sm:pl-3">
          {/* light outlines of the instruments he accompanies, across the bar */}

          <a href="#top" className="relative flex min-w-0 shrink-0 items-center gap-2.5">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80">
              <Image src={profile.portrait} alt="" fill sizes="40px" className="object-cover object-top" />
            </span>
            <span className="truncate font-display text-base font-semibold text-ink sm:text-lg">{own}</span>
          </a>
          {/* light outlines of the instruments he accompanies, in the space between name and menu */}
          <div className="pointer-events-none hidden min-w-0 flex-1 items-center justify-around overflow-hidden px-2 text-maroon/40 md:flex" aria-hidden="true">
            {INSTRUMENTS.map((n) => <Instrument key={n} name={n} className="h-9 w-16 shrink" />)}
          </div>
          <nav aria-label={lang === "ta" ? "பகுதிகள்" : "Sections"} className="relative shrink-0">
            <ul className="flex items-center gap-0.5 sm:gap-1">
              {nav.map((n) => (
                <li key={n.id} className="hidden sm:block">
                  <a href={`#${n.id}`} title={t(n.label)} className="flex h-10 w-10 items-center justify-center rounded-full text-ink/80 hover:bg-white/60 hover:text-ink">
                    <Icon name={n.icon} />
                    <span className="sr-only">{t(n.label)}</span>
                  </a>
                </li>
              ))}
              <li>
                <Link href={switchHref} lang={other} className="flex h-10 items-center rounded-full px-3 text-sm font-semibold text-ink hover:bg-white/60">
                  {t(ui.switchTo)}
                </Link>
              </li>
              <li>
                <a href="#contact" title={t(ui.nav.contact)} className="flex h-10 w-12 items-center justify-center rounded-full bg-ink text-ivory hover:bg-maroon sm:w-14">
                  <Icon name="mail" />
                  <span className="sr-only">{t(ui.nav.contact)}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="relative -mt-16 overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,#f1e3bf_0%,transparent_55%)]" aria-hidden="true" />
          <svg className="pointer-events-none absolute -right-40 top-10 h-[46rem] opacity-[0.07]" viewBox="0 0 200 200" aria-hidden="true">
            {[96, 80, 64, 48, 32].map((r) => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#5a1626" strokeWidth="0.5" />)}
          </svg>

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
            <div className="rise">
              {lang === "ta" ? (
                /* Tamil: full name on one line, both words the same size */
                <h1 className="text-[1.75rem] text-ink min-[400px]:text-4xl sm:whitespace-nowrap sm:text-5xl xl:text-[3.4rem]">
                  {first}{" "}
                  <span className="bg-gradient-to-r from-[#8a6a2a] via-gold to-[#d9b867] bg-clip-text pb-2 text-transparent">{own}</span>
                </h1>
              ) : (
                <h1 className="text-5xl text-ink sm:text-6xl lg:text-7xl">
                  <span className="block text-[0.55em] leading-tight text-ink/80">{first}</span>
                  <span className="block bg-gradient-to-r from-[#8a6a2a] via-gold to-[#d9b867] bg-clip-text pb-2 text-transparent">{own}</span>
                </h1>
              )}
              <p lang={other} className="mt-2 font-display text-xl text-muted">{profile.name[other]}</p>

              <p className="mt-5 text-lg leading-snug text-ink sm:text-xl">
                {lang === "ta" ? (
                  <><span className="text-gold">மிருதங்கக் கலைஞர்</span>, ஆசிரியர் மற்றும் NCOMS <span className="text-gold">பிரதம பரீட்சகர்</span></>
                ) : (
                  <><span className="text-gold">Mridangam Artist</span>, Teacher and NCOMS <span className="text-gold">Chief Examiner</span></>
                )}
              </p>

              <p className="mt-6 max-w-xl text-lg text-muted">{t(about.intro)}</p>

              <div className="mt-8 flex max-w-xl items-start gap-4 rounded-2xl border border-gold/40 bg-[#f4ead4] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-maroon shadow-sm">
                  <Icon name="drum" />
                </span>
                <p className=" text-[0.97rem] leading-relaxed">
                  {lang === "ta" ? "யாழ்ப்பாணத்தில் உள்ள " : "I am the guru of "}
                  <a href={contact.school.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                    {t(contact.school.name)}
                  </a>
                  {lang === "ta"
                    ? " பாடசாலையின் குருவாக, ஆரம்ப நிலை முதல் அரங்கேற்றம் வரை மிருதங்கம் கற்பிக்கிறேன்; வருடம்தோறும் ‘தண்ணுமைப் பிரவாகம்’ நிகழ்வை நடத்துகிறேன்."
                    : ", Jaffna, where I teach mridangam from the first lesson to arangetram and present the annual Thannumai Pravaagam."}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="rounded-full bg-ink px-7 py-3.5 font-semibold text-ivory shadow-lg shadow-ink/20 hover:bg-maroon">
                  {t(ui.contact)}
                </a>
                {profile.audio && <ListenButton src={profile.audio} label={t(ui.listen)} pauseLabel={t(ui.pause)} />}
              </div>
            </div>

            {/* photo card with a tilted backdrop and floating labels */}
            <div className="rise-2 relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 translate-x-5 translate-y-4 rotate-[4deg] rounded-[2rem] bg-gradient-to-br from-maroon via-maroon-soft to-gold" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl">
                <Image src={profile.portrait2} alt={t(profile.name)} fill priority sizes="(max-width: 1024px) 90vw, 30rem" className="object-cover object-top" />
              </div>
              <TypingChip text={lang === "ta" ? "வணக்கம்" : "Vanakkam"} className="absolute -top-5 right-2 sm:-right-6" />
              <div className="absolute -bottom-6 -left-2 rounded-2xl border border-gold/30 bg-white px-5 py-3 shadow-xl sm:-left-8">
                <p className=" font-semibold text-ink">{lang === "ta" ? "46 வருட இசைப் பயணம்" : "46 years of mridangam"}</p>
                <p className=" text-sm text-muted">{lang === "ta" ? "5500+ மாணவர்கள் ✓" : "5,500+ students ✓"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Numbers ───────── */}
        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {numbers.map((n) => (
              <div key={n.value + n.label.en} className="rounded-2xl border border-gold/25 bg-white p-5 shadow-sm">
                <dd className="font-display text-3xl text-maroon">{n.value}</dd>
                <dt className="mt-1 text-sm leading-snug text-muted">{t(n.label)}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* ───────── About ───────── */}
        <section id="about" className="scroll-mt-28 border-t border-gold/30 bg-white px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow={lang === "ta" ? "அறிமுகம்" : "Introduction"}>{t(ui.nav.about)}</Heading>
          </div>
          {/* photo and text side by side; the text is centred against the photo */}
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
            <figure className="relative hidden aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] border-4 border-white shadow-xl ring-1 ring-gold/50 lg:block">
              <Image src={profile.portrait} alt={t(profile.name)} fill sizes="24rem" className="object-cover object-top" />
            </figure>
            <div className="space-y-5">
              <p className=" font-display text-lg leading-relaxed text-maroon sm:text-xl">{t(about.intro)}</p>
              {about.paragraphs.map((p, i) => <p key={i}>{t(p)}</p>)}
            </div>
          </div>
        </section>

        {/* ───────── Career ───────── */}
        <section id="career" className="scroll-mt-28 bg-paper/60 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow={t(ui.nav.career)}>{t(ui.career)}</Heading>
            {career.length === 0 ? <DevNote text={t(ui.devNote)} /> : (
              <ol className="grid gap-4 md:grid-cols-2">
                {career.map((c, i) => (
                  <li key={i} className="flex gap-4 rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4ead4] text-maroon"><Icon name="briefcase" /></span>
                    <div className="min-w-0">
                      {t(c.years) && <p className=" text-sm font-semibold text-gold">{t(c.years)}</p>}
                      <h3 className="text-lg text-ink sm:text-xl">{t(c.role)}</h3>
                      <p className=" text-muted">{t(c.place)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {/* ───────── Awards ───────── */}
        {showAwards && (
          <section id="awards" className="scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <Heading eyebrow={t(ui.nav.awards)}>{t(ui.awards)}</Heading>
              {awards.length === 0 ? <DevNote text={t(ui.devNote)} /> : (
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {awards.map((a, i) => (
                    <li key={i} className="rounded-2xl border border-gold/40 bg-gradient-to-b from-white to-[#f7efdc] p-6 shadow-sm">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-white"><Icon name="award" /></span>
                      <p className="mt-4 text-sm font-semibold text-gold">{a.year}</p>
                      <h3 className="text-lg text-ink sm:text-xl">{t(a.title)}</h3>
                      <p className=" text-muted">{t(a.by)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* ───────── Performances ───────── */}
        <section id="performances" className={`scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 ${showAwards ? "bg-paper/60" : ""}`}>
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow={t(ui.nav.performances)}>{t(ui.performances)}</Heading>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {performances.map((p, i) => (
                <li key={i} className="rounded-2xl border border-gold/25 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4ead4] text-maroon"><Icon name="music" /></span>
                  <p className="mt-4">{t(p)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Publications ───────── */}
        <section id="publications" className={`scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 ${showAwards ? "" : "bg-paper/60"}`}>
          <div className="mx-auto max-w-6xl">
            <Heading eyebrow={t(ui.nav.publications)}>{t(ui.publications)}</Heading>
            <ul className="grid gap-5 md:grid-cols-3">
              {publications.map((b) => (
                <li key={b.title.en} className="flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-sm">
                  <div className="bg-gradient-to-br from-maroon to-maroon-soft px-6 py-6 text-ivory">
                    <p lang={other} className=" text-sm text-gold-light">{b.title[other]}</p>
                    <h3 className="mt-1 text-xl sm:text-2xl">{t(b.title)}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1">{t(b.text)}</p>
                    <div className="mt-6">
                      {b.available ? (
                        <a href={wa(t(ui.orderMessage).replace("{title}", t(b.title)))} target="_blank" rel="noopener noreferrer"
                          className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-maroon">
                          {t(ui.order)}
                        </a>
                      ) : (
                        <span className="inline-block rounded-full bg-paper px-4 py-2 text-sm text-muted">{t(ui.notAvailable)}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── With his students ───────── */}
        <section className="px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink text-ivory shadow-2xl">
            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="smallcaps text-sm font-semibold text-gold-light">{t(ui.students)}</p>
                <h2 className="mt-2 text-2xl sm:text-3xl">{t(video.title)}</h2>
                <a href={contact.school.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full border border-gold/60 px-5 py-2.5 text-gold-light hover:bg-gold/10">
                  {t(ui.visitSchool)}
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <VideoEmbed id={video.youtubeId} title={t(video.title)} playLabel={t(ui.watch)} />
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="scroll-mt-28 bg-paper/60 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <Heading eyebrow={t(ui.nav.contact)}>{t(ui.contact)}</Heading>
              <p className=" text-lg text-muted">{t(ui.contactText)}</p>
              <a href={wa(t(ui.hello))} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1f8f4e] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#1f8f4e]/20 hover:bg-[#187a42]">
                <Icon name="whatsapp" /> {t(ui.whatsapp)}
              </a>
            </div>
            <ul className="space-y-4 lg:pt-28">
              {contactRows.map((r) => (
                <li key={r.label} className="flex items-center gap-4 rounded-2xl border border-gold/25 bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f4ead4] text-maroon"><Icon name={r.icon} /></span>
                  <div className="min-w-0">
                    <p className=" text-sm text-muted">{r.label}</p>
                    {r.href ? (
                      <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="break-words font-semibold text-ink hover:text-maroon">{r.value}</a>
                    ) : <p className=" font-semibold text-ink">{r.value}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ivory/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm sm:px-6">
          <span>© {new Date().getFullYear()} {t(profile.name)}. {t(ui.rights)}</span>
          <span>
            {t(ui.developedBy)}{" "}
            <a href={developer.url} target="_blank" rel="noopener" className="text-gold-light hover:text-ivory">{developer.name}</a>
          </span>
        </div>
      </footer>
    </>
  );
}
