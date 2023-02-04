<template id="search">

    <div>
        <div>

            <div class="line"></div>

            <el-menu :default-active=activateIndex class="el-menu-demo" mode="horizontal" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b">

                <el-menu-item index="1">
                    <router-link :to="{ path: '/search/search_gc' }" replace:true><el-button>Search by genomic
                            coordinate</el-button></router-link>
                </el-menu-item>

                <el-menu-item index="2">
                    <router-link :to="{ path: '/search/search_isoid' }" replace:true><el-button>Search by
                            isoform_id</el-button></router-link>
                </el-menu-item>

            </el-menu>

            <div>
                <router-view></router-view>
            </div>

            <!--

    <router-link :to="{ path: '/tpa' }" replace:true>Translation probability analyse</router-link>

    <router-view></router-view>
-->
        </div>

    </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
    name: 'search',
    data() {
        return {
            activateIndex: '1'
        }
    },
    methods: {

    },
    components: { RouterView }
}
</script>

<style>
#app {
    font-family: Helvetica, sans-serif;
    text-align: center;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>