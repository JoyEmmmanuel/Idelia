import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-idelia-cream flex flex-col items-center justify-center px-6">
      {/* THE VISUAL SPINE - IDELIA OLIVE LINE */}
      <div className="w-px h-24 bg-idelia-olive/20 mb-12"></div>
      
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <header className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.8em] text-idelia-olive font-bold">
            Acquisition Secured
          </span>
          <h1 className="text-5xl md:text-6xl font-serif italic text-idelia-dark tracking-tighter">
            Thank You.
          </h1>
        </header>

        <div className="space-y-6 text-sm font-light text-idelia-dark/70 leading-relaxed">
          <p>
            Your selection has been successfully registered in the IDELIA archive. 
            A confirmation of your acquisition has been dispatched to your email.
          </p>
          <p className="italic">
            IDELIA is currently preparing your unit for its debut.
          </p>
        </div>

        <div className="pt-12">
          <Link 
            href="/" 
            className="inline-block border border-idelia-olive/30 px-12 py-4 text-[10px] uppercase tracking-[0.4em] text-idelia-dark hover:bg-idelia-olive hover:text-idelia-cream transition-all duration-700"
          >
            Back to IDELIA
          </Link>
        </div>
      </div>

     
    </main>
  )
}