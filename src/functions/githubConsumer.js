const user = 'devmatheusguerra'

async function getUser () {
  const response = await fetch(`https://api.github.com/users/${user}`)
  if (response.status != 200) {
    const response_backup = await fetch(`https://agencia4devs.com/devmatheusguerra.github.io/api.php?r=user`);
    const data = await response_backup.json()
    return data
  }
  const data = await response.json()
  return data
}

async function getRepositories () {
  const response = await fetch(`https://api.github.com/users/${user}/repos`)
  if (response.status != 200) {
    return 'Error'
  }
  const data = await response.json()
  return data
}

async function getLanguage (repo_name) {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repo_name}/languages`
  )
  if (response.status != 200) {
    return 'Error'
  }
  const data = await response.json()
  return data
}

async function getMetricsFromAnotherServer () {
  const response = await fetch(
    `https://agencia4devs.com/devmatheusguerra.github.io/api.php?r=data`
  )
  const data = await response.json()
  return data
}

async function getMetrics () {
  let langs = {}
  const repositories = await getRepositories()
  if (repositories == 'Error') {
    // Consumir de outra forma
    const langs = await getMetricsFromAnotherServer()
    return langs
  }
  repositories.forEach(async repository => {
    const languages = await getLanguage(repository.name)
    if (languages == 'Error') {
      // Consumir de outra forma
      const langs = await getMetricsFromAnotherServer()
      return langs
    }
    // console.table(languages)
    languages.forEach((language, name) => {
      if (langs[name]) {
        langs[name] += language
      } else {
        langs[name] = language
      }
    })
  })

  return langs;
}

const Github = {
  getMetrics: getMetrics, 
  getUser: getUser
}

module.exports = Github;