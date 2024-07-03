export default function Features() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms to interpret pet emotions',
    },
    {
      title: 'Easy to Use',
      description: 'Simply upload a photo of your pet to get started',
    },
    {
      title: 'Instant Results',
      description: 'Receive emotion analysis in seconds',
    },
    {
      title: 'Multiple Pet Types',
      description: 'Works with dogs, cats, and more',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
