import Blog from "../Blog";
import Comontittle from "../Comontittle";
import Places from "../Places";
import Promocod from "../Promocode";
import Review from "../Review";
export default function Home() {
  return (
    <>
      <Promocod />
      <Comontittle
        tottl="Plan your perfect trip"
        midlettl="Search Flights & Places Hire to our most popular destinations"
        btnttl="See more places"
      />
      <Places />
      <Blog />
      <Comontittle
        tottl="Reviews"
        midlettl="What people says about Golobe facilities"
        btnttl="See All"
      />
      <Review />
    </>
  );
}
