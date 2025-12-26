import Badge from "./badge";
import  FormComponent from "./form";

const ContactComponent = () => {
  return (
    <section id="contact" className="h-full w-full flex flex-col justify-center items-center layout  py-10">
      <Badge text="Contact" />
      <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium flex flex-wrap justify-center items-center gap-2 py-3 text-center w-full sm:w-3/4 md:w-1/2 px-4 sm:px-0">
        Contact us for amazing video editing projects
      </h1>
      <FormComponent />
    </section>
  );
};

export default ContactComponent;
