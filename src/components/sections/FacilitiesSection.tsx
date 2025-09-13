import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Wifi, 
  Coffee, 
  Car, 
  Laptop, 
  Users, 
  MapPin, 
  Shield,
  Zap,
  Headphones
} from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "Extensive collection of academic resources, quiet study areas, and digital access to journals and databases.",
      features: ["10,000+ Books", "Digital Resources", "Silent Study Zones"]
    },
    {
      icon: Laptop,
      title: "Computer Labs",
      description: "State-of-the-art computer laboratories with latest software and high-speed internet connectivity.",
      features: ["50+ Workstations", "Latest Software", "Technical Support"]
    },
    {
      icon: Users,
      title: "Study Halls",
      description: "Spacious and well-ventilated study halls designed for focused learning and group discussions.",
      features: ["Climate Controlled", "Flexible Seating", "Group Areas"]
    },
    {
      icon: Coffee,
      title: "Cafeteria",
      description: "Nutritious meals and refreshments to keep you energized throughout your study sessions.",
      features: ["Healthy Meals", "Snack Bar", "Affordable Prices"]
    },
    {
      icon: Car,
      title: "Parking",
      description: "Secure and convenient parking facilities for students and visitors with 24/7 surveillance.",
      features: ["CCTV Monitored", "Well Lit", "Easy Access"]
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet access throughout the campus for seamless online learning.",
      features: ["Campus Wide Coverage", "High Bandwidth", "Secure Network"]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Round-the-clock security ensuring a safe and secure learning environment for all students.",
      features: ["24/7 Security", "Access Control", "Emergency Response"]
    },
    {
      icon: Headphones,
      title: "Audio-Visual Rooms",
      description: "Modern presentation facilities with projectors, sound systems, and video conferencing capabilities.",
      features: ["HD Projectors", "Sound Systems", "Video Conferencing"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience learning in a modern, well-equipped environment designed to enhance your educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Card 
                key={index}
                className="card-shadow hover:shadow-elegant smooth-transition animate-slide-up border-0 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center justify-center gap-2"
                      >
                        <Zap className="h-3 w-3 text-accent" />
                        <span className="text-xs font-medium text-primary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            <MapPin className="mr-2 h-4 w-4" />
            Take Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;