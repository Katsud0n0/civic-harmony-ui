
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { 
  Home, 
  BarChart2, 
  Building2, 
  FileText, 
  User, 
  Users, 
  Settings 
} from "lucide-react";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-jdSidebar border-r border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center">
          <span className="font-bold text-xl text-white">JD</span>
          <span className="font-bold text-xl text-jdPrimary ml-2">| Frameworks</span>
        </div>
      </div>

      <div className="p-6 border-b border-border">
        <div className="text-sm text-muted-foreground">Welcome,</div>
        <div className="font-medium text-white text-lg">{user?.fullName || 'User'}</div>
        <div className="text-sm text-muted-foreground">{user?.department}</div>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <Home className="h-5 w-5 mr-3" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <BarChart2 className="h-5 w-5 mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/departments"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <Building2 className="h-5 w-5 mr-3" />
              Departments
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/requests"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <FileText className="h-5 w-5 mr-3" />
              Requests
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <User className="h-5 w-5 mr-3" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/team"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <Users className="h-5 w-5 mr-3" />
              Team
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings"
              className={({ isActive }) => 
                `flex items-center px-4 py-2.5 rounded-md transition-colors ${
                  isActive ? 'bg-accent text-white' : 'text-muted-foreground hover:bg-accent/50 hover:text-white'
                }`
              }
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
