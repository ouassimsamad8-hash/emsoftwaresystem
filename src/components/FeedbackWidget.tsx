import { useState } from 'react';
import { Button } from './Button';

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the feedback to a backend
    console.log('Feedback submitted:', { feedback, email });
    
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFeedback('');
      setEmail('');
    }, 2000);
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_8px_32px_rgba(79,70,229,0.4)] transition-all hover:scale-110 hover:shadow-[0_12px_48px_rgba(79,70,229,0.6)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Donnez-nous votre avis"
        title="Donnez-nous votre avis"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-surface/95 p-8 shadow-[0_24px_80px_rgba(8,15,40,0.8)] backdrop-blur">
            {!submitted ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-heading">Votre avis nous intéresse</h2>
                  <p className="mt-2 text-sm text-muted">
                    Partagez vos impressions sur notre site pour nous aider à l'améliorer.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-body">
                      Votre message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      required
                      rows={4}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-background/50 px-4 py-3 text-body placeholder-muted transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Dites-nous ce que vous pensez..."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-body">
                      Votre email (optionnel)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-background/50 px-4 py-3 text-body placeholder-muted transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="vous@exemple.com"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 rounded-2xl border border-white/10 bg-surface/50 px-6 py-3 text-body transition-colors hover:bg-surface hover:text-heading focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-heading">Merci pour votre retour !</h3>
                <p className="mt-2 text-sm text-muted">Votre avis nous aide à améliorer nos services.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
