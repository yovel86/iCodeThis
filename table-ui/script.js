const entries = document.querySelector('#entries');

const data = [
  {
    firstName: 'Manuel',
    lastName: 'Sutton',
    email: 'usike@edu.net',
    createdAt: '09-06-2016'
  },
  {
    firstName: 'Daisy',
    lastName: 'Kelly',
    email: 'ho@kpeuf.edu',
    createdAt: '24-10-2018'
  },
  {
    firstName: 'Shane',
    lastName: 'Underwood',
    email: 'afawi@senod.edu',
    createdAt: '16-02-2020'
  },
  {
    firstName: 'Ray',
    lastName: 'Wise',
    email: 'vebgelmo@ven.co.uk',
    createdAt: '05-10-2021'
  },
  {
    firstName: 'Manuel',
    lastName: 'Sutton',
    email: 'usike@edu.net',
    createdAt: '09-06-2016'
  },
  {
    firstName: 'Daisy',
    lastName: 'Kelly',
    email: 'ho@kpeuf.edu',
    createdAt: '24-10-2018'
  },
  {
    firstName: 'Shane',
    lastName: 'Underwood',
    email: 'afawi@senod.edu',
    createdAt: '16-02-2020'
  },
  {
    firstName: 'Ray',
    lastName: 'Wise',
    email: 'vebgelmo@ven.co.uk',
    createdAt: '05-10-2021'
  }
]

function injectDataIntoTable(data) {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  data.forEach(d => {
    const template = `
          <tr>
						<td>${d.firstName}</td>
						<td>${d.lastName}</td>
						<td>${d.email}</td>
						<td>${d.createdAt}</td>
						<td>
							<button>Go to workplace</button>
						</td>
					</tr>
    ` 
    tableBody.insertAdjacentHTML('beforeend', template);
  });
}

injectDataIntoTable(data.slice(0, 4));

entries.onchange = () => {
  const slicedData = data.slice(0, entries.value);
  injectDataIntoTable(slicedData);
}