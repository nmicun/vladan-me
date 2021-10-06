<template>
  <div class="bg-dark">
    <p style="color:white; font-size: calc(0.6rem + 0.7vw); padding:20px; font-style: italic">"Ispravan odabir i pravilno izvođenje vježbi veoma je važno ukoliko želite dobre rezultate. Bilo da ste profesionalni sportista ili rekreativac, uz stručnu pomoć i posvećen rad uspjeh je siguran." - Vladan Mihailović</p>  
<p style="padding-left:20px; padding-top:0px; color:white; margin-top:5px">Professor of sport and physical education<br/>
CFSC 1&2 Level<br/>
EXOS Performance specialist trainer<br/>
Strenght & Conditioning<br/>
Cerified Functional Trainer <br/>
Pro Basic Coach</p>
  <b-container class="py-4 h-100" style="margin-bottom:5px;">
    <b-carousel
    indicators
    :interval="3000"
    class="h-50"
  >
  
   <b-carousel-slide>
      <template slot="img">
        <b-card class="h-100 m-4"
        img-src="/sertifikati/cft.png">
          CFT1
        </b-card>
      </template>
    </b-carousel-slide>
     <b-carousel-slide>
      <template slot="img">
        <b-card class="h-100 m-4"
        img-src="/sertifikati/exos.png">
          EXOS
        </b-card>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template slot="img">
        <b-card class="h-100 m-4"
        img-src="/sertifikati/basic.png">
          Basic PRO
        </b-card>
      </template>
    </b-carousel-slide>
    
  </b-carousel>
  </b-container>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>