<template>
  <div id="app">
    <div>
      <div class="line"></div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link :to="{ path: '/home' }" replace:true>Home</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">Data</template>
          <el-menu-item index="2-1">
            <router-link :to="{ path: '/browse' }" replace:true>Browse</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link :to="{ path: '/search' }" replace:true>Search</router-link>
          </el-menu-item>
          <!-- 
  <div class="block">

            <el-carousel trigger="click" height="300px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
              <el-submenu index="2-3">
              <template slot="title">选项4</template>
              <el-menu-item index="2-3-1">选项1</el-menu-item>
              <el-menu-item index="2-3-2">选项2</el-menu-item>
              <el-menu-item index="2-3-3">选项3</el-menu-item>
            </el-submenu>
            -->
        </el-submenu>
        <el-menu-item index="3">
          <router-link :to="{ path: '/download' }" replace:true>Download</router-link>

        </el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Tutorial</a></el-menu-item>

        <el-menu-item index="5">
          <router-link :to="{ path: '/tpa' }" replace:true>Translation probability analyse</router-link>
        </el-menu-item>

        <el-menu-item index="6">Network</el-menu-item>
      </el-menu>
      <router-view></router-view>
      <!--
<router-link :to="{ path: '/home' }" replace:true>home</router-link>
      <router-link :to="{ path: '/search' }" replace:true>search</router-link>
      <router-view></router-view>
            -->

    </div>

  </div>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
  name: "App",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
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