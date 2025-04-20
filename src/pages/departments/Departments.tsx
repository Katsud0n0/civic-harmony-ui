
import Layout from "@/components/layout/Layout";
import { departments } from "@/data/mockData";

const Departments = () => {
  return (
    <Layout title="Departments">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium mb-2">City Departments</h2>
          <p className="text-muted-foreground">
            Connect and collaborate with different municipal departments
          </p>
        </div>

        <div className="bg-jdCard rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4">Department</th>
                <th className="text-left p-4">Service Description</th>
                <th className="text-center p-4">Requests</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr 
                  key={dept.name} 
                  className={index !== departments.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${dept.color} rounded-md flex items-center justify-center text-white font-medium`}>
                        {dept.icon}
                      </div>
                      <span className="ml-3 font-medium">{dept.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{dept.description}</td>
                  <td className="p-4 text-center">
                    <div className="inline-block bg-accent h-8 w-8 rounded-full flex items-center justify-center font-medium">
                      {dept.requestCount}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Departments;
