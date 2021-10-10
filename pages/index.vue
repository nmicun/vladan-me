<template>
  <div>
    <SocialHead
      :title="'Vladan Mihailovic'"
      :description="'Profesor sporta i fizicke kulture. Personalni trener. Spremanje sportista i rekreativaca'"
      :image="'https://vladan.me/glavnaslika.jpg'"
    />
   

    <b-container fluid style="padding:0px">
            <b-row>
     <b-col cols="2" class="testa d-none d-lg-block" style="width:100%; padding:0px">
       <b-container class="sticky-top" style="padding:0px">
       <navbarcomp/>
    <Menidesni/>
       </b-container>  
    </b-col>

<b-col cols="12" sm="12" md="12" lg="10" xl="10" class="radna-povrsina" style="padding:0px">

<div class="navbar-top d-block d-lg-none" >
<b-container fluid >
     <b-row>
  
    <b-col cols="4" style="background-color:#4267b2" class="text-center" >
      <a href="https://m.facebook.com/vladanfitness">
      <span  style="backgrund-color:#a93690; color:white; font-size:24px">
        <font-awesome-icon :icon="['fab','facebook-square']"/>
    </span>
      </a>
    
    </b-col>
  
  
    <b-col cols="4" class="text-center" style="background-color:#a93690"><span  style="color: white; font-size:24px" class="justify-content=center">
      <a style="color:white" href="https://www.instagram.com/mihailovic.vladan/">  <font-awesome-icon :icon="['fab','instagram-square']"/></a>
    </span></b-col>
    <b-col cols="4" class="text-center" style="background-color:#7d51a0"><span class="ml-auto" style="color: white; font-size:24px ">
        <a style="color:white" href="tel:+38267226117"><font-awesome-icon :icon="['fab','viber']"/></a>
    </span></b-col>
     </b-row>
</b-container>
</div>
    <b-img src="/glavnaslika.jpg" fluid alt="Responsive image" style="margin-top:0px;"></b-img>

<Sertifikatilg class="d-none d-lg-block"/>
<Sertifikati class="d-lg-none"/>

<h1 class="naslovi-gl">Riječ, dvije, mojih klijenata...</h1>
<Recezentilg/>
<Recezentimob/> 
   
<div>
  <b-modal hide-footer   id="modal-sportisti" scrollable title="Profesionalni sportisti">
  <b-img center style="height:60%" src="https://media.giphy.com/media/HYUVGMZNkg7brdTMYb/giphy.gif?cid=790b7611fdede4850206ca2b5edf064d783b7ba15336289f&rid=giphy.gif&ct=g"/>
    <p class="my-4">
      {{sportistidata}}
    </p>
  </b-modal>

  <b-modal hide-footer  id="modal-onlinetrening" scrollable title="Online treninzi">
<b-img src="/exercise.png" fluid alt="Responsive image" center style="height:50%"/>
    <p class="my-4">
      {{onlinetrening}}
    </p>
  </b-modal>

  <b-modal hide-footer   id="modal-rekreativci" scrollable title="Priprema rekreativaca">
    <p class="my-4">
      {{rekreativci}}
    </p>
  </b-modal>

  <b-modal hide-footer  id="modal-treneri" scrollable title="Obuka personalnih trenera">
    <p class="my-4">
      {{treneri}} <br/> {{treneri1}} <br/> {{treneri2}}<br/> {{treneri3}}<br/> {{treneri4}}<br/> {{treneri5}}
    </p>
  </b-modal>

</div>
</b-col>
  </b-row>
    </b-container>
      <Menifooter/>
  
  
  </div>
</template>

<script>
 
import navbarcomp from '../components/navbarcomp.vue'
import Menidesni from  '../components/Menidesni.vue'
import Sertifikatilg from '../components/Sertifikatilg.vue'
import CardRecenzije from  '../components/CardRecenzije.vue'
export default {
  components: { navbarcomp, Menidesni },
  data(){
return {
sportistidata: 'Podizanje performansi i motoričkih sposobnosti kako vrhunskih tako i mladih sportista, moguća je saradnja tokom pripremnog perioda kao i tokom cijele sezone.  Testiranja prilagođena za sportistu, vršimo izradu plana i njegovu relizaciju.',
onlinetrening: 'Uz pomoć aplikacije, Personal trainer, koju smo specijalno  razvili za online klijente, rad sa rekrativcima/sportistima je postao nikad lakši. Klijent dobija jasan plan i program uz odgovrajući plan ishrane. Svaka vježba ima objašnjenje i video kako se pravilno izvodi, tako da klijent ima uz pomoć ove aplikacije personalnog trenera u telefonu. Ovo je najpovoljni oblik saradnje.',
rekreativci: 'Nakon početnih testova koje radim sa svakim rekreativcem, radi se plan po kojem se izvode treninzi. Posebno bih naglasio da sam više fokusiran na funkcionalni i zdrastveni aspekt treninga kod rekretivaca, uz doziranu  redukciju tjelesne mase, takođe uz propratno smanjivanje i uklanjanje bolova u određenom dijelu tijela.',
treneri: 'Obuka za trenera prvenstveno je prilagođena za mlade trenere koji počinju sa radom. Obuka između ostalog obuhvata: ',
treneri1: '- kompletnu strukturu samog treninga',
treneri2: '- metodiku obuke pojedinih vježbi',
treneri3: '- planiranie treninga',
treneri4: '- programiranje i doziranje',
treneri5: 'Stručnu podršku u trajanju od 6 mjeseci.',
}
},
  }
</script>

<style scoped>

.naslovi-gl {
        font-size: calc(1rem + 1.5vw);
        padding: 20px;
        text-align:center;
        color: rgb(255 89 89);
        text-shadow:1px 1px 1px black;}



.master-text {
        font-size: 0.9vw;
        text-align:center;
        color:white;
        text-shadow:1px 1px 1px black;}

.imeprofila {
        font-size: 1.2vw;
        margin: 10px;
        text-align: center;
        font-weight: bold;
        color: white;
        line-height: normal;
        text-shadow: 1px 1px 1px black;
    }

  .testa {
        background-color: #0b7e6e;
        min-height: 100vh;
     }

.rec-ime-txt {
  font-weight: bold;
}

.rec-sport-txt {
  font-style: italic;
}
.headeri-txt {
  color:white;
  font-weight: 700;
text-transform: none;
text-decoration:double;
font-size: calc(1rem + 1.5vw);
letter-spacing: 1px;
line-height: 1.3em;
font-family: sans-serif;
}


.footer-menu {
  position: fixed;
   z-index: 100;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: black 1px;
}

.navbar-top {
  top:0;
  left:0;
  width:100%;
   z-index: 100;
}

.citat-txt{
font-size: 15px;
font-style:italic;

}

</style>

