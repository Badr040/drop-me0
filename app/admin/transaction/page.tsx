"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  Filter,
  Wallet,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function TransactionPage() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      userName: "Ahmed Ali",
      amount: 5400.0,
      account: "01288334455",
      type: "InstaPay",
      date: "2026/01/29",
      status: "Pending",
    },
    {
      id: 2,
      userName: "Sara Mahmoud",
      amount: 12200.5,
      account: "01023456789",
      type: "E-Wallet",
      date: "2026/01/28",
      status: "Completed",
    },
    {
      id: 3,
      userName: "Mohamed Hassan",
      amount: 3150.75,
      account: "01122334455",
      type: "E-Wallet",
      date: "2026/01/27",
      status: "Failed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
      val,
    );
  };

  const companyBalance = 150000.0;

  const totalSettled = useMemo(() => {
    return transactions
      .filter((t) => t.status === "Completed")
      .reduce((sum, current) => sum + current.amount, 0);
  }, [transactions]);

  const totalRequired = useMemo(() => {
    return transactions
      .filter((t) => t.status === "Pending")
      .reduce((sum, current) => sum + current.amount, 0);
  }, [transactions]);

  const filteredData = useMemo(() => {
    return transactions.filter((tx) => {
      const searchContent =
        `${tx.userName} ${tx.account} ${tx.date}`.toLowerCase();
      const matchesSearch = searchContent.includes(searchTerm.toLowerCase());
      const matchesFilter =
        filterStatus === "All" || tx.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [transactions, searchTerm, filterStatus]);

  const handleAction = (id: number, newStatus: "Completed" | "Failed") => {
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === id ? { ...tx, status: newStatus } : tx)),
    );
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-black text-[#0f172a] tracking-tight italic uppercase">
          Transactions Control
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#1e293b] px-6 py-5 rounded-4xl shadow-lg border border-slate-700">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
            Company Balance
          </p>
          <h3 className="text-2xl font-black text-white tracking-tighter italic flex items-baseline gap-1">
            {formatCurrency(companyBalance)}{" "}
            <span className="text-[10px] text-slate-500 not-italic">EGP</span>
          </h3>
        </div>

        <div className="bg-white px-6 py-5 rounded-4xl shadow-sm border border-slate-200 border-l-4 border-l-emerald-500">
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1 italic">
            Total Settled
          </p>
          <h3 className="text-2xl font-black text-[#0f172a] tracking-tighter italic flex items-baseline gap-1">
            {formatCurrency(totalSettled)}{" "}
            <span className="text-[10px] text-slate-300 not-italic">EGP</span>
          </h3>
        </div>

        <div className="bg-white px-6 py-5 rounded-4xl shadow-sm border border-slate-200 border-l-4 border-l-rose-500">
          <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1 italic">
            Required to Pay
          </p>
          <h3 className="text-2xl font-black text-[#0f172a] tracking-tighter italic flex items-baseline gap-1">
            {formatCurrency(totalRequired)}{" "}
            <span className="text-[10px] text-slate-300 not-italic">EGP</span>
          </h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="relative w-full md:w-64">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none text-sm font-bold text-slate-700 focus:border-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative w-full md:w-44">
          <Filter
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={14}
          />
          <select
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl outline-none text-xs font-black text-slate-600 appearance-none cursor-pointer"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-4xl shadow-xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4 text-center">Date</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right pr-8">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((tx) => (
                <tr
                  key={tx.id}
                  className="transition-colors hover:bg-slate-50/50 italic"
                >
                  <td className="px-6 py-6 font-black text-[#0f172a] text-base uppercase tracking-tight">
                    {tx.userName}
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-[11px] font-bold text-slate-500 border border-slate-100">
                      <Calendar size={12} className="text-blue-500" /> {tx.date}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-1">
                      {/* Destination - Phone only now */}
                      <span className="font-black text-[#1e3a8a] text-xl font-mono tracking-tighter italic">
                        {tx.account}
                      </span>
                      <span
                        className={`w-fit text-[8px] font-black px-2 py-0.5 rounded border uppercase ${tx.type === "InstaPay" ? "text-purple-700 border-purple-200 bg-purple-50" : "text-rose-700 border-rose-200 bg-rose-50"}`}
                      >
                        {tx.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-black text-[#0f172a] text-xl tracking-tighter italic">
                    {/* EGP added here next to amount */}
                    {formatCurrency(tx.amount)}{" "}
                    <span className="text-[10px] text-slate-300 not-italic">
                      EGP
                    </span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span
                      className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border ${tx.status === "Completed" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : tx.status === "Pending" ? "bg-orange-50 text-orange-700 border-orange-100" : "bg-rose-50 text-rose-700 border-rose-100"}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right pr-8">
                    {tx.status === "Pending" ? (
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleAction(tx.id, "Completed")}
                          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl text-[10px] font-black shadow-md transition-all uppercase active:scale-95"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(tx.id, "Failed")}
                          className="bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600 px-5 py-2.5 rounded-xl text-[10px] font-black border border-slate-200 transition-all uppercase active:scale-95"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-1 text-slate-300 font-black text-[10px] uppercase pr-4 tracking-widest">
                        {tx.status === "Completed" ? (
                          <CheckCircle size={12} className="text-emerald-300" />
                        ) : (
                          <Clock size={12} className="text-slate-200" />
                        )}
                        {tx.status === "Failed" ? "Closed" : "Settled"}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
