
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Bell, Shield } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Settings = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [department] = useState(user?.department || '');

  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <Tabs defaultValue="account" className="w-full">
          <div className="border-b border-border mb-6">
            <TabsList className="bg-transparent space-x-4">
              <TabsTrigger 
                value="account" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-jdPrimary rounded-none pb-3 px-1"
              >
                <User className="h-5 w-5 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-jdPrimary rounded-none pb-3 px-1"
              >
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-jdPrimary rounded-none pb-3 px-1"
              >
                <Shield className="h-5 w-5 mr-2" />
                Security
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="account">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Profile Information</h3>
                <p className="text-muted-foreground mb-6">Update your account details and personal information.</p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <Input 
                        id="username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                        className="bg-accent border-border"
                      />
                      <div className="absolute right-3 top-2.5 text-xs text-jdPrimary">
                        Edit
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <Input 
                        id="fullName" 
                        value={fullName} 
                        onChange={e => setFullName(e.target.value)}
                        className="bg-accent border-border"
                      />
                      <div className="absolute right-3 top-2.5 text-xs text-jdPrimary">
                        Edit
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input 
                      id="department" 
                      value={department} 
                      disabled 
                      className="bg-accent border-border opacity-70"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Email Address</h3>
                <p className="text-muted-foreground mb-6">Change your email address for communications.</p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="max-w-md bg-accent border-border"
                    />
                  </div>

                  <Button className="bg-jdPrimary hover:bg-jdPrimary/90">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Notification Preferences</h3>
                <p className="text-muted-foreground mb-6">Configure how you want to receive notifications.</p>
                
                {/* Placeholder for notification settings */}
                <div className="bg-jdCard p-6 rounded-lg border border-border">
                  <p className="text-center text-muted-foreground">
                    Notification settings will be implemented soon.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Change Password</h3>
                <p className="text-muted-foreground mb-6">Update your password to maintain account security.</p>
                
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input 
                      id="currentPassword" 
                      type="password" 
                      className="bg-accent border-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input 
                      id="newPassword" 
                      type="password"
                      className="bg-accent border-border" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      className="bg-accent border-border"
                    />
                  </div>

                  <Button className="bg-jdPrimary hover:bg-jdPrimary/90">
                    Update Password
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Two-Factor Authentication</h3>
                <p className="text-muted-foreground mb-6">Add an extra layer of security to your account.</p>
                
                {/* Placeholder for 2FA settings */}
                <div className="bg-jdCard p-6 rounded-lg border border-border">
                  <p className="text-center text-muted-foreground">
                    Two-factor authentication will be implemented soon.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
