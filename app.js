let submit=document.querySelector(".submit");
submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`https://drive.google.com/uc?export=view&id=${imageurl}`;


    const data={
        img: generatedurl,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        Gender: document.getElementById("Gender").value,
        skills: document.getElementById("skills").value
    };
    document.querySelector('.alert').style.display = "block";
    console.log(data);
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <img src="${generatedurl}" alt="image">
      <div class="NameContainer">${data.name}</div>
      <a class="NameContainer">${data.email}</a><br>
      <a class="Websitelink">${data.websitelink}</a>
      <div class="SkillContainer">${data.Gender}</div>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    output.appendChild(newlist);
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})