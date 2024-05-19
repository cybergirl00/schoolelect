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
        "Democracy is a system of government in which power is vested in the people, who rule either directly or through elected representatives. It is a form of political organization that ensures the rights and freedoms of its citizens, promotes equality and justice, and upholds the principles of majority rule and minority rights.",
      link: "https://stripe.com",
      icon: <Vote size={30} />
    },
    {
      title: "Online Voting",
      description:
        "Online voting, a modern electoral innovation, revolutionizes the democratic process by enabling voters to participate in elections conveniently and securely from any location with internet access.",
      link: "https://netflix.com",
      icon: <Newspaper size={30}/>
    },
    {
      title: "Live view Analysis",
      description:
        "Live View and Analysis on Al-Hikmah University's Online Voting Web App provides real-time insights into the electoral process, empowering voters and administrators alike. This cutting-edge feature leverages advanced data visualization techniques to present election results in a clear and intuitive manner. ",
      link: "https://netflix.com",
      icon: <Newspaper size={30}/>
    },
  ];