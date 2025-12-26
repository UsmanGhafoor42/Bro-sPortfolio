"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "./badge";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    message: "So so so good bro thank you. No more comments ❤️",
    avatar: "/avatars/1.jpg",
    link: "https://f.io/WvzQN1JZ",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Founder, DesignLab",
    message:
      "yo this is awesome, can you send me version without the background music?",
    avatar: "/avatars/2.jpg",
    link: "https://f.io/8bjPQub3",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Director",
    message: "Its ok 👍",
    avatar: "/avatars/3.jpg",
    link: "https://f.io/xyz123",
  },
  {
    id: 4,
    name: "Alex Turner",
    role: "Product Manager",
    message:
      "Absolutely incredible work! The attention to detail is unmatched.",
    avatar: "/avatars/4.jpg",
    link: "https://f.io/abc456",
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Creative Director",
    message:
      "This exceeded all my expectations. Will definitely work together again!",
    avatar: "/avatars/5.jpg",
    link: "https://f.io/def789",
  },
];

const TestimonialCard = ({
  testimonial,
  rotation,
}: {
  testimonial: (typeof testimonials)[0];
  rotation: number;
}) => {
  return (
    <div
      className="absolute w-[280px] xs:w-[320px] sm:w-[400px] bg-foreground rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
        {testimonial.message}
      </p>
      <a
        href={testimonial.link}
        className="text-blue-500 text-xs sm:text-sm mt-2 sm:mt-3 inline-block hover:underline truncate max-w-full"
      >
        {testimonial.link}
      </a>
    </div>
  );
};

const TestimonialComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !cardsContainer || cards.length === 0) return;


    gsap.set(cards, {
      y: (i: number) => 600 + i * 100,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${cards.length * 400}`,
        pin: true,
        scrub: 1,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          y: i * -15,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        i * 0.5
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: ScrollTrigger) => t.kill());
    };
  }, []);

  const rotations = [-8, 5, -3, 7, -5];

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-background relative overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="h-full w-full flex flex-col items-center pt-16">
        <Badge text="Testimonials" />
        <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-medium text-center max-w-2xl px-4 mt-4">
          What our premium clients are saying about us
        </h1>

        <div
          ref={cardsContainerRef}
          className="relative mt-8 sm:mt-16 w-full max-w-[340px] sm:max-w-[400px] h-[200px] sm:h-[250px] mx-auto flex items-center justify-center"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`absolute left-0 lg:left-0 sm:left-5  top-1/2 -translate-x-1/2 -translate-y-1/2 z-[${index + 1}]`}
            >
              <TestimonialCard
                testimonial={testimonial}
                rotation={rotations[index % rotations.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
