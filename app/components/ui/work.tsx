import Badge from "@/app/components/ui/badge";
import SliderComponent from "./slider";
import licorice4good from "@/app/assets/images/licorice4good.com.png";
import southernsweetandsour from "@/app/assets/images/southernsweetandsour.com_.png";
import licoriceaffiliate from "@/app/assets/images/licoriceaffiliate.licorice4good.com_.png";
import megajumpparktickets from "@/app/assets/images/megajumpparktickets.eu_.png";

const WorkComponent = () => {
  return (
    <section
      id="work"
      className="h-full w-full flex flex-col justify-center items-center layout  py-10"
    >
      <Badge text="Work" />
      <h1 className="text-foreground text-3xl sm:text-4xl md:text-6xl font-medium flex flex-wrap justify-center items-center gap-2 py-7 text-center w-1/2 ">
        Explore our full stack development solutions and projects
      </h1>
      <SliderComponent
        slides={[
          {
            id: 1,
            image: licorice4good,
            title: "Licorice4Good.com",
          },
          {
            id: 2,
            image: southernsweetandsour,
            title: "SouthernSweetAndSour.com",
          },
          {
            id: 3,
            image: licoriceaffiliate,
            title: "licoriceaffiliate.licorice4good.com",
          },
          {
            id: 4,
            image: megajumpparktickets,
            title: "MegajumpParkTickets.com",
          },
          // {
          //   id: 5,
          //   image: "/images/work/5.jpg",
          //   title: "Work 5",
          // },
          // {
          //   id: 6,
          //   image: "/images/work/6.jpg",
          //   title: "Work 6",
          // },
          // {
          //   id: 7,
          //   image: "/images/work/7.jpg",
          //   title: "Work 7",
          // },
          // {
          //   id: 8,
          //   image: "/images/work/8.jpg",
          //   title: "Work 8",
          // },
          // {
          //   id: 9,
          //   image: "/images/work/9.jpg",
          //   title: "Work 9",
          // },
          // {
          //   id: 10,
          //   image: "/images/work/10.jpg",
          //   title: "Work 10",
          // },
        ]}
      />
    </section>
  );
};

export default WorkComponent;
