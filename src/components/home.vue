<template>
    <div id="app">
    <div v-if="globalData">
        <h2 class="text-white">Worldwide Covid Data</h2>
        <div class="data-section">
            <h3 class="head-txt">Global Data</h3>
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-primary">{{globalData.cases}}</div>
                            <div class="md-subhead">Total Cases</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-danger">{{globalData.active}}</div>
                            <div class="md-subhead">Active</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-success">{{globalData.recovered}}</div>
                            <div class="md-subhead">Recovered</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left md-with-hover">
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-secondary">{{globalData.deaths}}</div>
                            <div class="md-subhead">Deaths</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
            </div>
        </div>
        <div class="data-section">
            <h3 class="head-txt">Recovery & Death Rate</h3>
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-success">
                                {{(Math.round(globalData.recovered * 100) / globalData.cases).toFixed(2)}} %
                            </div>
                            <div class="md-subhead">Recovery Rate</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-secondary">
                                {{(Math.round(globalData.deaths * 100) / globalData.cases).toFixed(2)}} %
                            </div>
                            <div class="md-subhead">Death Rate</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
            </div>
        </div>
        <div class="data-section">
            <h3 class="head-txt">Cases Graph</h3>
            <div class="mt-5">
                <Barcharts 
                    :confirmed="this.globalData.cases"
                    :active="this.globalData.active"  
                    :recovered="this.globalData.recovered" 
                    :deaths="this.globalData.deaths" 
                />
            </div>
        </div>
        <div class="data-section">
            <h3 class="head-txt">Important Links</h3>
            <ul style="margin-top: 40px;text-align: left;">
                <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">WHO - Coronavirus disease (COVID-19) Pandemic</a></li>
                <li><a href="https://coronavirus.jhu.edu/" target="_blank">Johns Hopkins - CORONAVIRUS RESOURCE CENTER</a></li>
            </ul>
        </div>
        <br>
    </div>
    <div v-else-if="errorMsg" class="mt-5">
        <p class="text-white font-weight-bold">{{errorMsg}}</p>
    </div>
    <div v-else class="mt-4 d-flex align-items-center justify-content-center">
        <md-progress-spinner id="spinner" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"/>
        <h4 class="text-white mb-0">Loading ... </h4>
    </div>
    </div>
    
</template>

<script>
    import axios from 'axios';
    import {wwdata} from '../core/apiURL'
    import Barcharts from '../components/charts/barcharts'

    export default {
        name: 'home',
        components:{
            Barcharts
        },
        data(){
            return{
                globalData : null,
                errorMsg : null
            }
        },
        mounted(){
            axios.get(wwdata)
            .then(res =>{
                this.globalData = res.data
            })
            .catch(err => {
                console.log(err);
                this.errorMsg = "We're sorry, but we're having some technical difficulties. Please try after sometime.";
            })
        }
    }
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables";
    .data-section{
        border: 1px solid #3FB984;
        border-radius: 10px;
        position: relative;
        padding: 0px 10px 40px 10px;
        margin-top: 40px;
        .head-txt{
            position: absolute;
            top: -15px;
            left: 20px;
            background-color: #32475E;
            color: #fff !important;
            padding: 5px;
            font-size: 18px;
        }
    }
    .md-layout{
        .md-layout-item {
            height: 40px;
            margin-top: 40px;
            margin-bottom: 40px;
            transition: .3s $md-transition-stand-timing;
            &:after {
                width: 100%;
                height: 100%;
                display: block;
                background: md-get-palette-color(purple, 200);
                content: " ";
            }
            .md-card{
                border-radius: 5px;
            }
            .md-title{
                font-weight: bold;
            }
            .md-subhead{
                color: #32475E !important;
                font-weight: bold;
                opacity: 1;
            }
        }
    }
    
    @media only screen and (max-width: 500px) {
        .md-card .md-subhead {
            font-size: 12px !important;
            font-weight: bold;
        }
        .md-app-content .md-card {
            margin-right: 5px;
            margin-left: 5px;
            overflow: visible;
        }
    }
      .md-progress-spinner {
    margin: 24px;
  }
</style>