import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Doctor } from "./DoctorsListComponent";
import { DoctorGrid } from "./DoctorGrid";


interface DoctorTabsProps {
  doctors: Doctor[];
  searchTerm: string;
}

export function DoctorTabs({ doctors, searchTerm }: DoctorTabsProps) {
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.subSpecialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="all" className="data-[state=active]:bg-pink-200 data-[state=active]:text-pink-800">All</TabsTrigger>
        <TabsTrigger value="oncology" className="data-[state=active]:bg-pink-200 data-[state=active]:text-pink-800">Oncology</TabsTrigger>
        <TabsTrigger value="psychology" className="data-[state=active]:bg-pink-200 data-[state=active]:text-pink-800">Psychology</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <DoctorGrid doctors={filteredDoctors} />
      </TabsContent>
      <TabsContent value="oncology">
        <DoctorGrid doctors={filteredDoctors.filter(d => d.specialty === "Oncology")} />
      </TabsContent>
      <TabsContent value="psychology">
        <DoctorGrid doctors={filteredDoctors.filter(d => d.specialty === "Psychology")} />
      </TabsContent>
    </Tabs>
  )
}