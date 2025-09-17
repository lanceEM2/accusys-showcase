import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <Card className="hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-xl bg-primary/10 mr-4">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}