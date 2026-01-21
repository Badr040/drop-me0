import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/recycling-warehouse-with-bottles.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
          {/* Welcome Banner */}
          <div className="bg-secondary text-white text-center px-8 py-4 rounded-lg mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Welcome Back !</h1>
            <p className="text-sm mt-1">Sign In & Earn Rewards</p>
          </div>

          {/* Login Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-serif text-primary text-center mb-8">Join Us</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-foreground mb-2">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="text-right">
                <Link href="#" className="text-sm text-muted hover:text-primary">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Join Us
              </button>

              <p className="text-center text-sm text-muted">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline font-medium">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
