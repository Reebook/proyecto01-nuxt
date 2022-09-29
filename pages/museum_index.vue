<template>
  <div>
    <headerView/>
     <div class="container">
      <h3 style="margin-top: 15px">Información de museos</h3>
        <p>En esta sección muestra la lista de museos</p>
      <ul>
        <ContentList path="/museum" v-slot="{ list }">
           <li v-for="artist in list" :key="artist._path">
            <NuxtLink :to="artist._path">{{ artist.title }}</NuxtLink>
           </li>
         </ContentList>
      </ul>
 
    </div>
    <footerView/>
  </div>
 </template>