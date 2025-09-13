import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, AlertCircle } from 'lucide-react';
import ExamRegistrationModal from '@/components/modals/ExamRegistrationModal';

const ExamsSection = () => {
  const upcomingExams = [
    {
      title: "Mid-Term Mathematics",
      date: "September 25, 2024",
      time: "10:00 AM - 12:00 PM",
      duration: "2 hours",
      candidates: 45,
      status: "upcoming",
    },
    {
      title: "Physics Practical",
      date: "September 28, 2024", 
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      candidates: 32,
      status: "upcoming",
    },
    {
      title: "English Literature",
      date: "October 2, 2024",
      time: "9:00 AM - 11:30 AM", 
      duration: "2.5 hours",
      candidates: 58,
      status: "registration-open",
    },
    {
      title: "Chemistry Final",
      date: "October 8, 2024",
      time: "1:00 PM - 4:00 PM",
      duration: "3 hours", 
      candidates: 41,
      status: "registration-open",
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-accent text-accent-foreground';
      case 'registration-open':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'registration-open':
        return 'Registration Open';
      default:
        return 'TBD';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-gradient">Exams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay prepared with our comprehensive exam schedule and registration information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {upcomingExams.map((exam, index) => (
            <Card 
              key={index}
              className="card-shadow hover:shadow-elegant smooth-transition animate-slide-up border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary">
                    {exam.title}
                  </CardTitle>
                  <Badge className={getStatusColor(exam.status)}>
                    {getStatusText(exam.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{exam.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{exam.time}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Duration: {exam.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{exam.candidates} Candidates</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    {exam.status === 'registration-open' ? (
                      <ExamRegistrationModal examTitle={exam.title} examDate={exam.date}>
                        <Button className="w-full">
                          Register Now
                        </Button>
                      </ExamRegistrationModal>
                    ) : (
                      <Button className="w-full" variant="outline">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Exams
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;