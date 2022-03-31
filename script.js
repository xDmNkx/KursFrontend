// PROJEKTY

// stała allCItems, przechowująca tablicę ("[el1,el2]") wszyskich klas .cItem w #projects
const allcitem = document.querySelectorAll("#projekty .citem");
// wyciągamy każdy .cItem osobno
console.log(allcitem)
allcitem.forEach( citem => {
    // każdemu po kliknięciu dodajemy funkcję strzałkową
  citem.onclick = () => {
    // usuń klasę .active ze wszystkich elemenyów
    allcitem.forEach( citem2 => {
      citem2.classList.remove("active")
     })
     // do klikniętego elementu dopisz klasę ".active"
     citem.classList.add("active")
    }
})