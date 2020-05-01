<template>
  <div class="page-container">
    <md-app class="full-height md-accent" md-mode="fixed">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">Vue Covid Dashboard</span>
          </div>

        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-home" md-label="Home" to="/home" exact></md-tab>
            <md-tab id="tab-pages" md-label="All Countries" to="/worldwide"></md-tab>
            <md-tab id="tab-posts" md-label="India" to="/india"></md-tab>
            <md-tab id="tab-favorites" md-label="Daily Cases" to="/view-chart-daily"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent md-title" md-elevation="0">About us</md-toolbar>

        <md-list>
          <md-list-item>
            <md-avatar class="md-avatar-icon md-small"><md-ripple>G</md-ripple></md-avatar>
            <a class="md-list-item-text md-subheading md-accent" href="https://covid19-bharat.web.app/" target="_blank">Github</a>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon md-small"><md-ripple>L</md-ripple></md-avatar>
            <a class="md-list-item-text md-subheading md-accent" href="https://www.linkedin.com/in/iamvipsingh/" target="_blank">Linked In</a>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon md-small"><md-ripple>V</md-ripple></md-avatar>
            <a class="md-list-item-text md-subheading md-accent" href="https://vuejs.org/" target="_blank">Vue js</a>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon md-small"><md-ripple>M</md-ripple></md-avatar>
            <a class="md-list-item-text md-subheading md-accent" href="https://vuematerial.io/" target="_blank">Material</a>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon  md-small"><md-ripple>R</md-ripple></md-avatar>
            <a class="md-list-item-text md-subheading md-accent" href="https://covid19-bharat.web.app/" target="_blank">React Covid</a>
          </md-list-item>

          <md-list-item>
            <md-avatar class="md-avatar-icon md-small"><md-ripple>C</md-ripple></md-avatar>
            <a class="md-list-item-text md-subheading md-accent" href="https://covid19-bharat.web.app/" target="_blank">Covid19 WebApp</a>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="md-accent">
        <router-view></router-view>  
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  .full-height{
    height: 100vh;
    background: #32475E !important;
  }
  .md-app {
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
export default {
  name: 'LastRowFixed',
  data: () => ({
    menuVisible: false
  })
}
</script>