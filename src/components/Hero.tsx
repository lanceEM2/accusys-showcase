import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Workflow } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Enterprise-Grade Security & Compliance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Accusys
            </span>
            <br />
            Dealership Management
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Comprehensive vehicle dealership management system with advanced security, 
            real-time analytics, automated workflows, and seamless integrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <Shield className="h-12 w-12 text-primary mr-4" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <BarChart3 className="h-12 w-12 text-accent mr-4" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">Real-time</div>
                <div className="text-sm text-muted-foreground">Analytics & Reports</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Workflow className="h-12 w-12 text-primary mr-4" />
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">Automated</div>
                <div className="text-sm text-muted-foreground">Workflows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}