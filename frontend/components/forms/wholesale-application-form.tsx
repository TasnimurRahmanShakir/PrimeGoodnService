"use client";

import React, { useState } from "react";
import { useAdminStore } from "@/lib/admin-store";
import { Icon } from "@/components/icons";

const BUSINESS_TYPES = ["LLC", "Corporation", "Sole Proprietorship", "Partnership", "Other"];

export function WholesaleApplicationForm() {
  const { addWholesaleApplication } = useAdminStore();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    taxId: "",
    volume: "",
    businessType: "",
    yearsInBusiness: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWholesaleApplication(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20 px-8 bg-white rounded-[2rem] shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Icon name="checkCircle" className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Application Received</h3>
        <p className="text-gray-600 max-w-md mx-auto text-lg font-medium leading-relaxed">
          Thank you for applying to partner with Prime. Our wholesale team will review your application within <span className="text-primary font-bold">24–48 hours</span>.
          We've sent a confirmation to <strong className="text-gray-900">{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
          Partner With <span className="text-primary italic">Prime</span>
        </h2>
        <p className="text-gray-500 font-medium leading-relaxed">
          Join our network of elite retail partners. Provide your business details below to begin the onboarding process.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Company Name *
            </label>
            <input
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
              placeholder="Your Business Legal Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Full Name *
            </label>
            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
              placeholder="Contact Person"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Business Email *
            </label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
              placeholder="e.g. procurement@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Business Type *
            </label>
            <select
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all cursor-pointer font-medium shadow-sm appearance-none"
            >
              <option value="">Select Structure</option>
              {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Years in Business *
            </label>
            <input
              name="yearsInBusiness"
              type="number"
              required
              value={formData.yearsInBusiness}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Tax / VAT ID
            </label>
            <input
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
              placeholder="Tax Identification Number"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
              Monthly Volume *
            </label>
            <select
              name="volume"
              required
              value={formData.volume}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all cursor-pointer font-medium shadow-sm appearance-none"
            >
              <option value="">Monthly Budget Range</option>
              <option value="5k-25k">$5,000 – $25,000</option>
              <option value="25k-100k">$25,000 – $100,000</option>
              <option value="100k-500k">$100,000 – $500,000</option>
              <option value="500k+">$500,000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
            Registered Business Address *
          </label>
          <input
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-gray-400 font-medium shadow-sm"
            placeholder="Full Business Address"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block ml-1">
            Interest & Business Overview
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none placeholder:text-gray-400 font-medium shadow-sm"
            placeholder="Tell us about the products you're interested in and the markets you serve..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl shadow-black/10 active:scale-95 flex items-center justify-center gap-3 group"
        >
          <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          Submit Application
        </button>

        <div className="flex items-center justify-center gap-2 pt-4 opacity-50">
          <Icon name="check" className="w-3 h-3 text-gray-400" />
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Typically reviewed within 24–48 hours
          </p>
        </div>
      </form>
    </div>
  );
}
