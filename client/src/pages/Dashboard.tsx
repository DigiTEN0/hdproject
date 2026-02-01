import { useInquiries } from "@/hooks/use-inquiries";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

export default function Dashboard() {
  const { user, isLoadingUser, logout } = useAuth();
  const { data: inquiries, isLoading: isLoadingInquiries } = useInquiries();
  const [_, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoadingUser && !user) {
      setLocation("/login");
    }
  }, [user, isLoadingUser, setLocation]);

  if (isLoadingUser || !user) {
    return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <img 
              src="http://www.digiten.nl/wp-content/uploads/2026/01/HD-Project.png" 
              alt="Logo" 
              className="h-8 w-auto" 
            />
            <span className="font-bold text-lg text-primary ml-2 border-l pl-3">Admin Dashboard</span>
           </div>
           <Button variant="ghost" onClick={() => logout()} className="text-muted-foreground hover:text-destructive">
             <LogOut className="h-4 w-4 mr-2" /> Uitloggen
           </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-lg border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Inkomende Aanvragen</CardTitle>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Totaal: {inquiries?.length || 0}
            </div>
          </CardHeader>
          <CardContent>
            {isLoadingInquiries ? (
              <div className="py-12 flex justify-center"><Loader2 className="animate-spin h-6 w-6 text-muted-foreground" /></div>
            ) : inquiries && inquiries.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Datum</TableHead>
                      <TableHead>Naam</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Telefoon</TableHead>
                      <TableHead className="w-[40%]">Bericht</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry: any) => (
                      <TableRow key={inquiry.id} className="hover:bg-muted/10">
                        <TableCell className="whitespace-nowrap text-muted-foreground">
                          {inquiry.createdAt ? format(new Date(inquiry.createdAt), "dd MMM yyyy HH:mm", { locale: nl }) : "-"}
                        </TableCell>
                        <TableCell className="font-medium">{inquiry.name}</TableCell>
                        <TableCell><a href={`mailto:${inquiry.email}`} className="text-primary hover:underline">{inquiry.email}</a></TableCell>
                        <TableCell><a href={`tel:${inquiry.phone}`} className="text-primary hover:underline">{inquiry.phone}</a></TableCell>
                        <TableCell className="text-muted-foreground">
                          {inquiry.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Nog geen aanvragen ontvangen.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
