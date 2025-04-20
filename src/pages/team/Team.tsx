
import Layout from "@/components/layout/Layout";
import { teamMembers } from "@/data/mockData";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";

const Team = () => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.length > 1 
      ? `${names[0][0]}${names[1][0]}`.toUpperCase()
      : names[0].substring(0, 2).toUpperCase();
  };

  return (
    <Layout title="Team">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map(member => (
          <div key={member.id} className="bg-jdCard rounded-lg overflow-hidden">
            <div className="p-6 text-center">
              <Avatar className={`h-20 w-20 mx-auto mb-4 ${
                member.department === 'Water Supply' ? 'bg-blue-500' :
                member.department === 'Electricity' ? 'bg-yellow-500' :
                member.department === 'Health' ? 'bg-red-500' :
                member.department === 'Education' ? 'bg-green-500' :
                member.department === 'Finance' ? 'bg-cyan-500' :
                member.department === 'Transportation' ? 'bg-amber-500' :
                'bg-jdPrimary'
              }`}>
                <AvatarFallback className="text-xl">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-1">@{member.username}</p>
              <div className="mt-2">
                <p className="text-sm">{member.department}</p>
                <p className="text-sm text-jdPrimary">{member.position}</p>
              </div>
            </div>
            
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                <span className="text-muted-foreground">{member.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                <span className="text-muted-foreground">{member.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Team;
