import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag: "Full-time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag: "Full-time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Backend Developer",
      tag: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Data Engineer",
      tag: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag: "Full-time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Architect",
      tag: "Full-time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag: "Full-time",
      tag2: "Junior Level",
      pay: "$72/hr",
      location: "Palo Alto, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "3 days ago",
      post: "AI Researcher",
      tag: "Full-time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Santa Clara, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdQi0yohiPRpm5Twf9hluWmgMe8smBh6Mcg&s",
      companyName: "IBM",
      datePosted: "6 days ago",
      post: "DevOps Engineer",
      tag: "Part-time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag: "Part-time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "San Jose, USA",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.companyName}
            post={elem.post}
            logo={elem.brandLogo}
            tag1={elem.tag1}
            tag2={elem.tag2}
            price={elem.pay}
            location={elem.location}
            date={elem.datePosted}
          />
        );
      })}
    </div>
  );
};

export default App;
