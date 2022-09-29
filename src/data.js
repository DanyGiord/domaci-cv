export const data = {
  info: {
    name: "Marko",
    surname: "Petrovic",
    adress: {
      country: "Serbia",
      city: "Belgrade",
      street: "Jurija Gagarina",
      number: 23,
    },
    phone: "060454651",
    img: "profile.png",
  },
  education:
  {
    title: " Visoka ITS skola Beograd",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
    time: {
      from: {
        year: 2006,
      },
      to: {
        year: 2010,
      },
    },
  },
  education2: {
    title: " Code by Comtrade",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
    time: {
      from: {
        day: 25,
        month: 2,
        year: 2009,
        now: 'now',
      },
    },
  },

  projects:
  {
    title: " Order Online App",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
    time: {
      year: 2009,
      month: 6,
    },
  },
  title2: {
    title: " Visoka ITS skola Beograd",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
    time: {
      from: {
        year: 2006,
      },
      to: {
        year: 2008,
      },
    },
  },
  skills: {
    a: {
      title: "Html",
      perc: 100,
    },
    b: {
      title: "CSS",
      perc: 100,
    },
    c: {
      title: "JavaScript",
      perc: 80,
    },
    d: {
      title: "React",
      perc: 70,
    },
  },
  hobbies: {
    hobbie1: "JavaScript",
    hobbie2: "REACT",
    hobbie3: "NODE.js",
    hobbie4: "MONGODB",
  },
};

// function renderInfo({ name, surname, adress, phone, img }) {
//   //   var name = info.name;
//   //   var surname = info.surname;
//   //   var adress = info.adress;
//   //   var phone = info.phone;
//   //   var img = info.img;

//   //     var { name, surname, adress, phone, img } = info;       // destroktuiranje objekata

//   //   var ispis = `<img src="images/${img}" alt="${name}" />          // ovo je preko STRINGA
//   // <h1>${name} ${surname}</h1>
//   // <div>
//   //   <span><i class="fas fa-home"></i>${adress.street} ${adress.number}</span><br />
//   //   <span><i class="fas fa-flag"></i>${adress.city} ${adress.country}</span><br />
//   //   <span><i class="fas fa-mobile-alt"></i> ${phone}</span>
//   // </div>`;

//   //   document.getElementById("info").innerHTML = ispis;

//   var div = document.createElement("div");
//   div.innerHTML = ` <span><i class="fas fa-home"></i>${adress.street} ${adress.number}</span><br />
//   <span><i class="fas fa-flag"></i>${adress.city} ${adress.country}</span><br />
//   <span><i class="fas fa-mobile-alt"></i> ${phone}</span>`;
//   var naslov = document.createElement("h1");
//   naslov.textContent = name + " " + surname;
//   var slika = document.createElement("img");
//   slika.setAttribute("src", "images/" + img);
//   slika.setAttribute("alt", name);
//   document.getElementById("info").append(slika, naslov, div);
// }
// function renderSection(data, targetSelector) {
//   var element = document.querySelector(targetSelector);
//   for (let i = 0; i < data.length; i++) {
//     element.innerHTML += renderArtical(data[i]);
//   }
// }

// function getStringFromTime(time) {
//   let ispis = "";
//   if (time.day) ispis += `${time.day}. `;
//   if (time.month) ispis += `${time.month}. `;
//   if (time.year) ispis += `${time.year}.`;

//   return ispis;
// }

// function renderArtical({ title, desc, time }) {
//   var timsIspis = `<div class="row article">
//   <div class="col-3 time">`;

//   if (!time.from) {
//     timsIspis += getStringFromTime(time);
//   } else {
//     timsIspis += getStringFromTime(time.from);
//     timsIspis += " - ";
//     if (!time.to) {
//       timsIspis += "now";
//     } else {
//       timsIspis += getStringFromTime(time.to);
//     }
//   }

//   timsIspis += `</div>`;

//   timsIspis += ` <div class="col-9 article-content">
//   <h3>${title}</h3>
//   <p>
//     ${desc}
//   </p>
//     </div>
//     </div>`;

//   return timsIspis;
// }

// function render(data) {
//   renderInfo(data.info);
//   renderSection(data.education, "#education");
//   renderSection(data.projects, "#projects");
//   renderVestine(data.vestine);

// }
// render(data);
