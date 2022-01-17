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
  data.categories.forEach((el) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = el.strCategory;
    // let p1 = document.createElement('p');
    // p1.innerText = el.strCategoryDescription;
    let img = document.createElement('img');
    img.src = el.strCategoryThumb;    
    div.append(img, p);

    location.append(div);
  });


}

export { getData, appendData };
