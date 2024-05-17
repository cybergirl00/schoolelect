import { Vote, Newspaper, LineChart} from 'lucide-react'
import { HoverEffect } from '../ui/animation/card-hover-effect'
const Service = () => {
    const services = [
        {
            name: 'Democracy',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit iusto obcaecati quod. Aspernatur, expedita.',
            icon: <Vote  size={30}/>
        },
        {
            name: 'Election',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit iusto obcaecati quod. Aspernatur, expedita.',
            icon: <Newspaper size={30}/>
        },
        {
            name: 'Something',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit iusto obcaecati quod. Aspernatur, expedita.',
            icon: <LineChart size={30}/>
        },
        {
            name: 'Hello World',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit iusto obcaecati quod. Aspernatur, expedita.',
            icon: <LineChart size={30}/>
        },
    ]
    return (
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
    )
}

export default Service

export const projects = [
    {
      title: "Democracy",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
      icon: <Vote size={30} />
    },
    {
      title: "Online Voting",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
      icon: <Newspaper size={30}/>
    },
    {
      title: "Live view Analysis",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
      icon: <Newspaper size={30}/>
    },
  ];