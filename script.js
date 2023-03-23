console.log('script.js loaded');



async function getHTB(){
  const response = await fetch('/HTB');
  let data = await response.json();
  console.log("Data received and returned");
  return data;
}

async function purify(){
  let data = await getHTB();

  let name = data.profile.name;
  document.querySelector('#name').textContent = name;

  let rank_type = data.profile.rank;
  document.querySelector('#rank_type').textContent = rank_type;

  let points = data.profile.points;
  document.querySelector('#points').textContent = points;
  
  let progress = data.profile.current_rank_progress;
  document.querySelector('#progress').textContent = progress;

  let users_owns = data.profile.user_owns;
  document.querySelector('#users_owns').textContent = users_owns;

  let systems_owns = data.profile.system_owns;
  document.querySelector('#systems_owns').textContent = systems_owns;

  let rank_number = data.profile.ranking;
  document.querySelector('#rank_number').textContent = rank_number;

  let next_rank_points = data.profile.next_rank_points;
  document.querySelector('#next_rank_points').textContent = next_rank_points;
}


getHTB()
purify()

