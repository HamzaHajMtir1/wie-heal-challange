'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Send } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define the types for form data and errors
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  symptoms: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  symptoms?: string;
}

export function DiagnosticFormComponent() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    symptoms: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }))
    }
  }

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.symptoms.trim()) newErrors.symptoms = 'Symptoms description is required'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      // Here you would typically send the data to your backend
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-pink-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-pink-200 border-b border-pink-300">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-pink-800">Preliminary Diagnosis Form</CardTitle>
            <CardDescription className="text-pink-600">
              Please provide your information and symptoms for an initial assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {isSubmitted ? (
              <Alert className="bg-green-100 border-green-300 text-green-800">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your diagnostic information has been submitted successfully. We will contact you soon.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-pink-700">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="border-pink-300 focus:ring-pink-500"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-pink-700">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="border-pink-300 focus:ring-pink-500"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-pink-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-pink-300 focus:ring-pink-500"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="symptoms" className="text-pink-700">Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    className="border-pink-300 focus:ring-pink-500 min-h-[100px]"
                    placeholder="Please describe your symptoms in detail"
                  />
                  {errors.symptoms && <p className="text-red-500 text-sm">{errors.symptoms}</p>}
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="bg-pink-100 border-t border-pink-200">
            {!isSubmitted && (
              <Button 
                onClick={handleSubmit}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Envoyer
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}