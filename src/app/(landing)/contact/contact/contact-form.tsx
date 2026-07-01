"use client";

import React, { useActionState, useEffect } from "react";
import { createContactMessage } from "@/app/(landing)/contact/contact/action";
import { toast } from "sonner";

export function FormComponent() {
  
  const [state,action,pending] = useActionState(createContactMessage,null)
  useEffect(()=>{
    if (state?.success){
      toast("Thank You for contacting us. We will get in touch with you soon .")
    }
  },[state])
  return (
    <form 
    action={action} 
    className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3 text-amber-50/95">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-amber-200/40 bg-[rgba(255,248,236,0.12)] px-4 py-3 text-amber-50 placeholder:text-amber-100/60 transition focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-3 text-amber-50/95">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-xl border border-amber-200/40 bg-[rgba(255,248,236,0.12)] px-4 py-3 text-amber-50 placeholder:text-amber-100/60 transition focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/30"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3 text-amber-50/95">Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Your Company"
            required
            className="w-full rounded-xl border border-amber-200/40 bg-[rgba(255,248,236,0.12)] px-4 py-3 text-amber-50 placeholder:text-amber-100/60 transition focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3 text-amber-50/95">Product Interest</label>
          <select
            name="productType"
            required
            className="w-full rounded-xl border border-amber-200/40 bg-[rgba(255,248,236,0.12)] px-4 py-3 text-amber-50 transition focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/30"
          >
            <option value="" className="text-slate-900">Select Product Type</option>
            <option value="non-basmati" className="text-slate-900">Non-Basmati Rice</option>
            <option value="basmati" className="text-slate-900">Basmati Rice</option>
            <option value="private-label" className="text-slate-900">Private Labelling</option>
            <option value="wholesale" className="text-slate-900">Wholesale Distribution</option>
            <option value="export" className="text-slate-900">Export Services</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-3 text-amber-50/95">Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirements..."
            className="w-full resize-none rounded-xl border border-amber-200/40 bg-[rgba(255,248,236,0.12)] px-4 py-3 text-amber-50 placeholder:text-amber-100/60 transition focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/30"
          ></textarea>
        </div>

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center space-x-2 rounded-xl bg-amber-50 px-4 py-3 font-semibold text-[#4a2c0f] transition hover:-translate-y-0.5 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span>{pending ? "Sending..." : "Send Inquiry"}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {state?.success && (
        <p className="mt-3 font-semibold text-amber-100">
          Message sent successfully! We will contact you soon.
        </p>
      )}
    </form>
  );
}
