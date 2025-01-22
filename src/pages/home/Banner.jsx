import bannerImg from "../../assets/banner.png";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full items-center md:justify-end">
        <img src={bannerImg} alt="banner img" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Release This Week
        </h1>
        <p className="mb-10">
          I&apos;m baby subway tile vibecession cardigan, pinterest enamel pin
          ramps pour-over woke +1 prism. Cornhole messenger bag try-hard DSA
          banh mi tacos portland raclette lyft organic sartorial mlkshk.
          Crucifix hashtag messenger bag, tonx glossier af semiotics plaid
          chartreuse affogato retro. Chillwave neutral milk hotel trust fund pok
          pok.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;
