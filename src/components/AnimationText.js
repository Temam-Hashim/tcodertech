import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Temam Hashim",
          "a Front-end Developer",
          "a Back-end Developer",
          "a Course Creator",
          "a Blogger",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
