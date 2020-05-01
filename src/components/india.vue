<template>
    <div id="app">
    <h2 class="text-white">India Covid Data</h2>
    <div v-if="indiaData">
        <div class="data-section">
            <h3 class="head-txt">India Data</h3>
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-primary">{{indiaData.confirmed}}</div>
                            <div class="md-subhead">Total Cases</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-danger">{{indiaData.active}}</div>
                            <div class="md-subhead">Active</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left" md-with-hover>
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-success">{{indiaData.recovered}}</div>
                            <div class="md-subhead">Recovered</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
                <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                    <md-card class="md-default text-left md-with-hover">
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title text-secondary">{{indiaData.deaths}}</div>
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
                                {{(Math.round(indiaData.recovered * 100) / indiaData.confirmed).toFixed(2)}} %
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
                                {{(Math.round(indiaData.deaths * 100) / indiaData.confirmed).toFixed(2)}} %
                            </div>
                            <div class="md-subhead">Death Rate</div>
                            </md-card-header-text>
                        </md-card-header>
                    </md-card>
                </div>
            </div>
        </div>
        <div class="stateData mt-3">
            <h3 class="text-left text-white" style="font-size:18px">State Data</h3>
            <table class="table table-bordered table-striped text-white table-hover" style="font-size:14px">
                <thead class="bg-white text-dark">
                <tr>
                    <th>State/UT</th>
                    <th>CNFRMD</th>
                    <th>RCVRD</th>
                    <th>DEAD</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-bind:key="item.state" v-for="item of stateData">
                        <td>{{item.state}}</td>
                        <td>{{item.confirmed}}</td>
                        <td>{{item.recovered}}</td>
                        <td>{{item.deaths}}</td>
                    </tr>
                </tbody>
            </table>  
        </div>
    </div>
    <div v-else class="mt-5 d-flex align-items-center justify-content-center">
        <md-progress-spinner id="spinner" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"/>
        <h4 class="text-white pl-3 mb-0">Loading ... </h4>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {testcount} from '../core/apiURL'
    export default {
        name: 'home',
        data(){
            return{
                indiaData : null,
                stateData : null
            }
        },
        mounted(){
            //overall india count
            axios.get(testcount)
            .then(res =>{
                // console.log(res.data);
                this.indiaData = res.data.statewise[0];
                this.stateData = res.data.statewise;
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
    
    .md-app-content{
        padding: 5px !important;
    }
    .md-app-content .md-card{
        margin: 2px !important;
    }

    .table-hover tbody tr:hover {
        color: #32475E;
        background-color: #3FB984;
        font-weight: bold;
    }
    .table thead{
        color: #32475E !important;
        background-color: #3FB984 !important;
        font-weight: bold;
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

</style>