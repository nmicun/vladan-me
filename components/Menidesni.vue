<template>
<div>
  
                        
                            <p style="font-style:italic; padding-left:30px; padding:20px; margin-top:3px; color:white; font-size:calc(0.3rem + .5vw); text-align: center;">"Ispravan odabir i pravilno izvođenje vježbi veoma je važno ukoliko želite dobre rezultate. Bilo da ste profesionalni sportista ili rekreativac, uz stručnu pomoć i posvećen rad uspjeh je siguran."</p>
                       
                      
                            <h1 class="imeprofila">Vladan Mihailović</h1>
                      
                       
                            <h2 class="master-text">Profesor sporta i fizičke kulture</h2>
                        
                 
                      <b-container style="padding:20px; margin-top:40px;">
                            <b-button block v-b-modal.modal-sportisti variant="success" style="font-size:calc(0.4rem + .5vw); background-color: #CC4747; border-color:white;"><font-awesome-icon :icon="['fas','volleyball-ball']"/> Profesionalni sportisti</b-button>
                        
                        
                            <b-button block v-b-modal.modal-onlinetrening variant="success" style="font-size:calc(0.4rem + .5vw); background-color: #CC4747; border-color: white;"><font-awesome-icon :icon="['fas','chalkboard-teacher']"/> Online treninzi</b-button>
                     
                   
                            <b-button block v-b-modal.modal-rekreativci variant="success" style="font-size:calc(0.4rem + .5vw); background-color: #CC4747; border-color: white;"><font-awesome-icon :icon="['fas','running']"/> Rekreativci</b-button>
                     
                  
                        <b-button block v-b-modal.modal-treneri variant="success" style="font-size:calc(0.4rem + .5vw); background-color: #CC4747; border-color: white;"><font-awesome-icon :icon="['fas','graduation-cap']"/> Obuka trenera</b-button>
                      </b-container>




                    
</div>
</template>

<script>
import Navbarcomp from './navbarcomp.vue'
export default {

}
</script>

<style>
    .imeprofila {
        font-size: 1.2vw;
        margin: 10px;
        text-align: center;
        font-weight: bold;
        color: white;
        line-height: normal;
        text-shadow: 1px 1px 1px black;
    }

        .master-text {
        font-size: 0.9vw;
        text-align: center;
        color:white;
        text-shadow:1px 1px 1px black;
        
    }
</style>