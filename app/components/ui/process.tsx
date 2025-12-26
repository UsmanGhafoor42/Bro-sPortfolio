import Image from "next/image";
import about from "@/app/assets/images/about.jpg";
import Badge from "./badge";

const ProcessComponent = () => {
  const items = [
    {
      number: "01",
      title: "Submit Request",
      description:
        "Share your project needs and development goals with us to get started.",
    },
    {
      number: "02",
      title: "Development Process",
      description:
        "Our team develops both front-end and back-end solutions, integrating them to create a seamless web application. You can request revisions or changes as needed.",
    },
    {
      number: "03",
      title: "Final Delivery",
      description:
        "Receive the fully functional web application with all necessary features and adjustments, ready to deploy.",
    },
  ];
  return (
    <section
      id="process"
      className="h-full w-full max-w-7xl flex flex-col md:flex-row justify-between items-center layout gap-10 py-10"
    >
      <div className="h-full w-full md:w-1/3">
        <Image
          src={about}
          alt="about"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-4xl"
        />
      </div>
      <div className="h-full w-full md:w-1/2 flex flex-col justify-start items-start">
        <Badge text="Process" />
        <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium flex flex-wrap justify-start items-center gap-2 py-3">
          How our Full Stack Development service works for you
        </h1>

        {items.map((item) => (
          <div
            key={item.number}
            className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/20 py-4"
          >
            <div className="flex items-center gap-3 sm:gap-0 sm:w-1/5 p-2">
              <h5 className="text-foreground text-sm font-medium">
                {item.number}
              </h5>
              <h3 className="text-foreground text-lg sm:hidden font-medium">
                {item.title}
              </h3>
            </div>
            <div className="hidden sm:flex sm:w-1/3 justify-start items-center p-2">
              <h3 className="text-foreground text-xl md:text-2xl font-medium">
                {item.title}
              </h3>
            </div>
            <div className="w-full sm:w-1/2 flex justify-start items-center p-2">
              <p className="text-foreground/70 text-sm font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessComponent;
