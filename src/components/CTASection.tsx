import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Dealership?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join hundreds of dealerships already using Accusys to streamline operations, 
            enhance security, and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-3" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-3" />
              <span>24/7 customer support</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-6 w-6 mr-3" />
              <span>Easy setup & migration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}