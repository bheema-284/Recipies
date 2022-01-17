async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();
    return data;
  } catch (el) {
    console.log(el);
  }
}

function appendData(data, location) {
  //console.log(typeof data)
  data.meals.forEach((el) => {
      let div = document.createElement("div");
      let p = document.createElement('p');
      p.innerText = el.strMeal;      
      let img = document.createElement('img');
      img.src = el.strMealThumb;
      div.append(img,p)
      location.append(div)
  });
 }



export { getData, appendData };
