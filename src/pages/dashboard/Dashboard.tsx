
import { FileText, Clock, CheckCircle2, FileBarChart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { departments, mockRequests } from "@/data/mockData";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user } = useAuth();

  const totalRequests = mockRequests.length;
  const pendingRequests = mockRequests.filter(req => req.status === "Pending").length;
  const inProgressRequests = mockRequests.filter(req => req.status === "In progress").length;
  const completedRequests = mockRequests.filter(req => req.status === "Completed").length;

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        <h2 className="text-2xl font-medium">Welcome back, {user?.username || 'User'}</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-jdCard p-6 rounded-lg border-l-4 border-l-jdPrimary">
            <div className="flex justify-between">
              <div>
                <div className="text-3xl font-bold">{totalRequests}</div>
                <div className="text-sm text-muted-foreground">All department requests</div>
                <div className="mt-2 text-xl font-medium">Total Requests</div>
              </div>
              <div className="flex items-start justify-center text-jdPrimary">
                <FileBarChart size={24} />
              </div>
            </div>
          </div>

          <div className="bg-jdCard p-6 rounded-lg border-l-4 border-l-amber-500">
            <div className="flex justify-between">
              <div>
                <div className="text-3xl font-bold">{pendingRequests}</div>
                <div className="text-sm text-muted-foreground">Awaiting action</div>
                <div className="mt-2 text-xl font-medium">Pending</div>
              </div>
              <div className="flex items-start justify-center text-amber-500">
                <Clock size={24} />
              </div>
            </div>
          </div>

          <div className="bg-jdCard p-6 rounded-lg border-l-4 border-l-blue-500">
            <div className="flex justify-between">
              <div>
                <div className="text-3xl font-bold">{inProgressRequests}</div>
                <div className="text-sm text-muted-foreground">Currently being processed</div>
                <div className="mt-2 text-xl font-medium">In Progress</div>
              </div>
              <div className="flex items-start justify-center text-blue-500">
                <FileText size={24} />
              </div>
            </div>
          </div>

          <div className="bg-jdCard p-6 rounded-lg border-l-4 border-l-green-500">
            <div className="flex justify-between">
              <div>
                <div className="text-3xl font-bold">{completedRequests}</div>
                <div className="text-sm text-muted-foreground">Successfully resolved</div>
                <div className="mt-2 text-xl font-medium">Completed</div>
              </div>
              <div className="flex items-start justify-center text-green-500">
                <CheckCircle2 size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Statistics */}
          <div className="bg-jdCard rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Department Statistics</h3>
            <div className="space-y-4">
              {departments.slice(0, 8).map((dept) => (
                <div key={dept.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 ${dept.color} rounded-md flex items-center justify-center text-white`}>
                      {dept.icon}
                    </div>
                    <span className="ml-3">{dept.name}</span>
                  </div>
                  <span className="bg-accent h-8 w-8 rounded-full flex items-center justify-center">
                    {dept.requestCount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Requests */}
          <div className="bg-jdCard rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Your Recent Requests</h3>
              <Link to="/requests" className="text-jdPrimary text-sm hover:underline">
                View All
              </Link>
            </div>
            
            {mockRequests.length > 0 ? (
              <div className="space-y-4">
                {mockRequests.map((request) => (
                  <div key={request.id} className="border border-border rounded-md p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{request.title}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        request.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                        request.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' :
                        'bg-blue-500/10 text-blue-500'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">{request.department}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto bg-accent rounded-full h-16 w-16 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">No Requests Yet</h4>
                  <p className="text-muted-foreground text-sm mb-4">You haven't created any interdepartmental requests yet.</p>
                  <Link to="/requests/new">
                    <Button className="bg-jdPrimary hover:bg-jdPrimary/90">
                      Create Your First Request
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
