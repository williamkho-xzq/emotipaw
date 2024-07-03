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
    image: '/sarah.jpg',
  },
  {
    name: 'John D.',
    text: 'I never knew my dog had such complex emotions. This app is a game-changer.',
    image: '/john.jpg',
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
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
            >
              <div className="mb-4 md:mb-0 md:mr-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
