import Image from "next/image"

export function Feedbacks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Inspiring Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-pink-50 p-6 rounded-lg shadow-md">
              <p className="text-pink-600 mb-4">"The Wie-Heal Challenge gave me hope when I needed it most. The resources and support have been invaluable in my journey."</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=50&width=50&text=User${i}`}
                  alt={`Testimonial user ${i}`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-pink-700">Jane Doe</h3>
                  <p className="text-pink-500 text-sm">Breast Cancer Survivor</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}