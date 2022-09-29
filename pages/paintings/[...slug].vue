<template>
  <main>
    <headerView />
    <div class="container">

     <div class="row">
       <ContentDoc v-slot="{doc}">
       <div class="three columns">
         <img class="u-max-full-width" :src="'../assets/images/'+doc.image">
       </div>
       <div class="six columns">
         <h4>{{doc.title}}</h4>
         by <NuxtLink :to="'/artist/'+doc.artistid">{{doc.artist}}</NuxtLink>
          <pre></pre>
         <h5>Descripción</h5>
          <ContentRenderer :value="doc" />
       </div>

      </ContentDoc>
     </div>

   </div>
   <footerView />
  </main>
</template>