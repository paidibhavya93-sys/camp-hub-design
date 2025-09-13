import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import campHelpLogo from '@/assets/camp-help-logo.png';

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={campHelpLogo} alt="Camp Help Logo" className="h-10 w-auto" />
              <h3 className="text-xl font-bold">Camp Help</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering students with comprehensive educational support, modern facilities, 
              and a nurturing environment for academic excellence.
            </p>
            <div className="flex gap-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://facebook.com/camphelp', '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://twitter.com/camphelp', '_blank')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://instagram.com/camphelp', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://youtube.com/camphelp', '_blank')}
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#timings" onClick={(e) => { e.preventDefault(); document.getElementById('timings')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Timings</a></li>
              <li><a href="#facilities" onClick={(e) => { e.preventDefault(); document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Facilities</a></li>
              <li><a href="#events" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Events</a></li>
              <li><a href="mailto:info@camphelp.edu" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Contact</a></li>
              <li><a href="tel:+15551234567" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Call Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <p className="text-primary-foreground/80">
                  123 Education Street<br />
                  Learning District, LD 12345<br />
                  Educational City
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80">info@camphelp.edu</p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Operating Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium mb-2">Office Hours:</p>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Camp Help Educational Facility. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground smooth-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground smooth-transition">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground smooth-transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;