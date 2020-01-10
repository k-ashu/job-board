var fetch = require('node-fetch')

const baseURL = 'https://jobs.github.com/positions.json'

module.exports = async function fetchGithub(){
  let resultCount = 0, onPage=0;
  const allJobs= []
  do{
    const res = await fetch(`${baseURL}?page=${onPage}`)
    const jobs = await res.json()
    allJobs.push(...jobs)
    resultCount=jobs.length;
    console.log('got', resultCount, 'results')
    onPage++;
  }while (resultCount>0);
}
