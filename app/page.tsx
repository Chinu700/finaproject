import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen font-sans bg-slate-900 overflow-hidden">
      {/* Background gradients for premium glassmorphism effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px] pointer-events-none" />
      <LoginForm />
    </main>
  );
}
