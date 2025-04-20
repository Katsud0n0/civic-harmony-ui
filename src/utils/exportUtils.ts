
import { Request } from "@/types";

export const exportToCSV = (data: any[], filename: string) => {
  // Convert data to CSV format
  const header = Object.keys(data[0]).join(',');
  const rows = data.map(item => 
    Object.values(item)
      .map(value => typeof value === 'string' ? `"${value}"` : value)
      .join(',')
  );
  const csv = [header, ...rows].join('\n');
  
  // Create a blob and download link
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportRequestsToCSV = (requests: Request[], filename = 'requests') => {
  // Format request data for export
  const formattedData = requests.map(request => ({
    ID: request.id,
    Title: request.title,
    Description: request.description || '',
    Department: request.department,
    CreatedBy: request.createdBy,
    DateCreated: request.dateCreated,
    Status: request.status,
    AssignedTo: request.assignedTo || ''
  }));
  
  exportToCSV(formattedData, filename);
};
