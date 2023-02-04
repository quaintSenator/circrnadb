<template>
    <div>
        <el-form label-width="80px">
            <el-form-item label="chromosome">
                <el-input v-model="id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">submit</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>


        <el-table ref="singleTable" highlight-current-row :data="RNATable" border
            style="width: 80%">
            <el-table-column label="circRNAs" border>

                <el-table-column prop="begin_position" label="begin position" width="180" sortable>
                </el-table-column>
                <el-table-column prop="end_position" label="end position" width="180" sortable>
                </el-table-column>
            </el-table-column>

        </el-table>
        <el-table ref="singleTable" :data="curisoforms" border style="width:80%" highlight-current-row>

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
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'search_gc',
    data() {
        return {
            id: "",
            RNATable: [],
            curisoforms: [],
            currentRow: null,
            cursegments: [],
            currentRowII: null,
        }
    },
    methods: {
        onSubmit() {
            this.freshData();
        },
        freshData() {
            console.log("freshing Data...");
            const that = this;
            var url = 'http://127.0.0.1:5000/api/rnas/by/byid/' + that.id
            console.log(url);
            axios.get(url).then(function (response) {
                // handle 
                that.RNATable = response.data.result;
                that.curisoforms = that.RNATable[0].isoforms
                that.cursegments = that.curisoforms[0].segments;
                //chr4:3476567-3476948_198976
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

            that.currentRow = that.RNATable[0];
            that.currentRowII = that.curisoforms[0];
            this.$notify({
                title: 'Please wait...',
                type: 'success',
                message: 'Request has been submitted. It may take some time to load the data...',
                duration: 5000
            })
        }
    }

}
</script>