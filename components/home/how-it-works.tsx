export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload Photo',
      description: 'Take or upload a clear photo of your pet',
    },
    {
      title: 'AI Analysis',
      description: 'Our AI processes the image to detect emotions',
    },
    {
      title: 'Get Results',
      description: "Receive a detailed report of your pet's emotional state",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-start">
          {steps.map((step, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
