
import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import { mockRequests } from "@/data/mockData";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();

  const userRequests = useMemo(() => {
    return mockRequests.filter(req => req.createdBy === user?.username);
  }, [user, mockRequests]);

  const totalRequests = userRequests.length;
  const completedRequests = userRequests.filter(req => req.status === "Completed").length;
  const pendingRequests = userRequests.filter(req => req.status === "Pending").length;

  const getInitials = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <Layout title="Your Profile">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-jdCard p-6 rounded-lg">
            <div className="flex flex-col items-center justify-center mb-6">
              <Avatar className="h-24 w-24 bg-jdPrimary text-white mb-4">
                <AvatarFallback className="text-3xl">
                  {user?.fullName ? getInitials(user.fullName) : 'U'}
                </AvatarFallback>
              </Avatar>
              
              <h2 className="text-2xl font-semibold">{user?.fullName || 'User'}</h2>
              <p className="text-muted-foreground">@{user?.username || 'username'}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Department</h3>
                <p className="text-lg">{user?.department || 'Not assigned'}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Account Status</h3>
                <div className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span>Active</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Email</h3>
                <p>{user?.email || 'email@example.com'}</p>
              </div>
              
              {user?.phone && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Phone</h3>
                  <p>{user.phone}</p>
                </div>
              )}
            </div>
            
            <div className="space-y-3 mt-6 pt-6 border-t border-border">
              <Button className="w-full bg-accent hover:bg-accent/80">
                <Pencil className="h-4 w-4 mr-2" /> Edit Profile
              </Button>
              <Link to="/settings">
                <Button variant="outline" className="w-full">
                  Settings
                </Button>
              </Link>
              <Button 
                variant="destructive" 
                className="w-full" 
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-jdCard p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-4">Activity Summary</h3>
            <p className="text-muted-foreground mb-6">Overview of your activity on the platform</p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-jdPrimary">{totalRequests}</p>
                <p className="text-sm text-muted-foreground mt-1">Total Requests</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500">{completedRequests}</p>
                <p className="text-sm text-muted-foreground mt-1">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-amber-500">{pendingRequests}</p>
                <p className="text-sm text-muted-foreground mt-1">Pending</p>
              </div>
            </div>
          </div>
          
          <div className="bg-jdCard p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Recent Activity</h3>
            
            {userRequests.length > 0 ? (
              <div className="space-y-4">
                {userRequests.map((request) => (
                  <div key={request.id} className="border-b border-border pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">{request.title}</h4>
                      <span className="text-sm text-muted-foreground">{request.dateCreated}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-jdPrimary">{request.department}</p>
                      <span className={`px-2 py-1 rounded text-xs ${
                        request.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                        request.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' :
                        'bg-blue-500/10 text-blue-500'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No recent activity to display</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
