import Badge from "@/app/components/ui/badge";
import SliderComponent from "./slider";

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
            image: require("@/app/assets/images/licorice4good.com.png"),
            title: "Licorice4Good.com",
          },
          {
            id: 2,
            image: require("@app/assets/images/southernsweetandsour.com_.png"),
            title: "SouthernSweetAndSour.com",
          },
          {
            id: 3,
            image: require("@app/assets/images/licoriceaffiliate.licorice4good.com_.png"),
            title: "licoriceaffiliate.licorice4good.com",
          },
          {
            id: 4,
            image: require("@app/assets/images/megajumpparktickets.com_.png"),
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
