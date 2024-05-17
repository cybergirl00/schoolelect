
const candidates = [
    {
        name: 'Dikko Rabiat',
        vote: '300'
    },
    {
        name: 'Saliu Mansurat',
        vote: '600'
    },
    {
        name: 'Garba asmau',
        vote: '500'
    },
]
const candidatesData = candidates.map(candidate => ({
    label: candidate.name,
    data: parseInt(candidate.vote), // Convert vote count to integer
}));

export const usersVote = {
    labels:candidatesData.map(candidate => candidate.label),
    datasets: [
        {label: 'votes',
            data:candidatesData.map(candidate => candidate.data),
                       borderColor: 'black',
                       border: 'blue',
                       backgroundColor: 'blue',
                       borderWidth: 1
        }
    ]
}