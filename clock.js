function update_date(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.toLocaleDateString('zh-CN', { weekday: 'long' });

  document.getElementById("date").innerHTML = `${year}年${month}月${dayOfMonth}日 (${dayOfWeek})`;
}

function update_clock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById('hour1').textContent = Math.floor(hours / 10);
  document.getElementById('hour2').textContent = hours % 10;

  document.getElementById('minute1').textContent = Math.floor(minutes / 10);
  document.getElementById('minute2').textContent = minutes % 10;

  document.getElementById('second1').textContent = Math.floor(seconds / 10);
  document.getElementById('second2').textContent = seconds % 10;
}

update_clock();
update_date();
setInterval(update_clock, 1000);
setInterval(update_date, 60000);
