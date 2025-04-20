import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Search, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Request, RequestStatus } from "@/types";

const Requests = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [requests, setRequests] = useState<Request[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const savedRequests = localStorage.getItem('requests');
    if (savedRequests) {
      setRequests(JSON.parse(savedRequests));
    }
  }, []);

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = search === "" || 
      request.title.toLowerCase().includes(search.toLowerCase()) || 
      request.id.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (requestId: string, requestCreator: string) => {
    if (user?.username === requestCreator) {
      const updatedRequests = requests.filter(request => request.id !== requestId);
      setRequests(updatedRequests);
      
      localStorage.setItem('requests', JSON.stringify(updatedRequests));
      
      toast({
        title: "Request deleted",
        description: "The request has been successfully deleted.",
      });
    } else {
      toast({
        title: "Permission denied",
        description: "You can only delete requests that you've created.",
        variant: "destructive"
      });
    }
  };

  const handleStatusChange = (requestId: string, newStatus: RequestStatus, requestCreator: string) => {
    const updatedRequests = requests.map(request => {
      if (request.id === requestId) {
        return { ...request, status: newStatus };
      }
      return request;
    });
    
    setRequests(updatedRequests);
    
    localStorage.setItem('requests', JSON.stringify(updatedRequests));
  };

  return (
    <Layout title="Requests">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search requests..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-accent border-border"
            />
          </div>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <span className="text-sm whitespace-nowrap">Status:</span>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-accent border-border w-32">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In progress">In progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="bg-jdCard rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">TITLE</th>
                <th className="text-left p-4">DEPARTMENT</th>
                <th className="text-left p-4">DATE CREATED</th>
                <th className="text-left p-4">STATUS</th>
                <th className="text-right p-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request, index) => (
                  <tr 
                    key={request.id} 
                    className={index !== filteredRequests.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="p-4 text-muted-foreground">{request.id}</td>
                    <td className="p-4 font-medium">{request.title}</td>
                    <td className="p-4">{request.department}</td>
                    <td className="p-4">{request.dateCreated}</td>
                    <td className="p-4">
                      <div className="relative inline-block">
                        <Select 
                          defaultValue={request.status} 
                          onValueChange={(value) => handleStatusChange(request.id, value as RequestStatus, request.createdBy)}
                        >
                          <SelectTrigger className={`
                            border-none shadow-none font-medium text-sm
                            ${
                              request.status === 'Completed' ? 'text-green-500' :
                              request.status === 'Pending' ? 'text-amber-500' :
                              'text-blue-500'
                            }
                          `}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pending">
                              <span className="text-amber-500">Pending</span>
                            </SelectItem>
                            <SelectItem value="In progress">
                              <span className="text-blue-500">In progress</span>
                            </SelectItem>
                            <SelectItem value="Completed">
                              <span className="text-green-500">Completed</span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className={`${user?.username === request.createdBy ? 'text-destructive' : 'text-destructive opacity-50'}`}
                        onClick={() => handleDelete(request.id, request.createdBy)}
                        disabled={user?.username !== request.createdBy}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center">
                    <div className="text-muted-foreground">No requests found</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Requests;
