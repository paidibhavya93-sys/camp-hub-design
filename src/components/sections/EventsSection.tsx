import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, Trophy, Music, BookOpen, Lightbulb } from 'lucide-react';
import EventRegistrationModal from '@/components/modals/EventRegistrationModal';

const EventsSection = () => {
  const events = [
    {
      icon: Trophy,
      title: "Academic Excellence Awards",
      date: "September 30, 2024",
      time: "3:00 PM",
      location: "Main Auditorium",
      attendees: 200,
      description: "Annual ceremony recognizing outstanding academic achievements and dedication.",
      category: "Academic",
      status: "upcoming"
    },
    {
      icon: BookOpen,
      title: "Study Skills Workshop",
      date: "October 5, 2024", 
      time: "10:00 AM",
      location: "Conference Room A",
      attendees: 50,
      description: "Interactive workshop on effective study techniques and time management strategies.",
      category: "Workshop",
      status: "registration-open"
    },
    {
      icon: Music,
      title: "Cultural Festival",
      date: "October 12, 2024",
      time: "5:00 PM",
      location: "Campus Grounds",
      attendees: 500,
      description: "Celebrate diversity with performances, food stalls, and cultural exhibitions.",
      category: "Cultural",
      status: "upcoming"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Science Fair",
      date: "October 18, 2024",
      time: "9:00 AM",
      location: "Science Block",
      attendees: 150,
      description: "Showcase of innovative projects and scientific experiments by students.",
      category: "Science",
      status: "registration-open"
    },
    {
      icon: Users,
      title: "Career Guidance Seminar",
      date: "October 25, 2024",
      time: "2:00 PM", 
      location: "Main Hall",
      attendees: 100,
      description: "Expert guidance on career paths, higher education, and professional development.",
      category: "Career",
      status: "upcoming"
    },
    {
      icon: BookOpen,
      title: "Parent-Teacher Meeting",
      date: "November 1, 2024",
      time: "4:00 PM",
      location: "Individual Classrooms",
      attendees: 300,
      description: "Individual consultations to discuss student progress and development plans.",
      category: "Academic",
      status: "upcoming"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'bg-primary text-primary-foreground';
      case 'Workshop':
        return 'bg-accent text-accent-foreground';
      case 'Cultural':
        return 'bg-purple-500 text-white';
      case 'Science':
        return 'bg-green-500 text-white';
      case 'Career':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Campus <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant campus community through engaging events, workshops, and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card 
                key={index}
                className="card-shadow hover:shadow-elegant smooth-transition animate-slide-up border-0 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-primary group-hover:text-accent smooth-transition">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event.attendees} Expected</span>
                    </div>
                  </div>

                  {event.status === 'registration-open' ? (
                    <EventRegistrationModal eventTitle={event.title} eventDate={event.date}>
                      <Button className="w-full">
                        Register Now
                      </Button>
                    </EventRegistrationModal>
                  ) : (
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8"
            onClick={() => window.open('/calendar', '_blank')}
          >
            View Event Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;