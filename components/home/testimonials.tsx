import Image from 'next/image';

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    text: "EmotiPaw helped me understand my cat's needs better. It's amazing!",
    image: '/images/sarah.jpg',
  },
  {
    name: 'John D.',
    text: 'I never knew my dog had such complex emotions. This app is a game-changer.',
    image: '/images/john.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
