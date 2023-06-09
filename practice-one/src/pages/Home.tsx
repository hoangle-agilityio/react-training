import TopNav from "../components/TopNavigation/TopNav";
import Button from "../components/Button/Button";
import SocialIcon from "../components/SymbolIcon/SocialIcon";
import ContactInfo from "../components/SymbolIcon/ContactInfo";
import Footer from "../components/Footer/Footer";

type Feature = {
  id: number;
  title: string;
  content: string;
}

type Partner = {
  id: number;
  name: string;
  content: string;
  imageInfo: {
    srcImg: string;
    altImg: string;
  };
}

type Price = {
  id: number;
  title: string;
  subTitle: string;
  price: number;
}

interface HomeProps {
  priceList: Array<Price>;
}

const featureList: Array<Feature> = [
  {
    id: 1,
    title: "The best products start with Sketch",
    content: "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 2,
    title: "Fastest way to organize",
    content: "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 3,
    title: "Work better together",
    content: "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
];

const partnerList: Array<Partner> = [
  {
    id: 1,
    name: "Client Name",
    content: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    imageInfo: {
      srcImg: "/src/assets/icons/apiary-icon.svg",
      altImg: "apiary icon",
    }
  },
  {
    id: 2,
    name: "Client Name",
    content: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    imageInfo: {
      srcImg: "/src/assets/icons/android-icon.svg",
      altImg: "android icon",
    }
  },
  {
    id: 3,
    name: "Client Name",
    content: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    imageInfo: {
      srcImg: "/src/assets/icons/basecamp-icon.svg",
      altImg: "basecamp icon",
    }
  },
  {
    id: 4,
    name: "Client Name",
    content: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    imageInfo: {
      srcImg: "/src/assets/icons/basecamp-icon.svg",
      altImg: "basecamp icon",
    }
  },
  {
    id: 5,
    name: "Client Name",
    content: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    imageInfo: {
      srcImg: "/src/assets/icons/airbnb-icon.svg",
      altImg: "airbnb icon",
    }
  },
  {
    id: 6,
    name: "Client Name",
    content: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    imageInfo: {
      srcImg: "/src/assets/icons/appstore-icon.svg",
      altImg: "appstore icon",
    }
  }
];

export default function Home({ priceList }: HomeProps) {
  return (
    <>
      <header className="header">
        <TopNav />

        <div className="banner">
          <h2 className="banner__heading heading">
            Lightning fast prototyping
          </h2>
          <p className="banner__desc desc">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <img src="../src/assets/images/browser-screen.png" alt="browser screen" className="banner__img" />

          <Button
            typeButton="button"
            size="md"
            buttonColor="info"
            label="Try For Free"
            customize="banner__btn" />
        </div>
      </header>
      <main>
        <div className="features">
          <h3 className="features__sub-heading font--xl">At your fingertips</h3>
          <h2 className="features__heading heading">Features</h2>
          <p className="features__desc desc">Most calendars are designed for teams. Slate is designed for freelancers</p>
          <div className="features__wrapper">
            {featureList.map(feature => (
              <div key={feature.id} className="features__inner">
                <div className="features__header">
                  <div className="features__icon"></div>
                  <h3 className="features__title font--xl">{feature.title}</h3>
                </div>
                <p className="features__content font--lg">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prototyping">
          <h2 className="prototyping__heading heading">Lightning fast prototyping</h2>
          <p className="prototyping__desc desc">Most calendars are designed for teams. Slate is designed for freelancers</p>

          <Button
            typeButton="button"
            size="md"
            buttonColor="info"
            label="Try For Free"
          />

          <img src="../src/assets/images/laptop-img.png" alt="Lightning fast prototyping" className="prototyping__img" />
        </div>

        <div className="newsletter">
          <h3 className="newsletter__sub-heading font--xl">At your fingertips</h3>
          <h2 className="newsletter__heading heading">Newsletter </h2>
          <h3 className="newsletter__title font--xl">Subscribe to our Newsletter</h3>
          <p className="newsletter__content font--lg">Available exclusivery on Figmaland</p>
          <form className="newsletter__form">
            <input type="email" placeholder="Your Email" name="your-email" className="newsletter__email" />

            <Button
              typeButton="submit"
              buttonColor="danger"
              label="Subscribe"
              customize="newsletter__btn"
            />
          </form>
        </div>

        <div className="partners">
          <h2 className="partners__heading heading">Partners</h2>
          <p className="partners__desc desc">Most calendars are designed for teams. Slate is designed for freelancers</p>

          <div className="partners__wrapper">
            {partnerList.map(partner => (
              <div key={partner.id} className="partners__item">
                <p className="partners-item__name">{partner.name}</p>
                <img src={partner.imageInfo.srcImg} alt={partner.imageInfo.altImg} className="partners-item__icon" />
                <p className="partners-item__content font--lg">{partner.content}</p>
              </div>
            ))}
          </div>

          <Button
            typeButton="button"
            size="md"
            buttonColor="info"
            label="Try For Free"
            customize="partners__btn"
          />
        </div>

        <div className="testimonials">
          <h2 className="testimonials__heading heading">Testimonials</h2>
          <div className="testimonials__wrapper">
            <div className="testimonials__icon" />
            <p className="testimonials__content">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div className="testimonials__customers">
              <img src="/src/assets/images/customer.png" alt="customer" className="customers__img" />
              <div className="customers__info">
                <p className="customers__title">Organize across</p>
                <p className="customers__sub-title">Ui designer</p>
              </div>
            </div>
          </div>

          <Button
            typeButton="button"
            size="md"
            buttonColor="info"
            label="More Testimonials"
            customize="testimonials__btn"
          />
        </div>

        <div className="pricing">
          <h2 className="pricing__heading heading">Pricing</h2>
          <p className="pricing__desc desc">Most calendars are designed for teams.
            Slate is designed for freelancers</p>
          <div className="pricing__wrapper">
            {priceList.map(item => (
              <div key={item.id} className="pricing__item">
                <h3 className="pricing__title font--xl">{item.title}</h3>
                <p className="pricing__sub-title">{item.subTitle}</p>
                <div className="pricing__info">
                  <p className="pricing__price">{item.price}</p>
                  <div className="pricing__suffix">
                    <p className="pricing__currency font--xl">$</p>
                    <p className="pricing__per-month">Per Month</p>
                  </div>
                </div>

                <Button
                  typeButton="button"
                  size="lg"
                  buttonColor="info"
                  label="Order Now"
                  customize="pricing__btn"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="contact">
          <h2 className="contact__heading heading">Contact Us</h2>
          <p className="contact__desc desc">Most calendars are designed for teams. Slate is designed for freelancers</p>
          <div className="contact__wrapper">
            <div className="contact-info">
              <div className="contact__social-icon">
                <SocialIcon />
              </div>
              <ContactInfo />
            </div>
            <form className="contact__form">
              <input type="text" name="your-name" placeholder="Your Name" className="contact-form__name font--sm" />
              <input type="email" name="your-email" placeholder="Your Email" className="contact-form__email font--sm" />
              <textarea className="contact-form__message font--sm" name="your-message" placeholder="Your Message" />

              <Button
                typeButton="submit"
                size="md"
                buttonColor="danger"
                label="Send"
              />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

Home.defaultProps = {
  priceList: [
    {
      id: 1,
      title: "Free",
      subTitle: "Organize across all apps by hand",
      price: 0,
    },
    {
      id: 2,
      title: "Standard",
      subTitle: "Organize across all apps by hand",
      price: 10,
    },
    {
      id: 3,
      title: "Business",
      subTitle: "Organize across all apps by hand",
      price: 99,
    },
  ]
}
