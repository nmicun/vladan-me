<template>
  <div class="footer-menu d-lg-none">
<b-container fluid >
     <b-row style="background-color:white;">
    <b-col v-b-modal.modal-sportisti cols="3" class="text-center column-btn"><span style="color:black; font-size:20px; margin-bottom:2px!important; ">
       <a class="footer-span" style="color:black" href="#"> 
       <font-awesome-icon :icon="['fas','volleyball-ball']"/>
       <p class="naslovi-btn">Profesionalni sportisti</p>
       </a>
    </span></b-col>
    <b-col v-b-modal.modal-onlinetrening cols="3" class="text-center column-btn"><span  style="color: black; font-size:20px; margin-bottom:2px!important;" class="justify-content=center">
      <a class="footer-span" style="color:black" href="#">  <font-awesome-icon :icon="['fas','chalkboard-teacher']"/>
      <p class="naslovi-btn">Online treninzi</p></a>
    </span></b-col>
    <b-col v-b-modal.modal-rekreativci cols="3" class="text-center column-btn"><span class="ml-auto" style="color: black; font-size:20px; margin-bottom:2px!important; ">
        <a class="footer-span" style="color:black" href="#"><font-awesome-icon :icon="['fas','running']"/>
          <p class="naslovi-btn">Rekreativci</p></a>
    </span></b-col>
    <b-col v-b-modal.modal-treneri cols="3" class="text-center column-btn"  ><span  style="color:black; font-size:20px; margin-bottom:2px!important; ">
       <a class="footer-span" style="color:black" href="#"> 
       <font-awesome-icon :icon="['fas','graduation-cap']"/>
       <p class="naslovi-btn">Obuka trenera</p>
       </a>
    </span></b-col>
     </b-row>
</b-container>
</div>
</template>

<script>
export default {

}
</script>

<style>
.footer-menu {
  position: fixed;
   z-index: 100;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: black 1px;
}
.naslovi-btn {font-size: 11px; font-style:inherit; font-weight: bold;}
.footer-span:hover {
color: rgb(255, 255, 255)!important;
text-decoration: unset;
}
.column-btn {
  border: 1px solid black;
}
.column-btn:hover {
  background-color:rgb(80, 184, 245);
}
</style>