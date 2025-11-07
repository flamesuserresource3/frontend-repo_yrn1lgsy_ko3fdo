import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 opacity-90" />

      {/* Spline 3D scene */}
      <div className="relative h-[520px] w-full">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft overlay to boost contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 -mt-40 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-8">
          <img
            src="https://api.dicebear.com/8.x/avataaars/svg?seed=Farhan&backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50"
            alt="Farhan avatar"
            className="h-32 w-32 md:h-40 md:w-40 rounded-full ring-4 ring-white/60 shadow-xl"
          />
          <div>
            <span className="inline-flex items-center rounded-full bg-white/80 text-indigo-700 backdrop-blur px-3 py-1 text-sm font-medium shadow">
              Software Engineer / Programmer
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">Farhan</h1>
            <p className="mt-3 max-w-2xl text-white/90">
              I build robust backends, APIs, and system integrations with a clean, modern touch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-white/90 text-indigo-700 px-4 py-2 font-semibold shadow hover:bg-white transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-700/90 text-white px-4 py-2 font-semibold shadow hover:bg-indigo-600 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
