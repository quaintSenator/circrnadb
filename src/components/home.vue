<template>
    <div>
        <div>
            <el-button @click="startHacking">Start</el-button>
            <el-button @click="jumptosearch">jumptosearch</el-button>
        </div>

        <!--
<div class="block">

            <el-carousel trigger="click" height="300px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        -->


    </div>
</template>
  
<script>

export default {
    name: 'home',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        startHacking() {
            this.$notify({
                title: 'It works!',
                type: 'success',
                message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                duration: 5000
            })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        jumptosearch() {
            this.$router.push('/search')
        }
    }
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
