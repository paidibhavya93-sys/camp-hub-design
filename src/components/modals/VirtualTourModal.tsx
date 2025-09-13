import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalTrigger } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Play, MapPin, Clock } from 'lucide-react';

interface VirtualTourModalProps {
  children: React.ReactNode;
}

const VirtualTourModal = ({ children }: VirtualTourModalProps) => {
  const tourStops = [
    { name: "Modern Library", duration: "3 min", description: "Explore our extensive collection and study areas" },
    { name: "Computer Labs", duration: "2 min", description: "State-of-the-art technology facilities" },
    { name: "Study Halls", duration: "2 min", description: "Spacious and comfortable learning spaces" },
    { name: "Cafeteria", duration: "1 min", description: "Dining and refreshment areas" },
    { name: "Recreation Areas", duration: "2 min", description: "Student lounges and common areas" }
  ];

  return (
    <Modal>
      <ModalTrigger asChild>
        {children}
      </ModalTrigger>
      <ModalContent className="max-w-lg">
        <ModalHeader>
          <ModalTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Virtual Campus Tour
          </ModalTitle>
          <ModalDescription>
            Take a comprehensive virtual tour of our facilities
          </ModalDescription>
        </ModalHeader>
        
        <div className="space-y-4">
          <div className="bg-gradient-primary rounded-lg p-4 text-white text-center">
            <h3 className="font-bold mb-2">Full Tour Experience</h3>
            <p className="text-sm opacity-90">Interactive 360° views of all facilities</p>
            <Button className="mt-3 bg-white text-primary hover:bg-white/90">
              Start Full Tour (10 min)
            </Button>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Quick Tour Options
            </h4>
            {tourStops.map((stop, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{stop.name}</p>
                    <p className="text-xs text-muted-foreground">{stop.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {stop.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default VirtualTourModal;