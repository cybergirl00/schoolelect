"use client"
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS,  CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, BarElement} from 'chart.js'
const BarChart = ({election, votes}) => {
  ChartJS.register(
    CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend,BarElement
  )
  const options = {}
  const votesNumber = (candidateName) => {
    const votesForCandidate = votes.filter(vote => vote.voteFor === candidateName);
    return votesForCandidate.length;
  };
  const candidatesData = election?.candidates?.map(candidate => ({
    label: candidate.name,
    data: parseInt(votesNumber(candidate.name)), // Convert vote count to integer
}));
const totalVotesForAminu = votesNumber('Garba Asmau Bello');
console.log(`Total votes for Asmau: ${totalVotesForAminu}`);


  const usersVote = {
    labels:candidatesData.map(candidate => candidate.label),
    datasets: [
        {label: 'votes',
            data: 
            candidatesData.map(candidate => candidate.data)
            ,
                       borderColor: 'black',
                       border: 'blue',
                       backgroundColor: 'blue',
                       borderWidth: 1
        }
    ]
}
  return (
    <div className=''>
      <Bar options={options} data={usersVote}/>
    </div>
  )
}

export default BarChart