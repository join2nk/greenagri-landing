"use client";

import { useActionState, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createMessage } from "@/app/admin/quote/action"; // server action
import { toast } from "sonner";
import { Signature } from "lucide-react"

export default function QuoteDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = async (formData: FormData) => {
  //   try {
  //     await createMessage(formData); // call server action
  //     setSubmitted(true); // show thank-you
  //   } catch (error) {
  //     console.error(error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

const [state, action] = useActionState(createMessage, null);

useEffect(() => {
  if (state?.success) {
    toast("Thank you! Your quote request has been submitted.");
    setSubmitted(true);
    setOpen(false);
  } else if (state?.error) {
    toast.error(state.error);
  }

}, [state]);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-[#6b3f21] hover:bg-[#53301a] text-amber-50 px-6 py-5 rounded-full font-semibold transition-all duration-300 shadow-[0_10px_22px_-14px_rgba(74,44,15,0.45)]"
      >
        Get Quote
      </Button>

      <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setSubmitted(false); }}>
        <DialogContent className="w-full max-w-lg border border-amber-300/60 bg-[#fffaf1] text-[#4a2c0f] shadow-[0_30px_90px_-50px_rgba(74,44,15,0.55)]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-serif text-[#4a2c0f]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/70 bg-amber-50 text-[#6b3f21]">
                <Signature className="h-5 w-5" />
              </span>
              Request a Quote
            </DialogTitle>
          </DialogHeader>

          {submitted ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-center text-[#5a2f12] font-semibold">
              Thank you! Your quote request has been submitted.
            </div>
          ) : (
            <form 
              action={action} // call client wrapper
              className="space-y-4 mt-2"
            >
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-[#5a2f12]">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required className="border-amber-200 bg-white/90 text-[#4a2c0f] placeholder:text-[#8c735d] focus-visible:ring-amber-300" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[#5a2f12]">Email</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required className="border-amber-200 bg-white/90 text-[#4a2c0f] placeholder:text-[#8c735d] focus-visible:ring-amber-300" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-[#5a2f12]">Phone</Label>
                <Input id="phone" type="tel" name="phone" placeholder="Enter your phone number" required className="border-amber-200 bg-white/90 text-[#4a2c0f] placeholder:text-[#8c735d] focus-visible:ring-amber-300" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-[#5a2f12]">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry"
                  className="w-full rounded-xl border border-amber-200 bg-white/90 px-3 py-2 text-[#4a2c0f] placeholder:text-[#8c735d] outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-200/60"
                  rows={4}
                />
              </div>

              <DialogFooter>
                <Button type="submit" className="bg-[#6b3f21] hover:bg-[#53301a] text-amber-50">
                  Send Quote
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
