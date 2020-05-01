<template>
    <div class="md-table" v-if="contriesData">
            <md-table class="country-table" md-height="100%" v-model="contriesData" md-sort="country" md-sort-order="asc" md-card md-fixed-header>
                <md-table-toolbar>
                    <h1 class="md-title">All Country Data</h1>
                </md-table-toolbar>
                <md-table-row slot="md-table-row" slot-scope="{ item }" class="text-left">
                    <md-table-cell md-label="Name" md-sort-by="country">{{ item.country }}</md-table-cell>
                    <md-table-cell md-label="CNFRMD" >{{ item.cases }}</md-table-cell>
                    <md-table-cell md-label="RCVRD" >{{ item.recovered }}</md-table-cell>
                    <md-table-cell md-label="DEAD" >{{ item.deaths }}</md-table-cell>
                </md-table-row>
            </md-table>
    </div>
    <div v-else-if="errorMsg" class="mt-5">
        <p class="text-white font-weight-bold">{{errorMsg}}</p>
    </div>
    <div v-else class="mt-5 d-flex align-items-center justify-content-center">
        <md-progress-spinner id="spinner" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"/>
        <h4 class="text-white pl-3 mb-0">Loading ... </h4>
    </div>
</template>

<script>
    import axios from 'axios';
    import {wwcountries} from '../core/apiURL'
    export default {
        name: 'worldwide',
        data(){
            return{
                contriesData : null,
                errorMsg : null
            }
        },
        mounted(){
            axios.get(wwcountries)
            .then(res =>{
                // console.log(res.data);
                this.contriesData = res.data;
            })
            .catch(err => {
                console.log(err);
                this.errorMsg = "We're sorry, but we're having some technical difficulties. Please try again later.";
            })
        }
    }
</script>

<style lang="scss" scoped>
    .md-app-content{
        padding: 5px !important;
    }
    .md-app-content .md-card{
        margin: 2px !important;
    }
    .md-table-head{
        font-size: 10px !important;
    }
    .md-table{
        height: 100% !important;
        max-height: 100vh !important;
    }   
    .md-height{
        overflow-x: initial !important;
    }
    @media only screen and (max-width: 500px) {
        .md-table-row{
            .md-table-cell{
                font-size: 10px !important;
                .md-table-cell-container{
                    padding: 10px !important;
                }
            }
        }
    }
</style>