async function getUser () {
  const response_backup = await fetch(
    `https://agencia4devs.com/devmatheusguerra.github.io/api.php?r=user`
  )
  const data = await response_backup.json()
  return data
}

async function getMetrics () {
  const response = await fetch(
    `https://agencia4devs.com/devmatheusguerra.github.io/api.php?r=data`
  )
  const data = await response.json()
  return data
}

const Github = {
  getMetrics: getMetrics,
  getUser: getUser
}

module.exports = Github
