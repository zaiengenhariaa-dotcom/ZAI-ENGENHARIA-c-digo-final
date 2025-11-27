import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string;
}

export function ServiceCard({ icon: Icon, title, description, details }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => details && setIsExpanded(!isExpanded)}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 flex items-center justify-between">
              {title}
              {details && (
                <span className="ml-2">
                  {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              )}
            </CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {details && isExpanded && (
        <CardContent>
          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {details}
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
