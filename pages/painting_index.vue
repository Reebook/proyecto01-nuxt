<template>
  <div>
    <headerView/>
     <div class="container">
      <h3 style="margin-top: 15px">Información de pinturas</h3>
        <p>Esta sección muestra el listado de pinturas</p>
      <ul>
        <ContentList path="/paintings" v-slot="{ list }">
           <li v-for="artist in list" :key="artist._path">
            <NuxtLink :to="artist._path">{{ artist.title }}</NuxtLink>
           </li>
         </ContentList>
      </ul>
      </div>
    <footerView/>
  </div>
 </template>