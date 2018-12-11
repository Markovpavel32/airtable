import _ from 'lodash';

function renderLodash(arr){
  document.getElementById('table').innerHTML = '';
  for(let i = 0; i < arr.length; i++){
    let tmpl = '<tr>\
    <% for (let key in arr) { %> \
      <td class = "cell"><%=arr[key]%></td> \
    <% } %>\
  </tr>';
  document.getElementById('table').innerHTML += _.template(tmpl)({arr: arr[i]});
  }
}

function render(arr){
  document.getElementById('table').innerHTML = '';
  const table = document.getElementById('table');
  for(let i = 0; i < arr.length; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for(let key in arr[i]){
      let td = document.createElement('td');
      td.textContent = arr[i][key];
      td.classList.add('cell')
      tr.appendChild(td);
    }
  }
}

export default render;