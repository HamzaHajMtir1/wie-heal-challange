'use client'

import { useState } from 'react'
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { DoctorTabs } from './DoctorTabs';

// Define the Doctor type
export interface Doctor {
  name: string;
  specialty: string;
  subSpecialty: string;
  phone: string;
  email: string;
  location: string;
  imageUrl: string;
}

export function DoctorsListComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const doctors: Doctor[] = [
    {
      name: "Dr. Emily Chen",
      specialty: "Oncology",
      subSpecialty: "Breast Cancer",
      phone: "+1 (555) 123-4567",
      email: "emily.chen@example.com",
      location: "New York, NY",
      imageUrl: "/doctor/doctor1.png?height=100&width=100"
    },
    {
      name: "Dr. Michael Johnson",
      specialty: "Oncology",
      subSpecialty: "Lung Cancer",
      phone: "+1 (555) 234-5678",
      email: "michael.johnson@example.com",
      location: "Los Angeles, CA",
      imageUrl: "/doctor/doctor2.png?height=100&width=100"
    },
    {
      name: "Dr. Sarah Thompson",
      specialty: "Psychology",
      subSpecialty: "Cancer Patient Support",
      phone: "+1 (555) 345-6789",
      email: "sarah.thompson@example.com",
      location: "Chicago, IL",
      imageUrl: "/doctor/doctor3.png?height=100&width=100&text=ST"
    },
    {
      name: "Dr. David Lee",
      specialty: "Oncology",
      subSpecialty: "Pediatric Oncology",
      phone: "+1 (555) 456-7890",
      email: "david.lee@example.com",
      location: "Houston, TX",
      imageUrl: "/doctor/doctor2.png?height=100&width=100&text=DL"
    },
    {
      name: "Dr. Rachel Green",
      specialty: "Psychology",
      subSpecialty: "Grief Counseling",
      phone: "+1 (555) 567-8901",
      email: "rachel.green@example.com",
      location: "Boston, MA",
      imageUrl: "/doctor/doctor3.png?height=100&width=100&text=RG"
    },
    {
      name: "Dr. Alex Martinez",
      specialty: "Oncology",
      subSpecialty: "Hematologic Oncology",
      phone: "+1 (555) 678-9012",
      email: "alex.martinez@example.com",
      location: "Miami, FL",
      imageUrl: "/doctor/doctor2.png?height=100&width=100&text=AM"
    }
  ]

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DoctorTabs doctors={doctors} searchTerm={searchTerm} />
      </main>
    </div>
  )
}