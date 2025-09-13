import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, Users, BookOpen } from 'lucide-react';

const TimingsSection = () => {
  const timings = [
    {
      icon: Clock,
      title: "Facility Hours",
      items: [
        { day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
        { day: "Saturday", time: "7:00 AM - 9:00 PM" },
        { day: "Sunday", time: "8:00 AM - 8:00 PM" },
      ]
    },
    {
      icon: BookOpen,
      title: "Study Sessions",
      items: [
        { day: "Morning Batch", time: "6:00 AM - 9:00 AM" },
        { day: "Afternoon Batch", time: "2:00 PM - 6:00 PM" },
        { day: "Evening Batch", time: "6:30 PM - 9:30 PM" },
      ]
    },
    {
      icon: Users,
      title: "Group Classes",
      items: [
        { day: "Mathematics", time: "9:00 AM - 11:00 AM" },
        { day: "Sciences", time: "11:30 AM - 1:30 PM" },
        { day: "Languages", time: "3:00 PM - 5:00 PM" },
      ]
    },
    {
      icon: Calendar,
      title: "Special Programs",
      items: [
        { day: "Weekend Workshops", time: "Saturday 10:00 AM" },
        { day: "Exam Prep Sessions", time: "Sunday 2:00 PM" },
        { day: "Career Counseling", time: "By Appointment" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Facility</span> Timings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our comprehensive schedule designed to accommodate all your learning needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timings.map((timing, index) => {
            const IconComponent = timing.icon;
            return (
              <Card 
                key={index} 
                className="card-shadow hover:shadow-elegant smooth-transition animate-slide-up border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{timing.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timing.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">
                          {item.day}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimingsSection;