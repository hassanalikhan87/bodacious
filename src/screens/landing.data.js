import ProjectImg1 from "../assets/img/projects/1.png";
import ProjectImg2 from "../assets/img/projects/2.png";
import ProjectImg3 from "../assets/img/projects/3.png";
import ProjectImg4 from "../assets/img/projects/4.png";
import ProjectImg5 from "../assets/img/projects/5.png";
import ProjectImg6 from "../assets/img/projects/6.png";

import ClientLogo01 from "../assets/img/clients/logo01.svg";
import ClientLogo02 from "../assets/img/clients/logo02.svg";
import ClientLogo03 from "../assets/img/clients/logo03.svg";
import ClientLogo04 from "../assets/img/clients/logo04.svg";
import ClientLogo05 from "../assets/img/clients/logo05.svg";
import ClientLogo06 from "../assets/img/clients/logo06.svg";

export const landingData = {
  navigation: {
    main: [
      { text: "Company", to: "company" },
      { text: "Services", to: "services" },
      { text: "Portfolio", to: "portfolio" },
      { text: "Testimonials", to: "testimonials" },
      { text: "Contact", to: "contact" },
    ],
    side: [{ text: "Get Started", href: "/" }],
  },
  company: {
    id: "company",
    mainHeading: "We are Software Company.",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    cta: {
      text: "Get Started",
    },
    quote: {
      text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
      author: "Ralph Waldo Emerson",
    },
  },
  services: {
    id: "services",
    mainHeading: "Our Awesome Services",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut \n labore et dolore magna aliquyam erat, sed diam voluptua.",
    servicesList: [
      {
        icon: "roller",
        title: "Graphic Design",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        icon: "monitor",
        title: "Web Design",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      },
      {
        icon: "browser",
        title: "Development",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        icon: "printer",
        title: "Print",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      },
      {
        icon: "roller",
        title: "Graphic Design",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        icon: "browser",
        title: "Development",
        subtitle:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
    ],
    clientsList: [
      { alt: "Client Logo 1", src: ClientLogo01 },
      { alt: "Client Logo 2", src: ClientLogo02 },
      { alt: "Client Logo 3", src: ClientLogo03 },
      { alt: "Client Logo 4", src: ClientLogo04 },
      { alt: "Client Logo 5", src: ClientLogo05 },
      { alt: "Client Logo 6", src: ClientLogo06 },
      { alt: "Client Logo 7", src: ClientLogo01 },
      { alt: "Client Logo 8", src: ClientLogo02 },
      { alt: "Client Logo 9", src: ClientLogo03 },
      { alt: "Client Logo 10", src: ClientLogo04 },
      { alt: "Client Logo 11", src: ClientLogo05 },
      { alt: "Client Logo 12", src: ClientLogo06 },
      { alt: "Client Logo 13", src: ClientLogo01 },
      { alt: "Client Logo 14", src: ClientLogo02 },
      { alt: "Client Logo 15", src: ClientLogo03 },
      { alt: "Client Logo 16", src: ClientLogo04 },
      { alt: "Client Logo 17", src: ClientLogo05 },
      { alt: "Client Logo 18", src: ClientLogo06 },
      { alt: "Client Logo 19", src: ClientLogo01 },
      { alt: "Client Logo 20", src: ClientLogo02 },
      { alt: "Client Logo 21", src: ClientLogo03 },
      { alt: "Client Logo 22", src: ClientLogo04 },
      { alt: "Client Logo 23", src: ClientLogo05 },
      { alt: "Client Logo 24", src: ClientLogo06 },
    ],
  },
  portfolio: {
    id: "portfolio",
    mainHeading: "Our Awesome Projects",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut \n labore et dolore magna aliquyam erat, sed diam voluptua.",
    projectsList: [
      {
        img: ProjectImg1,
        title: "Graphic Design",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        img: ProjectImg2,
        title: "Web Design",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
      },
      {
        img: ProjectImg3,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg4,
        title: "Print",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      },
      {
        img: ProjectImg5,
        title: "Graphic Design",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        img: ProjectImg6,
        title: "Development",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
    ],
  },
  testimonials: {
    id: "testimonials",
    mainHeading: "What They Say?",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\nlabore et dolore magna aliquyam erat, sed diam voluptua.",
    testimonialsList: [
      {
        text: "Our team loves Bodacious Bulls for its ease of use and powerful capabilities. Their support is always prompt and efficient. It's a vital tool for our growth.",
        author: "Quaid-e-Azam",
      },
      {
        text: "Switching to Bodacious Bulls was a game-changer for our company. The platform is user-friendly, and their support team is outstanding. Our productivity has soared!",
        author: "Umar Farooq",
      },
      {
        text: "Bodacious Bulls' platform is a powerhouse for managing our operations. The exceptional support and innovative features have exceeded our expectations.",
        author: "John Snow",
      },
      {
        text: "Bodacious Bulls offers a seamless, scalable solution that grows with our business. Their dedication to customer success is unmatched. We couldn't be happier!",
        author: "Hassan Cheema",
      },
      {
        text: "Bodacious Bulls' SaaS platform has revolutionized our workflow with its intuitive interface and robust features. Their exceptional customer support and seamless scalability make them an invaluable partner. Highly recommended for any business looking to enhance efficiency and drive growth!",
        author: "Hassan Ali Khan",
      },
      {
        text: "Bodacious Bulls' platform has simplified our processes and boosted our efficiency. The support team is fantastic and always ready to help. Highly recommend!",
        author: "Steve Jobs",
      },
      {
        text: "Using Bodacious Bulls has streamlined our operations significantly. The platform's features are top-notch, and the customer service is always responsive and helpful.",
        author: "Hashim Raza",
      },
      {
        text: "Bodacious Bulls has been a game-changer for our team. The platform's efficiency and stellar customer support have made a significant impact on our productivity.",
        author: "Elon Musk",
      },
      {
        text: "The seamless integration and user-friendly interface of Bodacious Bulls have revolutionized our workflow. Their customer service is consistently excellent.",
        author: "Bill Gates",
      },
      {
        text: "Our business has thrived since adopting Bodacious Bulls. The intuitive platform and outstanding customer support are indispensable to our success.",
        author: "Jeff Bezos",
      },
    ],
  },
};
