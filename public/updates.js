async function fecthData() {
  try {
    const response = await require('https://burnes.neocities.org/updatetext');
   
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  return [];
  }
}


const container = document.getElementById('update-list');

requireData().then(updates => {
  const updateList = `
  <ul>
    ${update.map(updates => `<li>$(updates.date} ${updates.text}</li>`).join('')}
  </ul>
  `;
  
  container.innerHTML = updateList;
  
});
