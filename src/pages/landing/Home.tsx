
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-jdBackground text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl text-white">JD</span>
            <span className="font-bold text-xl text-jdPrimary ml-2">| Frameworks</span>
          </div>
          
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-jdPrimary text-jdPrimary hover:bg-jdPrimary/10">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-jdPrimary hover:bg-jdPrimary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 text-center container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">JD</span>{' '}
          <span className="text-jdPrimary">Frameworks</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-muted-foreground">
          A unified platform for interdepartmental cooperation and streamlined communication.
        </p>
        <div className="space-x-4">
          <Link to="/dashboard">
            <Button className="bg-jdPrimary hover:bg-jdPrimary/90 text-white px-8 py-6 text-lg">
              Go to Dashboard
            </Button>
          </Link>
          <Link to="/departments">
            <Button variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg">
              Explore Departments <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-jdCard">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-jdBackground p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-jdPrimary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Centralized Request Management</h3>
              <p className="text-muted-foreground">
                Submit and track requests to any department through a single unified interface. Eliminates the need for redundant paperwork.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-jdBackground p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-jdPrimary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interdepartmental Collaboration</h3>
              <p className="text-muted-foreground">
                Connect departments for efficient communication and coordination. Breaks down silos between municipal services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-jdBackground p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-jdPrimary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Status Updates</h3>
              <p className="text-muted-foreground">
                Receive instant updates on your requests as they progress through various stages. No more waiting for responses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to streamline your department coordination?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the platform that's transforming how municipal departments work together.
          </p>
          <Link to="/register">
            <Button className="bg-jdPrimary hover:bg-jdPrimary/90 text-white px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-jdCard border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center mb-2">
                <span className="font-bold text-xl text-white">JD</span>
                <span className="font-bold text-xl text-jdPrimary ml-2">| Frameworks</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} JD Frameworks. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link to="/login" className="text-muted-foreground hover:text-white">
                Login
              </Link>
              <Link to="/register" className="text-muted-foreground hover:text-white">
                Register
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
