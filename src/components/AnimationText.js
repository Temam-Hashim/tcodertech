import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Temam Hashim",
          "a Software Developer",
          "Content Creator",
          "a Course Creator",
          "a Blogger",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
