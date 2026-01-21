import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/recycling-warehouse-welcome.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4">
          {/* Welcome Banner */}
          <div className="bg-secondary text-white text-center px-8 py-4 rounded-lg mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">Welcome To Drop Me !</h1>
            <p className="text-sm mt-1">Sign In & Earn Rewards</p>
          </div>

          {/* Sign Up Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8 w-full max-w-2xl">
            <h2 className="text-2xl font-serif text-primary text-center mb-8">Join Us</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-red-500 mt-1">First Name is a required field!!!</p>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-red-500 mt-1">Last Name must be no more than 11 characters</p>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">Gender</label>
                  <div className="space-y-2 pt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" className="text-primary" />
                      <span className="text-sm">Male</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="gender" className="text-primary" />
                      <span className="text-sm">Female</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">Country</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Select Country</option>
                    <option>Egypt</option>
                    <option>Saudi Arabia</option>
                    <option>UAE</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-red-500 mt-1">Email is a required field</p>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <p className="text-xs text-red-500 mt-1">Password must be at least 8 characters</p>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
               join
              </button>

              <p className="text-center text-sm text-muted">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Login
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
