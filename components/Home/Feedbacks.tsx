import Image from "next/image"

export function Feedbacks() {
  const feedbackData = [
    {
      message:
        "The Wie Care helped me find strength when I thought I had none left. The community support was life-changing.",
      name: "Emily Smith",
      status: "Breast Cancer Survivor",
    },
    {
      message:
        "Wie Care reminded me that I am not alone in this fight. The tools and resources made all the difference.",
      name: "Sarah Johnson",
      status: "Cancer Fighter",
    },
    {
      message:
        "Thanks to Wie Care, I found hope again. The challenge gave me the courage to keep fighting.",
      name: "Laura Brown",
      status: "Ovarian Cancer Survivor",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Inspiring Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {feedbackData.map((feedback, i) => (
            <div key={i} className="bg-pink-50 p-6 rounded-lg shadow-md">
              <p className="text-pink-600 mb-4 italic">"{feedback.message}"</p>
              <div className="flex items-center">
                <Image
                  src={`/home/heart.png`} // Update this path if necessary
                  alt={`Testimonial user ${i + 1}`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-pink-700">{feedback.name}</h3>
                  <p className="text-pink-500 text-sm">{feedback.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
