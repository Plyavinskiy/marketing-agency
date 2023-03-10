import React from "react";

const strategies = [
  {
    title: "CONTENT MARKETING",
    description:
      "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
    image: "images/content-marketing.png",
  },
  {
    title: "INBOUND MARKETING",
    description:
      "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
    image: "images/inbound-marketing.png",
  },
  {
    title: "SOCIAL MEDIA",
    description:
      "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
    image: "images/social-media.png",
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
    image: "images/seo.png",
  },
];

function MarketingStrategies() {
  return (
    <div className="sm:px-5">
      <h2 className="text-3xl font-semibold text-primary sm:mt-10">
        Want to boost your business growth?
      </h2>
      <h2 className="text-7xl font-semibold text-primary mt-10 sm:text-5xl">
        The <b className="text-secondary">SOLUTION</b> is here...
      </h2>
      <p className="text-gray-600 text-xl mt-10">
        Curious about what business professionals think of different marketing
        strategies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B marketing
        strategies commonly recognized as successful regardless of industry.
        Here's what we found, in no particular order:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-20 mt-16">
        {strategies.map((strategy) => {
          return (
            <div
              key={strategy.title}
              className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300"
            >
              <h2 className="mx-20 sm:mx-5 text-center -mt-8 bg-white border-primary font-semibold border text-2xl rounded text-secondary py-2">
                {strategy.title}
              </h2>
              <img
                src={strategy.image}
                alt={strategy.title}
                className="h-24 w-24"
              />
              <p className="text-gray-600 text-md hover:text-primary">
                {strategy.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketingStrategies;
