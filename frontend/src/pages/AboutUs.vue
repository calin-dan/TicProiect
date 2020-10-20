<template>
  <div class="wrap">
    <div class="tile">
      <img
        src="https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80"
      />
      <div class="text">
        <h3>Lorem ipsum.</h3>
        <h5 class="animate-text">More lorem ipsum bacon ipsum.</h5>
        <p class="animate-text">
          Clinica Sante este o organizatie privata de asistenta medicala. Scopul
          nostru este acordarea de servicii medicale accesibile si de cea mai
          buna calitate, scop care ghideaza pasii echipei Clinica Sante in
          interactiunea cu pacientii. Valorile noastre cheie sunt performanta,
          respectul, castigarea increderii fiecarui pacient pe care il avem si
          nu in ultimul rand, atingerea celui mai inalt nivel atunci cand vine
          vorba de profesionalism in domeniu. Suntem dedicati pacientilor
          nostri, iar interactiunea cu fiecare dintre ei trebuie sa fie
          intotdeauna conexata cu ideea de perfectiune. Confortul si satisfactia
          pacientilor sunt elemente primordiale pentru noi. Clinica Sante, in
          traiectul sau catre o relatie perfecta cu pacientii, a luat in calcul
          valorizarea celor mai bune sisteme de asistenta medicala din Europa de
          Vest si SUA si astfel, principiile noastre sunt strans legate de a
          oferi cele mai bune servicii fiecarui pacient. Clinica Sante a fost
          infiintata in anul 1995 si inca de atunci ne-am organizat intru
          imbunatatirea relatiei cu pacientii. Fie ca vorbim de cele mai bune
          servicii, de o comunicare totala si eficienta sau de a fi intotdeauna
          acolo pentru a cunoaste, intui si satisface nevoile pacientului,
          Clinica Sante lucreaza pentru fiecare pacient in parte cu toate
          mijloacele de care dispune. In ceea ce priveste raspandirea Clinica
          Sante in Romania, putem sa vorbim despre o acoperire vasta, suntem
          prezenti in toate judetele, unde de altfel suntem si lider de piata,
          iar drumul nostru continua, ne dezvoltam neincetat pentru ca ne dorim
          sa fim aproape de toti pacientii nostri.
        </p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="tile">
      <img
        src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80"
      />
      <div class="text">
        <h1>Lorem ipsum.</h1>
        <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
        <p class="animate-text">
          Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola
          pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin
          turducken.
        </p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="tile">
      <img
        src="https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80"
      />
      <div class="text">
        <h1>Lorem ipsum.</h1>
        <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
        <p class="animate-text">
          Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola
          pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin
          turducken.
        </p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
body {
  background-color: #eee;
}
.wrap {
  margin: 50px auto 0 auto;
  width: 100%;
  display: flex;
  align-items: space-around;
  max-width: 1200px;
}
.tile {
  width: 380px;
  height: 380px;
  margin: 10px;
  background-color: #99aeff;
  display: inline-block;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
  color: white;
  font-family: "Roboto";
}
.tile img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: all 0.4s ease-out;
}
.tile .text {
  /*   z-index:99; */
  position: absolute;
  padding: 30px;
  height: calc(100% - 60px);
}
.tile h1 {
  font-weight: 300;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.tile h2 {
  font-weight: 100;
  margin: 20px 0 0 0;
  font-style: italic;
  transform: translateX(200px);
}
.tile p {
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 25px;
  /*   opacity:0; */
  transform: translateX(-200px);
  transition-delay: 0.2s;
}
.animate-text {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.tile:hover {
  /*   background-color:#99aeff; */
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
  transform: scale(1.05);
}
.tile:hover img {
  opacity: 0.2;
}
.tile:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}
.dots {
  position: absolute;
  bottom: 20px;
  right: 30px;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  color: currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.dots span {
  width: 5px;
  height: 5px;
  background-color: currentColor;
  border-radius: 50%;
  display: block;
  opacity: 0;
  transition: transform 0.4s ease-out, opacity 0.5s ease;
  transform: translateY(30px);
}

.tile:hover span {
  opacity: 1;
  transform: translateY(0px);
}

.dots span:nth-child(1) {
  transition-delay: 0.05s;
}
.dots span:nth-child(2) {
  transition-delay: 0.1s;
}
.dots span:nth-child(3) {
  transition-delay: 0.15s;
}

@media (max-width: 1000px) {
  .wrap {
    flex-direction: column;
    width: 400px;
  }
}
</style>