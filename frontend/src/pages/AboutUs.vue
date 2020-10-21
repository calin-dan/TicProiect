
<template>
  <div class="wrap">
    <div class="tile">
      <div class="text">
        <h5>About our clinics.</h5>
        <div class="img-logo">
          <img src="../../public/icons/questions.png" id="aboutus-img" />
        </div>

        <p class="animate-text">
          The Berri Medical Clinic is an AGPAL accredited General Practice that
          has been providing quality medical care since 1980. Onsite we now have
          10 doctors and 8 nurses offering a comprehensive range of general
          practice services including hospital inpatient care and obstetrics.
          Together our team of doctors bring a broad spectrum of experience and
          professional expertise and continually undertake professional
          development education to remain up to date with the latest in medical
          treatment options.
        </p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="tile">
      <div class="text">
        <h5>More lorem ipsum bacon ipsum.</h5>
        <img src="../../public/icons/certification.png" id="aboutus-img" />
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
      <div class="text">
        <h5>More lorem ipsum bacon ipsum.</h5>
        <img src="../../public/icons/doctor.png" id="aboutus-img" />
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
  background-image: linear-gradient(to right bottom, #897ab9, #473d69);
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
  background-image: linear-gradient(to right bottom, #897ab9, #473d69);
}
.tile h1 {
  font-weight: 300;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.tile h5 {
  font-weight: 100;
  /* margin: 20px 0 0 0; */
  font-style: italic;
  /* transform: translateX(200px); */
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
@media (min-width: 1001) and(max-width: 1025px) {
  .wrap {
    margin-left: 12%;
  }
}

#aboutus-img {
  margin-left: 23%;
  margin-top: 40%;
  height: 200px;
  width: 200px;
}
</style>