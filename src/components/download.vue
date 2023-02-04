<template>
    <div>
        <el-table ref="singleTable" :data="introTable" border style="width:80%" highlight-current-row
            @current-change="downloadLaunch">

            <el-table-column label="Download" border>
                <el-table-column prop="no" label="no" width="180" sortable>
                </el-table-column>
                <el-table-column prop="filename" label="dataset" width="180" sortable>
                </el-table-column>
                <el-table-column prop="description" label="description" width="180" sortable>
                </el-table-column>
                <el-table-column prop="size" label="size" width="180" sortable>
                </el-table-column>

            </el-table-column>

        </el-table>

        <a href="http://127.0.0.1:5000/api/rnas/download/all.new.bed">{{ introTable[0].filename }}</a>
        <ul></ul>
        <a href="http://127.0.0.1:5000/api/rnas/download/all.new.fa">{{ introTable[1].filename }}</a>
        <ul></ul>
        <a href="http://127.0.0.1:5000/api/rnas/download/rnas.json">{{ introTable[2].filename }}</a>
        <ul></ul>

    </div>
</template>
  
<script>
import axios from 'axios';
export default {

    name: 'download',
    data() {
        return {
            introTable: [
                {
                    "datalink": "http://127.0.0.1:5000/api/rnas/download/all.new.bed",
                    "filename": "all.new.bed",
                    "no": 1,
                    "description": "ciri-long anotation file in bed format",
                    "size":"35'604 kb"
                },
                {
                    "datalink": "http://127.0.0.1:5000/api/rnas/download/all.new.fa",
                    "filename": "all.new.fa",
                    "no": 2,
                    "description": "Sequencing results in fasta format",
                    "size":"240'173 kb"
                },
                {
                    "datalink": "http://127.0.0.1:5000/api/rnas/download/rnas.json",
                    "filename": "rnas.json",
                    "no": 3,
                    "description": "According to all.new.bed, we coded a C++ data transformer to get a json format file which has tidier key-value format.",
                    "size":"177'416 kb"
                }
            ]
        }
    },
    methods: {
        downloadLaunch(currentRow) {
            console.log(currentRow.datalink);

            //this.freshData(currentRow.datalink);
            //this.freshData("testdownload.txt")
        },
        freshData(downloadItem) {
            console.log("freshing Data...");
            const that = this;
            var url = 'http://127.0.0.1:5000/api/rnas/download/' + downloadItem;
            console.log(url);
            axios.get(url).then(function (response) {
                // handle 

            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });


            this.$notify({
                title: 'Please wait...',
                type: 'success',
                message: 'Request has been submitted. Starting download...',
                duration: 5000
            })
        },
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
