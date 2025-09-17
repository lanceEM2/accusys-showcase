import { Shield, Database, Workflow, Link, BarChart3, Settings } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const featureCategories = [
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with multi-factor authentication",
    features: [
      "2FA Authentication with OTP email verification for every login",
      "JWT tokens with 1-hour expiration for enhanced security",
      "Role-based access control to protect sensitive resources",
      "User activation/deactivation with administrative restrictions",
      "Granular role assignment during user creation"
    ]
  },
  {
    icon: Database,
    title: "Core Data Management",
    description: "Comprehensive inventory and records management",
    features: [
      "Complete vehicle inventory with add, update, delete operations",
      "Advanced filtering and search functionality across all records",
      "Registration certificate tracking and compliance monitoring",
      "Consignment inventory management with detailed tracking",
      "Vehicle repossession status and storage management"
    ]
  },
  {
    icon: Workflow,
    title: "Automation & Workflow",
    description: "Streamlined processes with intelligent automation",
    features: [
      "Automated agreement and receipt generation for all transactions",
      "Background schedulers for automatic data processing and updates",
      "Custom grace period configuration for repossession eligibility",
      "Automated penalty calculations with configurable rates",
      "Smart workflow triggers for overdue payment management"
    ]
  },
  {
    icon: Link,
    title: "Integration & Scalability",
    description: "Seamless connectivity with financial institutions",
    features: [
      "Integration with major Kenyan banks (KCB, Cooperative, Equity)",
      "M-PESA payment gateway with instant notifications",
      "Instant Payment Notification (IPN) system",
      "Date-filtered transaction monitoring and reporting",
      "Scalable architecture for growing business needs"
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights",
    description: "Advanced analytics and performance tracking",
    features: [
      "Sales dashboard with active, closed, and pending filter options",
      "Revenue analytics by dealership branches with graphical representation",
      "Year and month-based revenue filtering and analysis",
      "Top-performing salesperson tracking by revenue and sales volume",
      "Commission tracking and payment management system"
    ]
  },
  {
    icon: Settings,
    title: "Advanced Operations",
    description: "Specialized tools for complex business operations",
    features: [
      "Overdue installments tracking with automatic penalty application",
      "Custom penalty rate configuration with grace period settings",
      "Vehicle repossession management with client detail tracking",
      "Storage fee calculation and days-in-repossession monitoring",
      "Comprehensive audit trails for all system operations"
    ]
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Feature Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your vehicle dealership operations efficiently, 
            from security and compliance to advanced analytics and automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featureCategories.map((category, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}