import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { Doctor } from "./DoctorsListComponent";



// Define the props type for the DoctorGrid component
interface DoctorGridProps {
  doctors: Doctor[];
}

export function DoctorGrid({ doctors }: DoctorGridProps) {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor, index) => (
        <Card key={index} className="border-pink-200 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="border-b border-pink-100">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border border-pink-300">
                <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
                <AvatarFallback className="bg-pink-200 text-pink-700">{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-pink-800 text-lg">{doctor.name}</CardTitle>
                <CardDescription className="text-pink-600">
                  {doctor.specialty} - {doctor.subSpecialty}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              <div className="flex items-center text-pink-700">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">{doctor.phone}</span>
              </div>
              <div className="flex items-center text-pink-700">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">{doctor.email}</span>
              </div>
              <div className="flex items-center text-pink-700">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{doctor.location}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-100">
              Book Appointment
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}