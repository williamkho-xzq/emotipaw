export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: "EmotiPaw helped me understand my cat's needs better. It's amazing!",
    },
    {
      name: 'John D.',
      text: 'I never knew my dog had such complex emotions. This app is a game-changer.',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4 italic">"{testimonial.text}"</p>
            <p className="font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
