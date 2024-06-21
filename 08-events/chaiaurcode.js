const insert = document.querySelector('#insert');
const table = document.createElement('div');
window.addEventListener(
  'keydown',
  function (e) {
    table.innerHTML = `
        <table>  
  <tr>
              <th>KEY</th>
              <th>KEYCODE</th>
              <th>CODE</th>
          </tr>
          <tr>
              <td>${e.key}</td>
              <td>${e.keyCode}</td>
              <td>${e.code}</td>
          </tr>
    </table>
  `;
    insert.innerHTML = table;
  },
  false
);
