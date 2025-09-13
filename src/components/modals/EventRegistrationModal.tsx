import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, ModalTrigger } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

interface EventRegistrationModalProps {
  eventTitle: string;
  eventDate: string;
  children: React.ReactNode;
}

const EventRegistrationModal = ({ eventTitle, eventDate, children }: EventRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Successfully registered for ${eventTitle}!`);
    setFormData({ name: '', email: '', phone: '', interests: '' });
  };

  return (
    <Modal>
      <ModalTrigger asChild>
        {children}
      </ModalTrigger>
      <ModalContent className="max-w-md">
        <ModalHeader>
          <ModalTitle>Register for {eventTitle}</ModalTitle>
          <ModalDescription>
            Join us for this exciting event on {eventDate}
          </ModalDescription>
        </ModalHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interests">Special Interests (Optional)</Label>
            <Textarea
              id="interests"
              value={formData.interests}
              onChange={(e) => setFormData({...formData, interests: e.target.value})}
              placeholder="Let us know what you're most interested in about this event..."
            />
          </div>
          
          <ModalFooter>
            <Button type="submit" className="w-full">
              Complete Registration
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EventRegistrationModal;