<template>
    <div>
        <el-table ref="singleTable" highlight-current-row @current-change="handleCurrentChange" :data="RNATable" border
            style="width: 80%">
            <el-table-column label="circRNAs" border>

                <el-table-column prop="begin_position" label="begin position" width="180" sortable>
                </el-table-column>
                <el-table-column prop="end_position" label="end position" width="180" sortable>
                </el-table-column>
            </el-table-column>

        </el-table>

        <el-table ref="singleTable" :data="curisoforms" border style="width:80%" highlight-current-row
            @current-change="handleCurrentChangeII">

            <el-table-column label="Isoforms" border>
                <el-table-column prop="chromosome" label="chromosome" width="180" sortable>
                </el-table-column>
                <el-table-column prop="isoform_id" label="isoform_id" width="180" sortable>
                </el-table-column>
                <el-table-column prop="segment_number" label="segment_number" width="180" sortable>
                </el-table-column>
            </el-table-column>

        </el-table>


        <el-table highlight-current-row :data="cursegments" border style="width: 80%">
            <el-table-column label="Segments" border>
                <el-table-column prop="segment_begin" label="segment_begin" width="180" sortable>
                </el-table-column>
                <el-table-column prop="segment_length" label="segment_length" width="180" sortable>
                </el-table-column>
                <el-table-column prop="absolute_begin" label="absolute_begin" width="180" sortable>
                </el-table-column>
                <el-table-column prop="absolute_end" label="absolute_end" width="180" sortable>
                </el-table-column>
            </el-table-column>


        </el-table>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange_page"
            :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper" :total="263892">
        </el-pagination>


    </div>
    <!--

    -->

</template>

<script>
import axios from 'axios';
export default {
    name: "browse",

    methods: {
        freshData() {
            console.log("freshing Data...");
            const that = this;
            var url = 'http://8.136.185.34:5000/api/rnas/PageNo/' + that.currentPage + "/"+"PageSize/" + that.pageSize;
            console.log(url);
            axios.get(url).then(function (response) {
                // handle success
                that.RNATable = response.data.result;
                that.curisoforms = that.RNATable[0].isoforms
                that.cursegments = that.curisoforms[0].segments;

                console.log("cursegments=");
                console.log(that.cursegments);
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
                message: 'Request has been submitted. It may take some time to load the data...',
                duration: 5000
            })
        },
        onCreate: async function () {
            const that = this;
            this.freshData();
        },
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);

        },
        handleCurrentChange(val) {
            this.currentRow = val;
            this.curisoforms = this.currentRow.isoforms;
            console.log("this.curisoforms");
            console.log(this.curisoforms);
        },
        handleCurrentChangeII(val) {
            this.currentRowII = val;
            this.cursegments = this.currentRowII.segments;
            console.log("this.cursegments");
            console.log(this.cursegments);

        },
        handleCurrentChange_page(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.freshData();
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.freshData();
        }

    },
    mounted: function () {
        this.onCreate();
    },
    data() {
        return {
            RNATable: [],
            curisoforms: [],
            currentRow: null,
            cursegments: [],
            currentRowII: null,
            currentPage: 1,
            pageSize: 5
        }
    }
}
</script>