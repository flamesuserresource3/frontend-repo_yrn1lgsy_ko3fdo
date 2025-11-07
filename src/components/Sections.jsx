import { Code2, Boxes, Server, GitBranch, Docker, Rabbit, Database, Terminal, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      {/* About Me */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            Saya seorang programmer yang terbiasa membangun layanan backend, merancang API yang efisien,
            serta melakukan integrasi antar-sistem. Fokus pada reliabilitas, keamanan, dan performa.
            Senang bekerja dengan arsitektur berbasis event, automasi CI/CD, dan dokumentasi yang rapi.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400" />
            <div>
              <p className="text-sm text-slate-500">Role</p>
              <p className="font-semibold">Software Engineer / Programmer</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2"><Server className="h-4 w-4" /> Backend Services</li>
            <li className="flex items-center gap-2"><Code2 className="h-4 w-4" /> API Design & Documentation</li>
            <li className="flex items-center gap-2"><Boxes className="h-4 w-4" /> System Integration</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const skills = [
    { name: 'Node.js', icon: <Code2 className="h-5 w-5" /> },
    { name: 'Go', icon: <Terminal className="h-5 w-5" /> },
    { name: 'PHP', icon: <Code2 className="h-5 w-5" /> },
    { name: 'RabbitMQ', icon: <Rabbit className="h-5 w-5" /> },
    { name: 'Docker', icon: <Docker className="h-5 w-5" /> },
    { name: 'Git', icon: <GitBranch className="h-5 w-5" /> },
    { name: 'PostgreSQL', icon: <Database className="h-5 w-5" /> },
    { name: 'Linux', icon: <Terminal className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16">
      {/* Skills */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Skills</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400 text-white">
              {s.icon}
            </div>
            <span className="font-medium text-slate-800 dark:text-slate-100">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    { title: 'PPOB Platform', desc: 'Sistem pembayaran tagihan & top-up dengan multi-provider.' },
    { title: 'Payment Integration', desc: 'Integrasi payment gateway (callbacks, signature, settlement).' },
    { title: 'REST API', desc: 'Arsitektur RESTful, auth, rate limit, dan monitoring.' },
    { title: 'WebSocket Mutation', desc: 'Realtime update & streaming data untuk dashboard.' },
    { title: 'Blockchain E-Voting', desc: 'Proof-of-concept e-voting berbasis smart contract.' },
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
      {/* Projects */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{p.desc}</p>
              </div>
              <div className="ml-4 h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-sky-400" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
      {/* Contact */}
      <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-sky-500 p-[1px] shadow-lg">
        <div className="rounded-2xl bg-white dark:bg-slate-950 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Terbuka untuk kolaborasi, freelance, dan diskusi teknis.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:farhan@example.com" className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-600"><Mail className="h-5 w-5" /></span>
              <span className="font-medium">farhan@example.com</span>
            </a>
            <a href="https://github.com/username" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-800 text-white"><Github className="h-5 w-5" /></span>
              <span className="font-medium">github.com/username</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} Farhan — Built with a clean, modern, and professional touch.
      </p>
    </footer>
  );
}
