
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { user } = useAuth();
  
  const getInitials = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className="flex items-center justify-between p-6 border-b border-border">
      <h1 className="text-2xl font-semibold">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <Link to="/requests/new">
          <Button className="bg-jdPrimary hover:bg-jdPrimary/90 text-white">
            New Request
          </Button>
        </Link>
        
        <Link to="/profile" className="flex items-center">
          <Avatar className="h-8 w-8 bg-jdPrimary text-white">
            <AvatarFallback>{user?.fullName ? getInitials(user.fullName) : 'U'}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default Header;
