"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RewardsPage() {
  const [selectedAmount, setSelectedAmount] = useState<string>("100");
  const [selectedWallet, setSelectedWallet] = useState<string>("wallet");
  const [showBankForm, setShowBankForm] = useState(false);
  const [showWalletForm, setShowWalletForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConvert = () => {
    if (selectedWallet === "bank") {
      setShowBankForm(true);
    } else {
      setShowWalletForm(true);
    }
  };

  const handleSubmit = () => {
    setShowBankForm(false);
    setShowWalletForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">
            Convert Your Points to Money
          </h1>

          {/* Points Balance Card */}
          <div className="bg-card rounded-2xl shadow-sm p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-lg">Your Points Balance</h2>
              <Button className="contain-paint">History</Button>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-primary">
                600 Points
              </span>
              <p className="text-sm text-muted mt-1">
                Equivalent Value: 60 EGP
              </p>
            </div>
          </div>

          {/* Conversion Options */}
          <div className="bg-card rounded-2xl shadow-sm p-6 max-w-md mx-auto mb-8">
            <h3 className="font-semibold mb-4">Choose Amount to convert</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="amount"
                  value="100"
                  checked={selectedAmount === "100"}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">100 Points = 10 EGP</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="amount"
                  value="custom"
                  checked={selectedAmount === "custom"}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">Custom Amount</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="amount"
                  value="500"
                  checked={selectedAmount === "500"}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">500 Points = 50 EGP</span>
              </label>
              <div>
                {selectedAmount === "custom" && (
                  <input
                    type="text"
                    placeholder="enter your amount"
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                  />
                )}
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="amount"
                  value="1000"
                  checked={selectedAmount === "1000"}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">1000 Points = 100 EGP</span>
              </label>
            </div>

            <h3 className="font-semibold mb-4">Select Wallet</h3>
            <div className="space-y-2 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="wallet"
                  value="wallet"
                  checked={selectedWallet === "wallet"}
                  onChange={(e) => setSelectedWallet(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">Wallet Balance</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="wallet"
                  value="bank"
                  checked={selectedWallet === "bank"}
                  onChange={(e) => setSelectedWallet(e.target.value)}
                  className="accent-primary"
                />
                <span className="text-sm">Bank Transfer</span>
              </label>
            </div>

            <button
              onClick={handleConvert}
              className="w-full bg-secondary text-white py-3 rounded-full font-medium hover:bg-secondary-light transition-colors"
            >
              Convert
            </button>
          </div>

          {/* Transfer Forms & Success Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bank Transfer Form */}
            {showBankForm && (
              <div className="bg-card rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-center mb-4">
                  Bank Transfer
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-lg"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
                  >
                    Convert
                  </button>
                </form>
              </div>
            )}

            {/* Wallet Transfer Form */}
            {showWalletForm && (
              <div className="bg-card rounded-2xl shadow-sm p-6">
                <h3 className="font-semibold text-center mb-4">
                  Wallet Transfer
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1">
                      Wallet Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-lg"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
                  >
                    Convert
                  </button>
                </form>
              </div>
            )}

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-card rounded-2xl shadow-sm p-6 text-center">
                <h3 className="font-semibold mb-4">
                  {selectedWallet === "bank"
                    ? "Bank Transfer"
                    : "Wallet Transfer"}
                </h3>
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-secondary font-semibold mb-2">
                  Conversion Successful
                </p>
                <p className="text-sm text-muted">
                  Your points have been converted successfully.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
