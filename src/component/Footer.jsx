import footerlogo from "../assets/footerlogo.png";
import tofrgt from "../assets/tofrgt.png";
import footsty from "../style/Footer.module.css";

export default function Footer() {
  return (
    <section className={footsty.footer}>
      <div className="">
        <div className="container mx-auto cus_container px-3">
          <div className={footsty.toppop}>
            <div className={`grid grid-cols-12 ${footsty.tofoter}`}>
              <div className="lg:col-span-7 col-span-12 px-3">
                <div className={footsty.tof_left}>
                  <h1>
                    Subscribe
                    <br />
                    Newsletter
                  </h1>
                  <h2>The Travel</h2>
                  <p>
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </p>
                  <div className={footsty.emal_adress}>
                    <input
                      type="text"
                      id="emal"
                      className={footsty.emal}
                      placeholder="Your email address"
                    />
                    <div
                      className={`${footsty.emalbtn} ${footsty.comon_allbtnstwo}`}
                    >
                      <button type="button" className={footsty.comonbtn}>
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 col-span-12 px-3">
                <div className={footsty.tof_right}>
                  <img src={tofrgt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="">
        <div className="container mx-auto cus_container px-3">
          <div className={`grid grid-cols-12 ${footsty.f_middle}`}>
            <div
              className={`2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-6 ${footsty.exclusiv}`}
            >
              <div className={footsty.footer_logo}>
                <img src={footerlogo} alt="golobe" />
                <div className={footsty.footer_sblogo}>
                  <a href="#">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 9.05025C0 13.5248 3.24975 17.2455 7.5 18V11.4998H5.25V9H7.5V6.99975C7.5 4.74975 8.94975 3.50025 11.0002 3.50025C11.6497 3.50025 12.3503 3.6 12.9998 3.69975V6H11.85C10.7498 6 10.5 6.54975 10.5 7.25025V9H12.9L12.5002 11.4998H10.5V18C14.7502 17.2455 18 13.5255 18 9.05025C18 4.0725 13.95 0 9 0C4.05 0 0 4.0725 0 9.05025Z"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.7029 2.26137C19.0071 2.5697 18.2596 2.77803 17.4737 2.8722C18.2846 2.38703 18.8912 1.62342 19.1804 0.723866C18.4186 1.17636 17.5849 1.49486 16.7154 1.66553C16.1307 1.04125 15.3563 0.627471 14.5124 0.488428C13.6684 0.349384 12.8022 0.492859 12.0481 0.896577C11.2941 1.30029 10.6944 1.94167 10.3422 2.72112C9.99003 3.50057 9.90503 4.37449 10.1004 5.2072C8.55682 5.1297 7.04677 4.72849 5.66827 4.02962C4.28977 3.33075 3.07362 2.34983 2.09875 1.15053C1.76542 1.72553 1.57375 2.3922 1.57375 3.1022C1.57338 3.74136 1.73078 4.37073 2.03198 4.93448C2.33319 5.49822 2.76888 5.9789 3.30042 6.33387C2.68398 6.31425 2.08114 6.14769 1.54208 5.84803V5.89803C1.54202 6.79448 1.85211 7.66335 2.41974 8.3572C2.98736 9.05105 3.77756 9.52714 4.65625 9.7047C4.0844 9.85946 3.48486 9.88226 2.90292 9.77137C3.15083 10.5427 3.63375 11.2172 4.28406 11.7005C4.93437 12.1837 5.71951 12.4515 6.52958 12.4664C5.15444 13.5459 3.45616 14.1314 1.70792 14.1289C1.39823 14.129 1.08881 14.1109 0.78125 14.0747C2.55581 15.2157 4.62153 15.8212 6.73125 15.8189C13.8729 15.8189 17.7771 9.90387 17.7771 4.77387C17.7771 4.6072 17.7729 4.43887 17.7654 4.2722C18.5248 3.72301 19.1803 3.04295 19.7013 2.26387L19.7029 2.26137Z" />
                    </svg>
                  </a>

                  <a href="#">
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.5829 2.56962C19.4696 2.16564 19.249 1.79991 18.9445 1.51128C18.6314 1.21379 18.2477 1.00098 17.8295 0.892951C16.2645 0.480451 9.99454 0.480451 9.99454 0.480451C7.38065 0.450711 4.7674 0.581513 2.16954 0.872117C1.75136 0.988128 1.36834 1.20569 1.05454 1.50545C0.746204 1.80212 0.522871 2.16795 0.406204 2.56878C0.125949 4.07857 -0.0102189 5.61157 -0.000462243 7.14712C-0.0104622 8.68128 0.125371 10.2138 0.406204 11.7255C0.520371 12.1246 0.742871 12.4888 1.05204 12.783C1.3612 13.0771 1.7462 13.2896 2.16954 13.4021C3.75537 13.8138 9.99454 13.8138 9.99454 13.8138C12.6118 13.8436 15.2283 13.7128 17.8295 13.4221C18.2477 13.3141 18.6314 13.1013 18.9445 12.8038C19.2489 12.5152 19.4693 12.1494 19.582 11.7455C19.8696 10.2362 20.0094 8.70261 19.9995 7.16628C20.0212 5.62345 19.8815 4.08259 19.5829 2.56878V2.56962ZM8.0012 10.0005V4.29462L13.2179 7.14795L8.0012 10.0005Z" />
                    </svg>
                  </a>

                  <a href="#">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.49787 5.66546C6.93707 5.66546 5.66333 6.9392 5.66333 8.5C5.66333 10.0608 6.93707 11.3345 8.49787 11.3345C10.0587 11.3345 11.3324 10.0608 11.3324 8.5C11.3324 6.9392 10.0587 5.66546 8.49787 5.66546ZM16.9994 8.5C16.9994 7.32621 17.01 6.16305 16.9441 4.99138C16.8782 3.63046 16.5677 2.42264 15.5725 1.42747C14.5752 0.430173 13.3695 0.121839 12.0086 0.0559198C10.8348 -0.00999972 9.67167 0.000632496 8.5 0.000632496C7.32621 0.000632496 6.16305 -0.00999972 4.99138 0.0559198C3.63046 0.121839 2.42264 0.432299 1.42747 1.42747C0.430173 2.42477 0.121839 3.63046 0.0559198 4.99138C-0.00999972 6.16517 0.000632496 7.32833 0.000632496 8.5C0.000632496 9.67167 -0.00999972 10.837 0.0559198 12.0086C0.121839 13.3695 0.432299 14.5774 1.42747 15.5725C2.42477 16.5698 3.63046 16.8782 4.99138 16.9441C6.16517 17.01 7.32833 16.9994 8.5 16.9994C9.67379 16.9994 10.837 17.01 12.0086 16.9441C13.3695 16.8782 14.5774 16.5677 15.5725 15.5725C16.5698 14.5752 16.8782 13.3695 16.9441 12.0086C17.0121 10.837 16.9994 9.67379 16.9994 8.5ZM8.49787 12.8613C6.08437 12.8613 4.13655 10.9135 4.13655 8.5C4.13655 6.08649 6.08437 4.13868 8.49787 4.13868C10.9114 4.13868 12.8592 6.08649 12.8592 8.5C12.8592 10.9135 10.9114 12.8613 8.49787 12.8613ZM13.0378 4.97862C12.4743 4.97862 12.0193 4.52356 12.0193 3.96006C12.0193 3.39655 12.4743 2.94149 13.0378 2.94149C13.6013 2.94149 14.0564 3.39655 14.0564 3.96006C14.0565 4.09386 14.0303 4.22639 13.9792 4.35004C13.9281 4.4737 13.853 4.58605 13.7584 4.68067C13.6638 4.77528 13.5515 4.8503 13.4278 4.90143C13.3041 4.95256 13.1716 4.97879 13.0378 4.97862Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-6 ${footsty.exclusiv}`}
            >
              <h5>Our Destinations</h5>
              <p>
                <a href="mailto:exclusive@gmail.com">Benefits</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Cruising & sailing</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Partners</a>
              </p>
            </div>
            <div
              className={`2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-6 ${footsty.exclusiv}`}
            >
              <h5>Our Activities</h5>
              <p>
                <a href="mailto:exclusive@gmail.com">Web Design</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Sri Lanks Travel Guide</a>
              </p>
              <p>
                <a href="tel:+8801588889999">App Development</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Digital Marketing</a>
              </p>
            </div>
            <div
              className={`2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-6 ${footsty.exclusiv}`}
            >
              <h5>Travel Blogs</h5>
              <p>
                <a href="mailto:exclusive@gmail.com">ABC Tech Solutions</a>
              </p>
              <p>
                <a href="tel:+8801588889999">GreenEarth Eco Store</a>
              </p>
              <p>
                <a href="tel:+8801588889999">HealthTech Innovations</a>
              </p>
              <p>
                <a href="tel:+8801588889999">GlobalTech Solutions</a>
              </p>
              <p>
                <a href="tel:+8801588889999">TechGuru Inc.</a>
              </p>
            </div>
            <div
              className={`2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-6 ${footsty.exclusiv}`}
            >
              <h5>About Us</h5>
              <p>
                <a href="mailto:exclusive@gmail.com">Our Team</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Achievements</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Awards</a>
              </p>
            </div>
            <div
              className={`2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 col-span-6 ${footsty.exclusiv}`}
            >
              <h5>Contact Us</h5>
              <p>
                <a href="mailto:exclusive@gmail.com">Job Openings</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Benefits & Perks</a>
              </p>
              <p>
                <a href="tel:+8801588889999">Employee Refral</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
